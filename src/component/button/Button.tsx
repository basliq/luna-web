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
  startIcon?: Icons
  endIcon?: Icons
  status?: ButtonStates
  pendingStateText?: string
  handleClick?: () => void
  justifyItems?: ButtonJustifyValues
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
