import styles from './style.module.css'

function Box({ image, title }) {
   return (
      <div>
         <div className={styles.image}>
            <img src={image} />
         </div>
         <div className={styles.title}>{title}</div>
      </div>
   )
}

export default Box
