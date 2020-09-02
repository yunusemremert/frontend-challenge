import fetcher from '../../lib/fetcher'

import * as types from '../types'

export const fetchSeries = () => async (dispatch) => {
   const data = await fetcher('/api/feed')

   setTimeout(function () {
      dispatch({
         type: types.GET_SERIES,
         payload: data.entries
      })
   }, 1000)
}
