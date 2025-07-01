import styles from "./styles.module.css";
import SearchIcon from "../../../assets/SearchIcon.svg";
function SearchBox() {
  return (
    <div className={styles.container}>
      <div className={styles.search_box}></div>
      <img src={SearchIcon} alt="search_icon" className={styles.search_icon} />
    </div>
  );
}

export default SearchBox;
