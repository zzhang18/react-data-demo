import React from 'react'

import { ScrollRankingBoard } from '@jiaminghi/data-view-react'

import './RankingBoard.less'
import data from './../../assets/data-12-7.json'
import _ from 'lodash'

let rankData = data.data.city;
console.log('rankData', rankData)
const config = {
  data: _.take(_.map(rankData, r => {
    return {
      name: r.name,
      value: r.conadd
    }
  }), 9),
  // data:
  // [
  //       {
  //           name: '浦东',
  //           value: 55
  //       },
  //       {
  //           name: '静安',
  //           value: 120
  //       },
  //       {
  //           name: '长宁',
  //           value: 78
  //       },
  //       {
  //           name: '徐汇',
  //           value: 66
  //       },
  //       {
  //           name: '松江',
  //           value: 80
  //       },
  //       {
  //           name: '长宁',
  //           value: 78
  //       },
  //       {
  //           name: '徐汇',
  //           value: 66
  //       },
  //       {
  //           name: '松江',
  //           value: 80
  //       },
  //       {
  //           name: '松江',
  //           value: 80
  //       }
  //   ],
  rowNum: 9,
}

export default () => {
  return (
    <div id="ranking-board">
      <div className="ranking-board-title">本土新增排名图</div>
      <ScrollRankingBoard config={config} />
    </div>
  )
}
