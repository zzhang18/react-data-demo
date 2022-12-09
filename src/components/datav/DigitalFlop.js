import React, { useState, useEffect } from 'react'

import { DigitalFlop, Decoration10 } from '@jiaminghi/data-view-react'

import './DigitalFlop.less'
// import data from './../../assets/data/data-12-7.json'

function getData() {
  let locIncrNum = 41;
  let econNum = 536;
  let contotal = 64778;
  let curetotal = 63858;
  let deathtotal = 595;
  return [{
    title: '新增本土确诊',
    number: {
      number: [parseInt(locIncrNum, 10)],
      content: '{nt}',
      textAlign: 'left',
      style: {
        fill: '#4d99fc',
        fontWeight: 'bold',
      },
    },
    unit: '例',
  },
  {
    title: '新增本土无症状',
    number: {
      number: [parseInt(locIncrNum, 10)],
      content: '{nt}',
      textAlign: 'left',
      style: {
        fill: '#f46827',
        fontWeight: 'bold',
      },
    },
    unit: '例',
  },
  {
    title: '现存确诊',
    number: {
      number: [parseInt(econNum, 10)],
      content: '{nt}',
      textAlign: 'left',
      style: {
        fill: '#40faee',
        fontWeight: 'bold',
      },
    },
    unit: '例',
  },
  {
    title: '累计确诊',
    number: {
      number: [parseInt(contotal, 10)],
      content: '{nt}',
      textAlign: 'left',
      style: {
        fill: '#4d99fc',
        fontWeight: 'bold',
      },
    },
    unit: '例',
  },
  {
    title: '累计治愈',
    number: {
      number: [parseInt(curetotal, 10)],
      content: '{nt}',
      textAlign: 'left',
      style: {
        fill: '#f46827',
        fontWeight: 'bold',
      },
    },
    unit: '例',
  },
  {
    title: '累计死亡',
    number: {
      number: [parseInt(deathtotal, 10)],
      content: '{nt}',
      textAlign: 'left',
      style: {
        fill: '#40faee',
        fontWeight: 'bold',
      },
    },
    unit: '例',
  },
  {
    title: '高风险地区',
    number: {
      number: [parseInt(locIncrNum, 10)],
      content: '{nt}',
      textAlign: 'left',
      style: {
        fill: '#4d99fc',
        fontWeight: 'bold',
      },
    },
    unit: '例',
  }]
}

function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export default () => {
  const [digitalFlopData, setData] = useState([])

  useEffect(() => {
    createData()

    const timer = setInterval(createData, 30000)

    return () => clearInterval(timer)
  }, [])

  function createData() {
    setData(getData())
  }

  return (
    <div id="digital-flop">
      {digitalFlopData.map(item => (
        <div className="digital-flop-item" key={item.title}>
          <div className="digital-flop-title">{item.title}</div>
          <div className="digital-flop">
            <DigitalFlop config={item.number} style={{ width: '100px', height: '50px' }} />
            <div className="unit">{item.unit}</div>
          </div>
        </div>
      ))}

      <Decoration10 />
    </div>
  )
}
