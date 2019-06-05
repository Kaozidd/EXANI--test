import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Quiz from "../components/quiz"
import Question from "../components/question"
import SEO from "../components/seo"

import questions from "../components/data"

var tot = questions.length

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      errors: []
    }
  }

  getCheckedValue = (radioName) => {
    var radios = document.querySelectorAll(`.${radioName}`); // Get radio group by-name
    for (var y = 0; y < radios.length; y++) {
      if (radios[y].checked) return radios[y].value; // return the checked value
    }
  }

  getScore = () => {
    var score = 0
    var errors = []
    for (var i = 0; i < tot; i++)
    if (this.getCheckedValue(`question${i}`) === questions[i].answer) {
      score += 1
    } else {
      errors.push(questions[i])
    }
    this.setState({score: score, errors: errors})
  }

  returnScore = () => {
    var res = document.querySelector("#myresults"),
        rst = document.querySelector('.reset-test'),
        answ = document.querySelector('.see-answers')
    res.classList.remove('hidden')
    rst.classList.remove('hidden')
    answ.classList.remove('hidden')
    this.getScore()
  }

  resetTest = () => {
    var res = document.querySelector("#myresults"),
        rst = document.querySelector(".reset-test"),
        answ = document.querySelector('.see-answers')
    var radios = document.querySelectorAll('input')
    for (let i=0; i<radios.length; i++) {
      radios[i].checked = false
    }
    this.setState({
      score: 0
    })
    res.classList.add('hidden')
    rst.classList.add('hidden')
    answ.classList.add('hidden')
    document.documentElement.scrollTop = 0
  }

  render() {
    return (
      <Layout>
        <SEO title="EXANI" keywords={[`gatsby`, `application`, `react`]} />
        <Quiz>
          {questions.map((d, i) => {
            return (
              <Question data={d} number={d.number} iter={i} answ={null} />
            )
          })}
        </Quiz>
        <div className='btns-container'>
          <button className="view-results" onClick={this.returnScore}>Calcular resultados</button>
          <button className="reset-test hidden" onClick={this.resetTest}>Intentar de nuevo</button>
          <span id='myresults' className="my-results hidden">{`Puntuación: ${this.state.score} de ${tot}, para una calificación de ${((parseInt(this.state.score)*10)/tot).toFixed(2)}`}</span>
          <Link
          to='/answers'
          state={{ data: this.state.errors}}
          className="see-answers hidden"
          style={{
            textDecoration: 'none',
            textAlign: 'center'
          }}>
            <span>Ver respuestas</span>
          </Link>
        </div>
      </Layout>
    )
  }
}


export default IndexPage
