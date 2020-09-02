import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../store/actions/moviesAction'

import Container from '../container'
import Search from '../search'
import Select from '../select'
import Box from '../box'

import Loading from '../icons/loading'

import styles from './style.module.css'
import stylesBox from '../box/style.module.css'

function Movies() {
   const dispatch = useDispatch()
   const { posts, loading } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies())
   }, [])

   return (
      <Container className={styles.movies}>
         <div className={styles.top}>
            <form>
               <div className={styles.search}>
                  <Search />
               </div>
               <div className={styles.select}>
                  <Select />
               </div>
            </form>
         </div>
         {loading && (
            <div className={styles.loading}>
               <Loading />
            </div>
         )}
         <div className={stylesBox.box}>
            {posts.map((movies, i) => {
               const image = Object.values(movies.images.PosterArt)

               return (
                  <Box
                     title={movies.title}
                     image={image[0]}
                     key={i}
                     className={stylesBox.box}
                  ></Box>
               )
            })}
         </div>
      </Container>
   )
}

export default Movies
