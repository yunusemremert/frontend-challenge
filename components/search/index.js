import styles from './style.module.css'

import SearchIcon from '../icons/search'

function Search({ onSubmitForm = () => {} }) {
   return (
      <div className={styles.form}>
         <input type="text" placeholder="Search.." />
         <button type="button" onClick={onSubmitForm}>
            <SearchIcon size={15} />
         </button>
      </div>
   )
}

export default Search
