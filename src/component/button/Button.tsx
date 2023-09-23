import s from './button.module.scss'
import Icon, {IconTypes} from '../../icon/Icon.tsx'

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'special'
type ButtonStatus = 'static' | 'pending' | 'disabled'

// TODO - enhance the type by making sure at least either icon or text is passed in as props
type ButtonProps = {
  size?: ButtonSize
  type?: ButtonType
  icon?: IconTypes
  text?: string
  status?: ButtonStatus
  pendingText?: string
  handleClick?: () => void
}

export const Button = ({
  size = 'medium',
  type = 'primary',
  icon,
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
      // TODO - add spinner for pending status
      return (
        <>
          <p>{pendingText}</p>
        </>
      )
    } else {
      return (
        <>
          {icon && <Icon size={size} type={icon} />}
          {text && <p>{text}</p>}
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
