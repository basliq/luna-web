import s from './button.module.scss'
import Icon, {Icons} from '../../icon/Icon.tsx'
import {Spinner} from '@/component/spinner/Spinner.tsx'

// TODO
// enhance the type by making sure at least either icon or text is passed in as props
// add focus related api: whether show focus ring or not and and add CSS for it
// add popover to button element: I think 95% of usage for popover tooltip is for buttons
// add image support for button
// add justify settings for icons
// add assistive voice over for buttons

type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  type?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'special'
  icon?: Icons
  iconPosition?: 'before-text' | 'after-text'
  text?: string
  status?: 'static' | 'pending' | 'disabled'
  pendingText?: string
  handleClick?: () => void
}

export const Button = ({
  size = 'medium',
  type = 'primary',
  icon,
  iconPosition = 'after-text',
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
      className={`
      ${s.button}
      ${s[size]}
      ${s[type]}
      ${status === 'pending' ? s.pending : null}`}
      onClick={handleClick}
      disabled={status === 'disabled'}
    >
      {getContent()}
    </button>
  )
}
