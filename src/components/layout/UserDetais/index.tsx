import styles from "./styles.module.css";
import UserPic from "../../../assets/UserPic.svg";

function UserDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.user_pic}>
        <img src={UserPic} alt="User_Pic" height={"100%"}></img>
      </div>
    </div>
  );
}

export default UserDetails;
