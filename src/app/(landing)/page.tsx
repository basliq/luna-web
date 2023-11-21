import {Header} from './component/header/Header'
import {Section} from './component/section/Section'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <h2>This is the heading for this section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum
            similique saepe odit sit. Nesciunt ullam sit ratione, cumque nihil
            voluptatem nulla id autem debitis, eos cum veritatis sint. Illo
            veniam minima corporis quis odio animi expedita maxime laborum ad
            numquam nam, explicabo quo ipsum. Autem non enim perspiciatis modi?
          </p>
        </Section>
        <Section>
          <h2>This is the heading for this section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum
            similique saepe odit sit. Nesciunt ullam sit ratione, cumque nihil
            voluptatem nulla id autem debitis, eos cum veritatis sint. Illo
            veniam minima corporis quis odio animi expedita maxime laborum ad
            numquam nam, explicabo quo ipsum. Autem non enim perspiciatis modi?
          </p>
        </Section>
      </main>
    </>
  )
}
