'use client'

import s from './dropdown.module.scss'
import {useState} from 'react'

type OpenOnType = 'click' | 'hover'

type DropdownChildren = {
  target: React.ReactNode
  children: React.ReactNode
  initialState?: 'open' | 'close'
  openOn?: OpenOnType
  parentDropdownStateFunction:
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
  const [open, setOpen] = useState(initialState === 'open')

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

  const handleMouseEnter = () => {
    if (openOn === 'click') return
    handleOpen()
  }

  const handleMouseLeave = () => {
    if (openOn === 'click') return
  }

  return (
    <div className={s.root}>
      <div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {target}
      </div>

      <div className={s.offset}>
        <div className={s.container}>{children}</div>
      </div>
    </div>
  )
}
