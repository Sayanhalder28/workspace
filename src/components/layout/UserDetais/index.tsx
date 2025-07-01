import styles from "./styles.module.css";
import UserPic from "../../../assets/UserPic.svg";

function UserDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.user_pic_frame}>
        <img src={UserPic} alt="User_Pic" className={styles.user_pic}></img>
      </div>
      <div className={styles.user_name}>Admin Admin</div>
    </div>
  );
}

export default UserDetails;
