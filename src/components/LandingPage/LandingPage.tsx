import { Link } from "react-router-dom";
import Image from "../../assets/images/ideaLandingPageImageMobile-png.png";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <img src={Image} alt="light blub" className={styles.img} />
      <div className={styles["text-container"]}>
        <div className={styles.title}>Kangae</div>
        <p className={styles.description}>
          Changing the world One Idea At A Time
        </p>
        <div className={styles["button-container"]}>
          <Link to="/home">
            <button className={styles.button}>Share Ideas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
