import Link from 'next/link'

import styles from './style.module.css'

function HomePageBox({ data }) {
   const style = {
      backgroundImage: 'url(/assets/placeholder.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
   }

   return (
      <ul className={styles.box}>
         {data.map((menu) => {
            return (
               <Link href={menu.path} key={menu.key}>
                  <li>
                     <a style={style}>{menu.title}</a>
                     <p>{menu.description}</p>
                  </li>
               </Link>
            )
         })}
      </ul>
   )
}

export default HomePageBox
