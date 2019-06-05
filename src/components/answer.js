import React from 'react'

const Answer = ({ data, iter }) => (
  <div>
    <h4>Solución</h4>
    <div style={{
      padding: '10px 40px',
    }}>
      <p>{data.text1}</p>
      {
        data.list ?
        <ul>
        {data.list.map((d, i) => {
          return <li><strong>{d.title}</strong>. {d.text}</li>
        })}
        </ul>
        : null
      }
      {
        data.img1 ?
        <img src={data.img1} alt='Fórmula' />
        :null
      }
      {
        data.text2 ?
        <p>{data.text2}</p>
        : null
      }
      {
        data.img2 ?
        <img src={data.img2} alt='Fórmula' />
        :null
      }
      {
        data.text3 ?
        <p>{data.text3}</p>
        : null
      }
      {
        data.img3 ?
        <img src={data.img3} alt='Fórmula' />
        :null
      }
    </div>
  </div>
)


export default Answer
