import s from './spinner.module.scss'

// This component is an adapter for spinner downloaded from
// https://loading.io/css/

type SpinnerProps = {
  size: 'small' | 'medium' | 'large'
}

export const Spinner = ({size = 'small'}: SpinnerProps) => {
  return (
    <div className={`${s.ldsRoller} ${s[size]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
