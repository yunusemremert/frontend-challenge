import Container from '../container'
import HomePageBox from '../home-page-box'

import styles from './style.module.css'

export const MENU = [
   {
      key: 'series',
      path: '/series',
      title: 'SERIES',
      description: 'Popular Series'
   },
   {
      key: 'movies',
      path: '/movies',
      title: 'MOVIES',
      description: 'Popular Movies'
   }
]

function HomePage() {
   return (
      <Container className={styles.container_inner}>
         <HomePageBox data={MENU} />
      </Container>
   )
}

export default HomePage
