import Image from "../../assets/images/bright-idea.png";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <img src={Image} alt="light blub" className={styles.img} />
      <div className={styles["text-container"]}>
        <div className={styles.title}>Kangae</div>
        <p className={styles.description}>All Ideas Come Out Of Other Ideas!</p>
        <div className={styles["button-container"]}>
          <button className={styles.button}>
            <span>Sign Up</span>
          </button>
          <button className={styles.button}>
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
