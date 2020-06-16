import { AppDispatch } from '../../../contexts/reducer'
import { PageActions } from '../../../contexts/actions'

export const dispatchTransactionCount = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticTransactionCount,
    payload: {
      statisticTransactionCounts: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticTransactionCountFetchEnd,
    payload: {
      statisticTransactionCountsFetchEnd: true,
    },
  })
}

export const dispatchAddressCount = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticAddressCount,
    payload: {
      statisticAddressCounts: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticAddressCountFetchEnd,
    payload: {
      statisticAddressCountsFetchEnd: true,
    },
  })
}

export const dispatchCellCount = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticCellCount,
    payload: {
      statisticCellCounts: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticCellCountFetchEnd,
    payload: {
      statisticCellCountsFetchEnd: true,
    },
  })
}

export const dispatchTransactionFee = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticTxFeeHistory,
    payload: {
      statisticTxFeeHistories: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticTxFeeHistoryFetchEnd,
    payload: {
      statisticTxFeeHistoriesFetchEnd: true,
    },
  })
}

export const dispatchAverageBlockTime = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticAverageBlockTime,
    payload: {
      statisticAverageBlockTimes: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticAverageBlockTimeFetchEnd,
    payload: {
      statisticAverageBlockTimesFetchEnd: true,
    },
  })
}

export const dispatchDifficulty = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticDifficulty,
    payload: {
      statisticDifficulties: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticDifficultyFetchEnd,
    payload: {
      statisticDifficultiesFetchEnd: true,
    },
  })
}

export const dispatchHashRate = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticHashRate,
    payload: {
      statisticHashRates: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticHashRateFetchEnd,
    payload: {
      statisticHashRatesFetchEnd: true,
    },
  })
}

export const dispatchUncleRate = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticUncleRate,
    payload: {
      statisticUncleRates: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticUncleRateFetchEnd,
    payload: {
      statisticUncleRatesFetchEnd: true,
    },
  })
}

export const dispatchTotalSupply = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticTotalSupply,
    payload: {
      statisticTotalSupplies: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticTotalSupplyFetchEnd,
    payload: {
      statisticTotalSuppliesFetchEnd: true,
    },
  })
}

export const dispatchAPC = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticAnnualPercentageCompensation,
    payload: {
      statisticAnnualPercentageCompensations: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticAnnualPercentageCompensationFetchEnd,
    payload: {
      statisticAnnualPercentageCompensationsFetchEnd: true,
    },
  })
}

export const dispatchSecondaryIssuance = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticSecondaryIssuance,
    payload: {
      statisticSecondaryIssuance: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticSecondaryIssuanceFetchEnd,
    payload: {
      statisticSecondaryIssuanceFetchEnd: true,
    },
  })
}

export const dispatchInflationRate = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticInflationRate,
    payload: {
      statisticInflationRates: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticInflationRateFetchEnd,
    payload: {
      statisticInflationRatesFetchEnd: true,
    },
  })
}

export const dispatchLiquidity = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticLiquidity,
    payload: {
      statisticLiquidity: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticLiquidityFetchEnd,
    payload: {
      statisticLiquidityFetchEnd: true,
    },
  })
}

export const dispatchTotalDeposit = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticTotalDaoDeposit,
    payload: {
      statisticTotalDaoDeposits: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticTotalDaoDepositFetchEnd,
    payload: {
      statisticTotalDaoDepositsFetchEnd: true,
    },
  })
}

export const dispatchDailyDeposit = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticNewDaoDeposit,
    payload: {
      statisticNewDaoDeposits: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticNewDaoDepositFetchEnd,
    payload: {
      statisticNewDaoDepositsFetchEnd: true,
    },
  })
}

export const dispatchDepositCirculationRatio = (dispatch: AppDispatch, data: any) => {
  dispatch({
    type: PageActions.UpdateStatisticCirculationRatio,
    payload: {
      statisticCirculationRatios: data,
    },
  })
  dispatch({
    type: PageActions.UpdateStatisticCirculationRatioFetchEnd,
    payload: {
      statisticCirculationRatiosFetchEnd: true,
    },
  })
}