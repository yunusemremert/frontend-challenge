import Container from '../container'
import HomePageBox from '../home-page-box'

import styles from './style.module.css'
import stylesBox from '../home-page-box/style.module.css'

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
      <Container className={styles.home_page}>
         <ul className={stylesBox.box}>
            {MENU.map((menu) => {
               return <HomePageBox data={menu} />
            })}
         </ul>
      </Container>
   )
}

export default HomePage
