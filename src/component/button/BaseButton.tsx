'use client'

import s from './button.module.scss'
import {Spinner} from '@/component/spinner/Spinner.tsx'
import {Dropdown} from '@/component/dropdown/Dropdown.tsx'

// TODO
// add popover to button element: I think 95% of usage for popover tooltip is for buttons

export type ButtonSizes = 'small' | 'medium' | 'large'
export type ButtonTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'special'

export type ButtonStates = 'idle' | 'pending' | 'disabled'
export type ButtonAnimations = 'none' | 'move-inline-end' | 'rotate-clock-wise'
export type ButtonJustifyValues =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-end'

type Props = {
  size?: ButtonSizes
  type?: ButtonTypes
  text?: string
  status?: ButtonStates
  pendingStateText?: string
  disabledStateText?: string
  handleClick?: () => void
  startItem?: React.ReactNode
  endItem?: React.ReactNode
  animation?: ButtonAnimations
  justifyItems?: ButtonJustifyValues
  popoverText?: string
  popoverPosition?: string
}

export const BaseButton = ({
  size = 'medium',
  type = 'primary',
  text,
  status = 'idle',
  pendingStateText = 'Connecting to Server',
  disabledStateText,
  handleClick,
  startItem,
  endItem,
  animation = 'none',
  justifyItems = 'center',
  popoverText,
}: Props) => {
  const settings = {
    utter: false,
  }

  const utter = () => {
    if (!settings.utter) return
    const utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }
  const getContent = () => {
    if (status === 'pending') {
      return (
        <>
          <Spinner size={size} />
          <p>{pendingStateText}</p>
        </>
      )
    } else if (status === 'disabled') {
      return <p>{disabledStateText}</p>
    } else {
      return (
        <>
          {startItem}
          {text && <p>{text}</p>}
          {endItem}
        </>
      )
    }
  }

  const button = (
    <button
      className={`
        ${s.button}
        ${s[size]}
        ${s[type]}
        ${status === 'pending' ? s.pending : null}
        ${s[animation]}
        ${s[justifyItems]}
      `}
      onClick={handleClick}
      onMouseEnter={utter}
      disabled={status === 'disabled'}
    >
      {getContent()}
    </button>
  )

  // button with no popover
  if (!popoverText) return button

  // rendering a popover element when hovering on button
  return (
    <Dropdown openOn='hover' menuType='dropdown' target={button}>
      <p>{popoverText}</p>
    </Dropdown>
  )
}
