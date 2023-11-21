import s from './button.module.scss'
import {Spinner} from '@/component/spinner/Spinner.tsx'

// TODO
// enhance the type by making sure at least either icon or text is passed in as props
// add popover to button element: I think 95% of usage for popover tooltip is for buttons
// add image support for button
// add justify settings for icons
// add assistive voice over for buttons

export type ButtonSizes = 'small' | 'medium' | 'large'
export type ButtonTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'special'
export type ButtonStates = 'idle' | 'pending' | 'disabled'
export type ButtonAnimations = 'none' | 'move-inline-end' | 'rotate-clock-wise'
export type ButtonJustifyValues = 'center' | 'space-between' | 'space-end'

type Props = {
  size?: ButtonSizes
  type?: ButtonTypes
  text?: string
  status?: ButtonStates
  pendingStateText?: string
  disabledStateText?: string
  handleClick?: () => void
  startItem?: React.ReactNode
  startItemColor?: string
  endItem?: React.ReactNode
  endItemColor?: string // we need a color type
  animation?: ButtonAnimations
  justifyItems?: ButtonJustifyValues
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
}: Props) => {
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

  return (
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
      disabled={status === 'disabled'}
    >
      {getContent()}
    </button>
  )
}
