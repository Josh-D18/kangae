import notfound from "../../../../assets/icons/not-found-image.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <img src={notfound} alt="not found" className={styles["image"]} />
        <div className={styles["title"]}>There is no feedback yet</div>
        <p className={styles["description"]}>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button className={styles["button"]}>Add Idea</button>
      </div>
    </div>
  );
};

export default NotFound;
