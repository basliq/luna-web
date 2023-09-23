import s from './button.module.scss'
import Icon, {IconTypes} from '../../icon/Icon.tsx'

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'special'

// TODO - enhance the type by making sure at least either icon or text is passed in as props
type ButtonProps = {
  size?: ButtonSize
  type?: ButtonType
  icon?: IconTypes
  text?: string
}

export const Button = ({
  size = 'medium',
  type = 'primary',
  icon,
  text,
}: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${s[size]} ${s[type]} ${
        text ? null : s.iconOnly
      }`}
    >
      {icon && <Icon size={size} type={icon} />}
      {text && <p>{text}</p>}
    </button>
  )
}
