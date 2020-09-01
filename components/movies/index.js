import Container from '../container'

import Search from '../search'
import Select from '../select'
import Box from '../box'

import styles from './style.module.css'

function Movies() {
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
         <div>
            <Box>xxx</Box>
            <Box>xxx</Box>
            <Box>xxx</Box>
            <Box>xxx</Box>
            <Box>xxx</Box>
         </div>
      </Container>
   )
}

export default Movies
