import Container from '../container'

import Search from '../search'
import Select from '../select'
import Box from '../box'

import styles from './style.module.css'
import stylesBox from '../box/style.module.css'

function Series() {
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
         <div className={stylesBox.box}>
            <Box>xxx</Box>
            <Box>xxx</Box>
            <Box>xxx</Box>
            <Box>xxx</Box>
            <Box>xxx</Box>
            <Box>xxx</Box>
            <Box>xxx</Box>
         </div>
      </Container>
   )
}

export default Series
