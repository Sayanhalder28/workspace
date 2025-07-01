import styles from "./styles.module.css";
import SearchIcon from "../../../assets/SearchIcon.svg";
function SearchBox() {
  return (
    <div className={styles.search_box}>
      <input
        type="text"
        id="search_box"
        name="SearchBox"
        placeholder="Search.."
        className={styles.search_input}
      />
      <img src={SearchIcon} alt="search_icon" className={styles.search_icon} />
    </div>
  );
}

export default SearchBox;
