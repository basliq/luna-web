import s from './section.module.scss'

type SectionProps = {
  children: React.ReactNode
}

export const Section = ({children}: SectionProps) => {
  return <section className={s.section}>{children}</section>
}
