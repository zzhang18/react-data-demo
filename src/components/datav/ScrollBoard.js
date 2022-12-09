import React from 'react'

import { ScrollBoard } from '@jiaminghi/data-view-react'

import './ScrollBoard.less'

const config = {
  header: ['时间', '确诊', '无症状', '风险地区'],
  data: [
    ['2022-12-06 12:00:00', '41', '536', '113'],
    ['2022-12-05 12:00:00', '36', '524', '106'],
    ['2022-12-04 12:00:00', '32', '450', '97'],
    ['2022-12-03 12:00:00', '27', '264', '84'],
    ['2022-12-02 12:00:00', '22', '209', '74'],
    ['2022-12-01 12:00:00', '19', '174', '69'],
    ['2022-11-30 12:00:00', '17', '163', '54'],
    ['2022-11-29 12:00:00', '14', '145', '48'],
  ],
  index: true,
  columnWidth: [50, 170, 150,150],
  align: ['center'],
  rowNum: 7,
  headerBGC: '#1981f6',
  headerHeight: 45,
  oddRowBGC: 'rgba(0, 44, 81, 0.8)',
  evenRowBGC: 'rgba(10, 29, 50, 0.8)',
}

export default () => {
  return (
    <div id="scroll-board">
      <ScrollBoard config={config} />
    </div>
  )
}
