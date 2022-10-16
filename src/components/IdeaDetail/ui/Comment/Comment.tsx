import profileicon from "../../../../assets/icons/profile-icon.png";
import styles from "./Comment.module.css";

interface IComment {
  id: number;
  comment: string | undefined;
  fullName: string | undefined;
  username: string;
  replies:
    | {
        username: string;
        fullName: string;
        comment: string;
      }[]
    | {
        username: string;
        fullName: string;
        comment: string;
      }[]
    | undefined;
}

const Comment = (props: IComment) => {
  const { id, comment, fullName, username, replies } = props;

  return (
    <div>
      <div className="mb-[24px]">
        <div className="flex">
          <img
            src={profileicon}
            alt="profile"
            className="max-w-[40px] max-h-[40px]"
          />
          <div className="ml-[16px] mr-[80px]">
            <h3 className={styles["comment-user-fullname"]}>{fullName}</h3>
            <p className={styles["comment-username"]}>@{username}</p>
          </div>

          <button className={styles["comment-reply-button"]}>Reply</button>
        </div>
        <p className={styles["comment-description"]}>{comment}</p>
        <div className={styles["line"]} />
      </div>
    </div>
  );
};

export default Comment;
