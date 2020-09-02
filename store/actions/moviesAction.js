import fetcher from '../../lib/fetcher'

import * as types from '../types'

export const fetchMovies = () => async (dispatch) => {
   const data = await fetcher('/api/feed')

   setTimeout(function () {
      dispatch({
         type: types.GET_MOVIES,
         payload: data.entries
      })
   }, 1000)
}
