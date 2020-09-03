import Link from 'next/link'

function HomePageBox({ data }) {
   const style = {
      backgroundImage: 'url(/assets/placeholder.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
   }

   return (
      <Link href={data.path}>
         <li>
            <a style={style}>{data.title}</a>
            <p>{data.description}</p>
         </li>
      </Link>
   )
}

export default HomePageBox
