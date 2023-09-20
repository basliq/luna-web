import s from './styles.module.scss'

export default function Sandbox() {
  return (
    <div className={s.container}>
      <section className={s.intro}>
        <div>
          <h1>
            Hi there! This page showcases the design system of Luna web
            application.
          </h1>
          <p className='subtitle-h1'>
            For both the documentation purposes and testing the visuals in a
            quick way.
          </p>
        </div>

        <div className={s.text}>
          <h2>So what is a design system?</h2>
          <p className='subtitle-h2'>
            Let&apos;s get a brief understanding of a design system from
            wikipedia.
          </p>
          <p className='paragraph'>
            A Design system is a collection of reusable components, guided by
            clear standards, that can be assembled together to build any number
            of applications. Design systems aid in digital product design and
            development of products such as applications or websites. They may
            contain, but are not limited to,{' '}
            <span className='underline'>
              pattern libraries, design languages, style guides, coded
              components, brand languages, and documentation
            </span>
            .
          </p>
        </div>

        <div className={s.text}>
          <h2>Why do we need a design system?</h2>
          <p className='paragraph'>
            Let us have a quick look over the most important takeaways of{' '}
            <span className='highlight'>design systems</span> and learn why
            having a great design system is{' '}
            <span className='bold'>crucial</span> to serious applications.
          </p>

          <ul className='margin-top-medium'>
            <li>
              <h3>See every major component in one look</h3>
            </li>
            <li>
              <h3>Create new themes easily</h3>
            </li>
            <li>
              <h3>Test things quickly</h3>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
