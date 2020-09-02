import { combineReducers } from 'redux'

import seriesReducer from './seriesReducer'
import moviesReducer from './moviesReducer'

export default combineReducers({
   series: seriesReducer,
   movies: moviesReducer
})
