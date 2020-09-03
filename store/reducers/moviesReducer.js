import * as types from '../types'

import arrayFilter from '../../lib/arrayFilter'

const initialState = {
   posts: [],
   limitPosts: [],
   filterPosts: [],
   loading: true,
   error: null
}

export const moviesReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.GET_MOVIES:
         return {
            ...state,
            posts: action.payload,
            limitPosts: arrayFilter(action.payload, 'movie'),
            filterPosts: [],
            loading: false,
            error: action.payload.message
         }
      case types.SEARCH_MOVIES:
         const filteredMovies = action.payload
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
            filterPosts: arrayFilter(filteredMovies, 'movie', action.order),
            loading: false,
            error: null
         }

      default:
         return state
   }
}

export default moviesReducer
