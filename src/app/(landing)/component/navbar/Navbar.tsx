import s from './navbar.module.scss'
import Link from 'next/link'
import {Button} from '@/component/button/Button'
import {Dropdown} from '@/component/dropdown/Dropdown'
import {Logo} from '@/component/logo/Logo'

export const Navbar = () => {
  return (
    <nav className={s.container}>
      <Link href='/'>
        <Logo />
      </Link>
      <div className={s.mainNav}>
        <Button text='Home' type='tertiary' />
        <Dropdown
          menuType='flyout'
          position='blockEndCenter'
          target={<Button text='Features' type='tertiary' icon='chevronDown' />}
        >
          <div>hi</div>
        </Dropdown>
        <Link href='#'>
          <Button text='Academy' type='tertiary' icon='arrowTopRight' />
        </Link>
      </div>
      <div className={s.authNav}>
        <Button text='Log in' type='secondary' />
        <Button text='Sign up' />
      </div>
    </nav>
  )
}
