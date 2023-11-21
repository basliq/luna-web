import s from './hero.module.scss'
import {Button} from '@/component/button/Button.tsx'

export const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.text}>
          <h1 className='black all-uppercase'>
            This is a placeholder for the main title
          </h1>
          <p className='subtitle-h1'>
            This text is a placeholder for the sub-title text. This text might
            span into many lines.
          </p>
        </div>
        <Button text='Try it out' size='large' endIcon='arrowRight' />
      </div>
    </div>
  )
}
