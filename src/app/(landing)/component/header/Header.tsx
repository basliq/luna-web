import {Hero} from '../hero/Hero'
import {Navbar} from '../navbar/Navbar'
import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.container}>
      <Navbar />
      <Hero />
    </header>
  )
}
