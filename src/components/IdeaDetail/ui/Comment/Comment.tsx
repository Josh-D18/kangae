import profileicon from "../../../../assets/icons/profile-icon.png";
import styles from "./Comment.module.css";

const Comment = () => {
  return (
    <div>
      <div className="flex">
        <img
          src={profileicon}
          alt="profile"
          className="max-w-[40px] max-h-[40px]"
        />
        <div className="ml-[16px] mr-[80px]">
          <h3 className={styles["comment-user-fullname"]}>Josh Date</h3>
          <p className={styles["comment-username"]}>@user1</p>
        </div>

        <button className={styles["comment-reply-button"]}>Reply</button>
      </div>
      <p className={styles["comment-description"]}>
        Also, please allow styles to be applied based on system preferences. I
        would love to be able to browse Frontend Mentor in the evening after my
        device’s dark mode turns on without the bright background it currently
        has.
      </p>
    </div>
  );
};

export default Comment;
