import s from './navbar.module.scss'
import logoSVG from '../../../../../public/luna-logo-v2.svg'
import Image from 'next/image'
import {Button} from '@/component/button/Button'

export const Navbar = () => {
  return (
    <nav className={s.container}>
      <figure className={s.logo}>
        <Image width={50} height={50} src={logoSVG as string} alt='Luna Logo' />
        <p>Luna</p>
      </figure>
      <div className={s.mainNav}>
        <Button text='Home' type='tertiary' />
        <Button text='Features' type='tertiary' />
        <Button text='Academy' type='tertiary' />
      </div>
      <div className={s.authNav}>
        <Button text='Log in' type='secondary' />
        <Button text='Sign up' />
      </div>
    </nav>
  )
}
