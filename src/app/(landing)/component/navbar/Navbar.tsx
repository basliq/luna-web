import s from './navbar.module.scss'
import Link from 'next/link'
import {Dropdown} from '@/component/dropdown/Dropdown'
import {Logo} from '@/component/logo/Logo'
import {Button} from '@/component/button/Button.tsx'

export const Navbar = () => {
  return (
    <nav className={s.container}>
      <Link href='/'>
        <Logo animated />
      </Link>
      <div className={s.mainNav}>
        <Button text='Home' type='tertiary' />
        <Dropdown
          menuType='flyout'
          position='blockEndCenter'
          target={
            <Button text='Features' type='tertiary' endIcon='chevronDown' />
          }
        >
          <div>hi</div>
        </Dropdown>
        <Link href='#'>
          <Button text='Academy' type='tertiary' endIcon='arrowTopRight' />
        </Link>
      </div>
      <div className={s.authNav}>
        <Button text='Log in' type='secondary' />
        <Button text='Sign up' />
      </div>
    </nav>
  )
}
