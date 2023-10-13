import s from './button.module.scss'
import Icon, {IconTypes} from '../../icon/Icon.tsx'
import {Spinner} from '@/component/spinner/Spinner.tsx'

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'special'
type ButtonStatus = 'static' | 'pending' | 'disabled'
type IconPosition = 'before-text' | 'after-text'

// TODO - enhance the type by making sure at least either icon or text is passed in as props
type ButtonProps = {
  size?: ButtonSize
  type?: ButtonType
  icon?: IconTypes
  iconPosition?: IconPosition
  text?: string
  status?: ButtonStatus
  pendingText?: string
  handleClick?: () => void
}

export const Button = ({
  size = 'medium',
  type = 'primary',
  icon,
  iconPosition = 'before-text',
  text,
  status = 'static',
  pendingText = 'Connecting to Server',
  handleClick,
}: ButtonProps) => {
  if (!icon && !text) {
    throw new Error(`either "text" or "icon" property must be defined.`)
  }

  const getContent = () => {
    if (status === 'pending') {
      return (
        <>
          <Spinner size={size} />
          <p>{pendingText}</p>
        </>
      )
    } else {
      return (
        <>
          {icon && iconPosition === 'before-text' && (
            <Icon size={size} type={icon} />
          )}
          {text && <p>{text}</p>}
          {icon && iconPosition === 'after-text' && (
            <Icon size={size} type={icon} />
          )}
        </>
      )
    }
  }
  return (
    <button
      className={`${s.button} ${s[size]} ${s[type]} ${
        status === 'pending' ? s.pending : null
      }`}
      onClick={handleClick}
      disabled={status === 'disabled'}
    >
      {getContent()}
    </button>
  )
}
