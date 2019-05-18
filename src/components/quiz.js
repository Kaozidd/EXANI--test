import React from "react"
import PropTypes from "prop-types"

const Quiz = ({ children }) => (
  <ul
    className = 'quiz'
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0,
    }}
  >
    <main
      style={{
        display: 'flex',
        flexDirection: 'column'      
    }}>{children}</main>
  </ul>
)

Quiz.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Quiz
