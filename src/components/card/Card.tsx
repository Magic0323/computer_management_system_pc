import React from 'react'
import './card.css'
import LineChart from '../antV/LineChart'
interface cardProps {
  title: string
}
const Card = (props: cardProps, ref: any) => (
  <div className="card">
    <div className="title">{props.title}</div>
<div className='chart'>
<LineChart/>
</div>
  </div>
)
export default Card
