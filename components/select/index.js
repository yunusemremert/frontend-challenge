import styles from './style.module.css'

function Select({ onChangeSelect = () => {} }) {
   return (
      <div className={styles.form}>
         <select onChange={(e) => onChangeSelect(e.target.value)}>
            <option value="">Sort by</option>
            <option value="year-desc">Sort by year in descending order.</option>
            <option value="year-asc">Sort by year in ascending order.</option>
            <option value="title-desc">
               Sort by title in descending order.
            </option>
            <option value="title-asc">Sort by title in ascending order.</option>
         </select>
      </div>
   )
}

export default Select
