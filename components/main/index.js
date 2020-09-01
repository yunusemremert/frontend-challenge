import HeadSeo from '../head-seo'

import Header from '../header'
import BreadCrumb from '../breadcrumb'
import Footer from '../footer'

import styles from './style.module.css'

function Main({ title, children }) {
   return (
      <div className={styles.content}>
         <HeadSeo title={title} />
         <Header />
         <BreadCrumb title={title} />
         {children}
         <Footer />
      </div>
   )
}

export default Main
