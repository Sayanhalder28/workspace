import { useState } from "react";
import SearchIcon from "../../../assets/SearchIcon";
import styles from "./styles.module.css";

function SearchBox() {
  const [focused, setFocused] = useState(false);

  const color = focused ? "#1677FF" : "#5e5e5e";
  const fill = focused ? "#E9F2FF" : "#D8D9D8";

  return (
    <div className={styles.search_box}>
      <input
        type="text"
        name="SearchBox"
        placeholder="Search.."
        className={styles.search_input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <SearchIcon color={color} fill={fill} height="20px" />
    </div>
  );
}

export default SearchBox;
