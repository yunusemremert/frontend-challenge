import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeries } from '../../store/actions/seriesAction'

import Container from '../container'
import Search from '../search'
import Select from '../select'
import Box from '../box'

import Loading from '../icons/loading'

import styles from './style.module.css'
import stylesBox from '../box/style.module.css'

function Series() {
   const dispatch = useDispatch()
   const { posts, loading } = useSelector((state) => state.series)

   useEffect(() => {
      dispatch(fetchSeries())
   }, [])

   return (
      <Container className={styles.series}>
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
            {posts.map((series, i) => {
               const image = Object.values(series.images.PosterArt)

               return (
                  <Box
                     title={series.title}
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

export default Series
