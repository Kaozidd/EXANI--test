import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Quiz from "../components/quiz"
// import Question from "../components/question"
import SEO from "../components/seo"
import happy from "../images/happy.jpg"

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
    {
      /*
      <Quiz>
        {location.state.data.map((d, i) => {
          return (
            <Question data={d} iter={i} number={d.number}/>
          )
        })}
      </Quiz>
      */
    }
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
