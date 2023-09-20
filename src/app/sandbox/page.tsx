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
            contain, but are not limited to, pattern libraries, design
            languages, style guides, coded components, brand languages, and
            documentation.
          </p>
        </div>

        <div className={s.text}>
          <h2>Why do we need a design system?</h2>

          <ul>
            <li>
              <h3>We can see every major component in one look.</h3>
            </li>
            <li>
              <h3>We can create new themes easily.</h3>
            </li>
            <li>
              <h3>We can test things quickly.</h3>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
