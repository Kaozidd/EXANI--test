import React from 'react'

import Element from './element'

const Question = ({ data, iter, number, answ }) => (
  <li className='quest-item' style={{
    marginBottom: '50px',
    paddingTop: '30px',
    borderTop: '2px solid rgba(0,0,0,0.8)'
  }}>
    <h4><span>{number}. </span>{data.question}</h4>
    {
      data.img ?
        <img src={data.img} className='image' alt={`slide${iter}`}/>
      : null
    }
    {
      data.element ?
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}>
          {data.element.map((d, i) => {
            return (
              <Element elem={d} name={0} />
            )
          })}
        </div>
      : null
    }
    {
      data.table ?
        <table>
          {data.table.map((d, i) => {
            return (
              <tr className='table-row' key={i}>
                {i === 0 ?
                d.map((f, j) => {
                  return (
                    <th className='table-head' key={j}>{f}</th>
                  )
                })
                :
                d.map((f, j) => {
                  return (
                    <td className='table-elem' key={j}>{f}</td>
                  )
                })}
              </tr>
            )
          })}
        </table>
      : null
    }
    <ul className={`choices ${answ}`} style={{
      marginTop: '60px'
    }}>
      {data.options.map((d, i) => {
        return (
          <li>
            <label>
            <span className='subsection'>
            {`${d.sub})`}
            </span>
            <input
            type='radio'
            className={`question${iter}`}
            name={`question${iter}`}
            value={d.sub}
            />
            <span>{d.val}</span>
            </label>
          </li>
        )
      })}
    </ul>
  </li>
)

export default Question
