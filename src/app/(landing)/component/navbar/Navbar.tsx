import s from './navbar.module.scss'
import logoSVG from '../../../../../public/luna-logo-v2.svg'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/component/button/Button'
import {Dropdown} from '@/component/dropdown/Dropdown'

export const Navbar = () => {
  return (
    <nav className={s.container}>
      <Link href='/'>
        <figure className={s.logo}>
          <Image
            width={50}
            height={50}
            src={logoSVG as string}
            alt='Luna Logo'
          />
          <p>Luna</p>
        </figure>
      </Link>
      <div className={s.mainNav}>
        <Button text='Home' type='tertiary' />
        <Dropdown
          menuType='flyout'
          target={
            <Button
              text='Features'
              type='tertiary'
              icon='chevronDown'
              iconPosition='after-text'
            />
          }
        >
          <div>hi</div>
        </Dropdown>
        <Link href='#'>
          <Button
            text='Academy'
            type='tertiary'
            icon='arrowTopRight'
            iconPosition='after-text'
          />
        </Link>
      </div>
      <div className={s.authNav}>
        <Button text='Log in' type='secondary' />
        <Button text='Sign up' />
      </div>
    </nav>
  )
}
