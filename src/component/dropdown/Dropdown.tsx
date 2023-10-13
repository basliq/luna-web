'use client'

import s from './dropdown.module.scss'
import {useState, useEffect, useRef} from 'react'

// TODO - add support for hover triggers

type OpenOnType = 'click' | 'hover'

type DropdownChildren = {
  target: React.ReactNode
  children: React.ReactNode
  initialState?: 'open' | 'close'
  openOn?: OpenOnType
  parentDropdownStateFunction?:
    | null
    | ((value: boolean | ((prevState: boolean) => void)) => void)
}

export const Dropdown = ({
  target,
  children,
  initialState = 'close',
  openOn = 'click',
  parentDropdownStateFunction = null,
}: DropdownChildren) => {
  // states and refs
  const [open, setOpen] = useState(initialState === 'open')
  const rootRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // effects
  useEffect(() => {
    const handleClickOutside = ($e: MouseEvent) => {
      if (
        dropdownRef.current &&
        // @ts-expect-error: couldn't find the right type for this event.
        !dropdownRef.current.contains($e.target) &&
        rootRef.current &&
        // @ts-expect-error: couldn't find the right type for this event.
        !rootRef.current.contains($e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  // handlers
  const handleClose = () => {
    setOpen(false)
    if (parentDropdownStateFunction === null) return
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClick = () => {
    if (openOn === 'hover') return
    if (open) handleClose()
    if (!open) handleOpen()
  }

  return (
    <div className={s.root} ref={rootRef}>
      <div onClick={handleClick}>{target}</div>

      <div className={`${s.offset} ${open ? s.show : ''}`} ref={dropdownRef}>
        <div className={s.container}>{children}</div>
      </div>
    </div>
  )
}
