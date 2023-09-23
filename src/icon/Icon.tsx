import s from './icon.module.scss'
import {IconMap} from './icon-map.tsx'

// This project uses icons from Material Design.
//
// We are not using a cdn or local icon font because we won't be needing more than
// 200 icons and downloading all those icons in a font won't do the end user and good.
//
// We get the individual icons we need from https://icones.js.org/collection/mdi and
// extract the svg path and create a component out of them like the ones in ./svg
// folder.

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
