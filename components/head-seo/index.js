import Head from 'next/head'

function HeadSeo({ title }) {
   return (
      <Head>
         <title>Frontend Challenge | {title ? title : 'DEMO Streaming'}</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
   )
}

export default HeadSeo
