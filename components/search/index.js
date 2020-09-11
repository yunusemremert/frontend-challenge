import styles from './style.module.css'

import SearchIcon from '../icons/search'

function Search({ onChangeInput = () => {}, onSubmitForm = () => {} }) {
   return (
      <div className={styles.form}>
         <input
            type="text"
            placeholder="Search.."
            onChange={(e) => onChangeInput(e.target.value)}
         />
         <button type="button" onClick={onSubmitForm}>
            <SearchIcon size={15} />
         </button>
      </div>
   )
}

export default React.memo(Search)
