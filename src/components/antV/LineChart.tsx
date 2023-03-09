/*
 * @Author: wei yin
 * @Date: 2023-03-09 15:30:47
 * @LastEditors: wei yin
 * @LastEditTime: 2023-03-09 15:56:06
 * @Description:
 */
import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'

const LineChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then(async (response) => await response.json())
      .then((json) => { setData(json) })
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1]
    }
  }

  return <Area {...config} />
}
export default LineChart
