import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, searchMovies } from '../../store/actions/moviesAction'

import Container from '../container'
import Search from '../search'
import Select from '../select'
import Box from '../box'

import Loading from '../icons/loading'

import styles from './style.module.css'
import stylesBox from '../box/style.module.css'

function Movies() {
   const [filter, setFilter] = useState(null)
   const [order, setOrder] = useState(null)

   const dispatch = useDispatch()
   const { limitPosts, filterPosts, loading } = useSelector(
      (state) => state.movies
   )

   useEffect(() => {
      dispatch(fetchMovies())
   }, [])

   // Input search
   const changeFilter = useCallback((filter) => {
      setFilter(filter)
   }, [])

   useEffect(() => {
      if (filter?.length >= 3) {
         dispatch(searchMovies(filter, order))
      } else if (order) {
         dispatch(searchMovies(null, order))
      }
   }, [filter, order])

   // Select order
   const changeOrderList = useCallback((order) => {
      setOrder(order)
   }, [])

   const data =
      filter?.length >= 3 || order
         ? filterPosts.length > 0
            ? filterPosts
            : []
         : limitPosts

   return (
      <Container className={styles.movies}>
         <div className={styles.top}>
            <form
               onSubmit={(e) => {
                  e.preventDefault()
               }}
            >
               <div className={styles.search}>
                  <Search onChangeInput={changeFilter} />
               </div>
               <div className={styles.select}>
                  <Select onChangeSelect={changeOrderList} />
               </div>
            </form>
         </div>
         {loading && (
            <div className={styles.loading}>
               <Loading />
            </div>
         )}
         {filter && data.length == 0 ? (
            <div>Oops, something went wrong...</div>
         ) : (
            <div className={stylesBox.box}>
               {data.map((movies, i) => {
                  const image = Object.values(movies.images.PosterArt)

                  return (
                     <Box
                        key={i}
                        title={movies.title}
                        image={image[0]}
                        className={stylesBox.box}
                     ></Box>
                  )
               })}
            </div>
         )}
      </Container>
   )
}

export default Movies
