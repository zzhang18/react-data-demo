import React from 'react'

import { WaterLevelPond } from '@jiaminghi/data-view-react'

import './WaterLevelChart.less'

let percent = Math.round(41*100/536);
const config = {
  data: [percent],
  shape: 'round',
  waveHeight: 25,
  waveNum: 2,
}

export default () => {
  return (
    <div id="water-level-chart">
      <div className="water-level-chart-title">每日新增占比</div>

      {/* <div className="water-level-chart-details">
        累计完成<span>235,680</span>元
      </div> */}

      <div className="chart-container">
        <WaterLevelPond config={config} />
      </div>
    </div>
  )
}
