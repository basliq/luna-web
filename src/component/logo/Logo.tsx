import s from './logo.module.scss'
import Image from 'next/image'
import logoSVG from '../../../public/luna-logo-v2.svg'

type LogoProps = {
  withText?: boolean
  animated?: boolean
}

export const Logo = ({withText = true, animated = false}: LogoProps) => {
  // TODO
  // ? how to not type an svg import?

  return (
    <figure className={`${s.container} ${animated ? s.animated : undefined}`}>
      <Image width={50} height={50} src={logoSVG as string} alt='Luna Logo' />
      {withText && <p>Luna</p>}
    </figure>
  )
}
