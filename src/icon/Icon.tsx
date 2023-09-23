import s from './icon.module.scss'
import {IconMap} from './icon-map.tsx'

export type IconTypes = keyof typeof IconMap
type IconSizes = 'small' | 'medium' | 'large'
type IconColors = 'text'

type props = {
  type: IconTypes
  size?: IconSizes
  color?: IconColors
}

export default function Icon({type, size = 'medium', color = 'text'}: props) {
  function getIconSVGPath(icon: IconTypes): React.ReactNode {
    return IconMap[icon]
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={`${s[size]} ${s[color]}`}
    >
      {getIconSVGPath(type)}
    </svg>
  )
}
