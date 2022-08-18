import home from "../../../../assets/icons/home-icon.png";
import myprofile from "../../../../assets/icons/my-profile-icon.png";
import plus from "../../../../assets/icons/plus-icon.webp";
import friends from "../../../../assets/icons/friends-icon.png";
import styles from "./MobileFooter.module.css";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["links-container"]}>
        <Link to="/home" aria-label="home button">
          <img src={home} alt="" className={styles["icon"]} />
        </Link>
        <Link to="/my-profile">
          <img
            src={myprofile}
            alt=""
            className={styles["icon"]}
            aria-label="my profile button"
          />
        </Link>
        <Link to="/create-idea">
          <img
            src={plus}
            alt=""
            className={styles["icon"]}
            aria-label="create idea button"
          />
        </Link>
        <Link to="my-friends">
          <img
            src={friends}
            alt=""
            className={styles["icon"]}
            aria-label="my friends list"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
