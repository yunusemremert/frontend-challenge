import * as types from '../types'

const initialState = {
   posts: [],
   filterPosts: [],
   loading: true,
   error: null
}

export const seriesReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.GET_SERIES:
         const limitData = []
         action.payload.forEach((series, i) => {
            if (limitData.length <= 20 && series.programType == 'series') {
               limitData.push(series)
            }
         })

         return {
            ...state,
            posts: limitData,
            filterPosts: [],
            loading: false,
            error: action.payload.message
         }
      default:
         return state
   }
}

export default seriesReducer
