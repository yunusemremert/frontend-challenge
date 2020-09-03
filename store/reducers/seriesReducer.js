import * as types from '../types'

import arrayFilter from '../../lib/arrayFilter'

const initialState = {
   posts: [],
   limitPosts: [],
   filterPosts: [],
   loading: true,
   error: null
}

export const seriesReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.GET_SERIES:
         return {
            ...state,
            posts: action.payload,
            limitPosts: arrayFilter(action.payload, 'series'),
            filterPosts: [],
            loading: false,
            error: action.payload.message
         }
      case types.SEARCH_SERIES:
         const filteredSeries = action.payload
            ? state.posts.filter((item) => {
                 return (
                    item.title
                       .toLowerCase()
                       .indexOf(action.payload.toLowerCase()) !== -1
                 )
              })
            : state.posts

         return {
            ...state,
            posts: state.posts,
            limitPosts: state.limitPosts,
            filterPosts: arrayFilter(filteredSeries, 'series', action.order),
            loading: false,
            error: null
         }

      default:
         return state
   }
}

export default seriesReducer
