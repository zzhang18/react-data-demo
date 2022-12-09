import React, { useState, useEffect } from 'react'

import { Charts } from '@jiaminghi/data-view-react'

import './RoseChart.less'
import data from './../../assets/data-12-7.json'

function getData() {
  return {
    series: [
      {
        type: 'pie',
        radius: '50%',
        roseSort: false,
        data: [
          { name: '浦东', value: Number('80') },
          { name: '静安', value: 40 },
          { name: '长宁', value: 40 },
          { name: '奉贤', value: 40 },
          { name: '徐汇', value: 40 },
          { name: '闵行', value: 40 },
          { name: '青浦', value: 40 },
          { name: '虹口', value: 40 },
          { name: '松江', value: 40 },
        ],
        insideLabel: {
          show: false,
        },
        outsideLabel: {
          formatter: '{name} {percent}%',
          labelLineEndLength: 20,
          style: {
            fill: '#fff',
          },
          labelLineStyle: {
            stroke: '#fff',
          },
        },
        roseType: true,
      },
    ],
    color: [
      '#da2f00',
      '#fa3600',
      '#ff4411',
      '#ff724c',
      '#541200',
      '#801b00',
      '#a02200',
      '#5d1400',
      '#b72700',
    ],
  }
}

function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export default () => {
  const [option, setData] = useState({})

  useEffect(() => {
    createData()

    setInterval(createData, 30000)
  }, [])

  function createData() {
    setData(getData())
  }

  return (
    <div id="rose-chart">
      <div className="rose-chart-title">本土新增分布图</div>
      <Charts option={option} />
    </div>
  )
}
