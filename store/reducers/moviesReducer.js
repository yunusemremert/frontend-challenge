import * as types from '../types'

const initialState = {
   posts: [],
   filterPosts: [],
   loading: true,
   error: null
}

export const moviesReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.GET_MOVIES:
         const limitData = []
         action.payload.forEach((movies, i) => {
            if (limitData.length <= 20 && movies.programType == 'movie') {
               limitData.push(movies)
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

export default moviesReducer
