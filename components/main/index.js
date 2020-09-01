import Head from 'next/head'

import Header from '../header'
import BreadCrumb from '../breadcrumb'
import Footer from '../footer'

import styles from './style.module.css'

function Main({ children }) {
   return (
      <div className={styles.content}>
         <Head>
            <title>Frontend Challenge | Popular Titles</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header />
         <BreadCrumb title="Popular Titles" />
         {children}
         <Footer />
      </div>
   )
}

export default Main
