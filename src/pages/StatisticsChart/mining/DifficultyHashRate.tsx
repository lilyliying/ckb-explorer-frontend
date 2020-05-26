import React, { useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { getStatisticDifficultyHashRate } from '../../../service/app/charts/mining'
import { useAppState, useDispatch } from '../../../contexts/providers'
import i18n, { currentLanguage } from '../../../utils/i18n'
import { handleAxis } from '../../../utils/chart'
import { handleDifficulty, handleHashRate } from '../../../utils/number'
import { isMobile } from '../../../utils/screen'
import { ChartColors } from '../../../utils/const'
import { ChartLoading, ReactChartCore, ChartPage, tooltipColor, tooltipWidth } from '../common/ChartComp'
import { AppDispatch } from '../../../contexts/reducer'
import { PageActions } from '../../../contexts/actions'

const gridThumbnail = {
  left: '4%',
  right: '4%',
  top: '8%',
  bottom: '6%',
  containLabel: true,
}
const grid = {
  left: '3%',
  right: '4%',
  bottom: '5%',
  containLabel: true,
}

const getOption = (statisticDifficultyHashRates: State.StatisticDifficultyHashRate[], isThumbnail = false) => {
  return {
    color: ChartColors,
    tooltip: !isThumbnail && {
      trigger: 'axis',
      formatter: (dataList: any[]) => {
        const widthSpan = (value: string) => tooltipWidth(value, currentLanguage() === 'en' ? 70 : 50)
        let result = `<div>${tooltipColor('#333333')}${widthSpan(i18n.t('block.epoch'))} ${dataList[0].name}</div>`
        if (dataList[0]) {
          result += `<div>${tooltipColor(ChartColors[0])}${widthSpan(i18n.t('block.difficulty'))} ${handleDifficulty(
            dataList[0].data,
          )}</div>`
        }
        if (dataList[1]) {
          result += `<div>${tooltipColor(ChartColors[1])}${widthSpan(i18n.t('block.hash_rate'))} ${handleHashRate(
            dataList[1].data,
          )}</div>`
        }
        return result
      },
    },
    legend: !isThumbnail && {
      data: [i18n.t('block.difficulty'), i18n.t('block.hash_rate_hps')],
    },
    grid: isThumbnail ? gridThumbnail : grid,
    xAxis: [
      {
        name: isMobile() || isThumbnail ? '' : i18n.t('block.epoch'),
        nameLocation: 'middle',
        nameGap: '30',
        type: 'category',
        boundaryGap: false,
        data: statisticDifficultyHashRates.map(data => data.epochNumber),
        axisLabel: {
          formatter: (value: string) => value,
        },
      },
    ],
    yAxis: [
      {
        position: 'left',
        name: isMobile() || isThumbnail ? '' : i18n.t('block.difficulty'),
        type: 'value',
        scale: true,
        axisLine: {
          lineStyle: {
            color: ChartColors[0],
          },
        },
        axisLabel: {
          formatter: (value: string) => handleAxis(new BigNumber(value)),
        },
      },
      {
        position: 'right',
        name: isMobile() || isThumbnail ? '' : i18n.t('block.hash_rate_hps'),
        type: 'value',
        splitLine: {
          show: false,
        },
        scale: true,
        axisLine: {
          lineStyle: {
            color: ChartColors[1],
          },
        },
        axisLabel: {
          formatter: (value: string) => handleAxis(new BigNumber(value)),
        },
      },
    ],
    series: [
      {
        name: i18n.t('block.difficulty'),
        type: 'line',
        step: 'start',
        areaStyle: {
          color: '#85bae0',
        },
        yAxisIndex: '0',
        symbol: isThumbnail ? 'none' : 'circle',
        symbolSize: 3,
        data: statisticDifficultyHashRates.map(data => new BigNumber(data.difficulty).toNumber()),
      },
      {
        name: i18n.t('block.hash_rate_hps'),
        type: 'line',
        smooth: true,
        yAxisIndex: '1',
        symbol: isThumbnail ? 'none' : 'circle',
        symbolSize: 3,
        data: statisticDifficultyHashRates.map(data => new BigNumber(data.hashRate).toNumber()),
      },
    ],
  }
}

export const DifficultyHashRateChart = ({
  statisticDifficultyHashRates,
  isThumbnail = false,
}: {
  statisticDifficultyHashRates: State.StatisticDifficultyHashRate[]
  isThumbnail?: boolean
}) => {
  if (!statisticDifficultyHashRates || statisticDifficultyHashRates.length === 0) {
    return <ChartLoading show={statisticDifficultyHashRates === undefined} isThumbnail={isThumbnail} />
  }
  return <ReactChartCore option={getOption(statisticDifficultyHashRates, isThumbnail)} isThumbnail={isThumbnail} />
}

export const initStatisticDifficultyHashRate = (dispatch: AppDispatch) => {
  dispatch({
    type: PageActions.UpdateStatisticDifficultyHashRate,
    payload: {
      statisticDifficultyHashRates: undefined,
    },
  })
}

export default () => {
  const dispatch = useDispatch()
  const { statisticDifficultyHashRates } = useAppState()

  useEffect(() => {
    initStatisticDifficultyHashRate(dispatch)
    getStatisticDifficultyHashRate(dispatch)
  }, [dispatch])

  return (
    <ChartPage title={`${i18n.t('block.difficulty')} & ${i18n.t('block.hash_rate')}`}>
      <DifficultyHashRateChart statisticDifficultyHashRates={statisticDifficultyHashRates} />
    </ChartPage>
  )
}
