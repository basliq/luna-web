import {
  BaseButton,
  ButtonJustifyValues,
  ButtonSizes,
  ButtonStates,
  ButtonTypes,
} from '@/component/button/BaseButton.tsx'
import Icon, {Icons} from '@/icon/Icon.tsx'

type Props = {
  size?: ButtonSizes
  type?: ButtonTypes
  text: string
  status?: ButtonStates
  pendingStateText?: string
  handleClick?: () => void
  startIcon?: Icons
  endIcon?: Icons
  justifyItems?: ButtonJustifyValues
  popoverText?: string
}

export const Button = (props: Props) => {
  const startItem = props.startIcon ? (
    <Icon type={props.startIcon} size={props.size} />
  ) : null
  const endItem = props.endIcon ? (
    <Icon type={props.endIcon} size={props.size} />
  ) : null

  return <BaseButton {...props} startItem={startItem} endItem={endItem} />
}
