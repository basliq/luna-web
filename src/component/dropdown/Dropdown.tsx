'use client'

import {RelativePosition} from '@/type/relative-position'
import s from './dropdown.module.scss'
import {useState, useEffect, useRef} from 'react'

// TODO:
// add animations
// add support for automatic position change if there is no space
// * nested menu:
// add nested dropdowns
// handle not closing the dropdown if clicked in a nested menu
// * keyboard:
// handle closing menu with Esc key
// add keyboard support
// * timing
// add delay and close after an interval option

type DropdownParentType =
  | null
  | ((value: boolean | ((prevState: boolean) => void)) => void)

type DropdownProps = {
  target: React.ReactNode
  children: React.ReactNode
  menuType?: 'dropdown' | 'flyout' | 'context' | 'popover'
  position?: RelativePosition
  initialState?: 'open' | 'close'
  openOn?: 'click' | 'hover'
  dropdownParentStateFunction?: DropdownParentType
}

export const Dropdown = ({
  target,
  children,
  menuType = 'dropdown',
  position = 'blockEndStart',
  initialState = 'close',
  openOn = 'click',
  dropdownParentStateFunction = null,
}: DropdownProps) => {
  // states and refs
  const [open, setOpen] = useState(initialState === 'open')
  const targetContainerRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    if (targetContainerRef.current !== null) {
      const targetHeight = targetContainerRef.current.offsetHeight
      const targetWidth = targetContainerRef.current.offsetWidth
      rootRef.current?.style.setProperty(
        '--target-block-size',
        targetHeight.toString() + 'px',
      )
      rootRef.current?.style.setProperty(
        '--target-inline-size',
        targetWidth.toString() + 'px',
      )
    }
  }, [])

  const getPosition = (): RelativePosition => {
    // TODO - add automatic position change
    return position
  }

  // handlers
  const handleClose = () => {
    setOpen(false)
    if (dropdownParentStateFunction === null) return
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClick = () => {
    if (open) handleClose()
    if (openOn === 'hover') return
    if (!open) handleOpen()
  }

  const handleMouseEnter = () => {
    if (openOn === 'click') return
    handleOpen()
  }

  const handleMouseLeave = () => {
    if (openOn === 'click') return
    handleClose()
  }

  return (
    <div className={s.root} ref={rootRef} onMouseLeave={handleMouseLeave}>
      <div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        ref={targetContainerRef}
      >
        {target}
      </div>
      <div
        className={`
        ${s.offset}
        ${open ? s.show : ''}
        ${s[menuType]}
        ${s[getPosition()]}`}
        ref={dropdownRef}
      >
        <div className={s.container}>{children}</div>
      </div>
    </div>
  )
}
