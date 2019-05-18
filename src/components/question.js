import React from 'react'

const Question = ({ data, iter }) => (
  <li style={{
    marginBottom: '100px',
    paddingTop: '30px',
    borderTop: '2px solid rgba(0,0,0,0.8)'
  }}>
    <h4><span>{iter+1}. </span>{data.question}</h4>
    {
      data.img ?
        <img src={data.img} className='image' alt={`slide${iter}`}/>
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
    <ul className="choices" style={{
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