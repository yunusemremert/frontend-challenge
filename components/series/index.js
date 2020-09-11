import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeries, searchSeries } from '../../store/actions/seriesAction'

import Container from '../container'
import Search from '../search'
import Select from '../select'
import Box from '../box'

import Loading from '../icons/loading'

import styles from './style.module.css'
import stylesBox from '../box/style.module.css'

function Series() {
   const [filter, setFilter] = useState(null)
   const [order, setOrder] = useState(null)

   const dispatch = useDispatch()
   const { limitPosts, filterPosts, loading } = useSelector(
      (state) => state.series
   )

   useEffect(() => {
      dispatch(fetchSeries())
   }, [])

   // Input search
   const changeFilter = useCallback((filter) => {
      setFilter(filter)
   }, [])

   useEffect(() => {
      if (filter?.length >= 3) {
         dispatch(searchSeries(filter, order))
      } else if (!filter) {
         dispatch(searchSeries(null, order))
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
      <Container className={styles.series}>
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
         {!loading && data.length == 0 ? (
            <div>Oops, something went wrong...</div>
         ) : (
            <div className={stylesBox.box}>
               {data.map((series, i) => {
                  const image = Object.values(series.images.PosterArt)

                  return (
                     <Box
                        key={i}
                        title={series.title}
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

export default Series
