import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Quiz from "../components/quiz"
import Question from "../components/question"
import Answer from "../components/answer"
import SEO from "../components/seo"
import happy from "../images/happy.jpg"

const phrases = [
  'Ergo',
  'Entonces',
  'Por lo tanto',
  'Por ello',
  'Siendo así',
  'Por esto'
]

const Answers = ({ location }) => (
  <Layout>
    <SEO title="Respuestas" />
    <h1>Revisión de errores</h1>
    <h2>Aún estamos implementando esta sección. ¡Vuelve pronto!</h2>
    <img src={happy} alt='Be Happy!' style={{
      maxHeight: '70vh',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    }}/><br />
    <Quiz>
      {location.state ? location.state.data.map((d, i) => {
        var first=Math.floor(Math.random() * 5)
        return (
          <>
            <Question data={d} iter={i} number={d.number} answ='hidden' />
            <Answer data={d.desc} />
            <p>{`${phrases[first]}, la respuesta correcta es el inciso ${d.answer}) ${d.answer === 'A' ?
              d.options[0].val
            : d.answer === 'B' ?
              d.options[1].val
            : d.answer === 'C' ?
              d.options[2].val
            : d.answer === 'D' ?
              d.options[3].val
            : null
            }`}</p>
            {/*d.answer === 'A' ?
              <p>{d.options[0].val}</p>
            : d.answer === 'B' ?
              <p>{d.options[1].val}</p>
            : d.answer === 'C' ?
              <p>{d.options[2].val}</p>
            : d.answer === 'D' ?
              <p>{d.options[3].val}</p>
            : null
            */}
          </>
        )
      })
      :null}
    </Quiz>
    <Link to="/" className="see-answers" style={{
      textDecoration: 'none',
      display: 'block',
      maxWidth: '50%',
      textAlign: 'center',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>Volver a inicio</Link>
  </Layout>
)

export default Answers
