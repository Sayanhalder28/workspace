import UserPic from "../../../assets/UserPic.svg";
import styles from "./styles.module.css";

function UserDetails() {
  return (
    <div className={styles.container}>
      <img src={UserPic} alt="User_Pic" className={styles.user_pic}></img>
    </div>
  );
}

export default UserDetails;
