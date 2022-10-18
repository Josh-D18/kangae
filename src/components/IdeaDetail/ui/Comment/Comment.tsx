import profileicon from "../../../../assets/icons/profile-icon.png";
import styles from "./Comment.module.css";

interface IComment {
  id: number;
  comment: string | undefined;
  fullName: string | undefined;
  username: string;
  replies:
    | {
        id: number;
        username: string;
        fullName: string;
        comment: string;
      }[]
    | {
        id: number;
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
      <div className={styles["comment-replies"]}>
        <div className={styles["line-reply"]} />
        <div className="relative bottom-[281px]">
          {replies?.map(({ id, username, fullName, comment }) => (
            <div key={id}>
              <div className="ml-[23px] mr-[24px]">
                <div className="flex">
                  <img
                    src={profileicon}
                    alt="profile"
                    className="max-w-[40px] max-h-[40px]"
                  />
                  <div className="ml-[16px] mr-[80px]">
                    <h3 className={styles["comment-user-fullname"]}>
                      {fullName}
                    </h3>
                    <p className={styles["comment-username"]}>@{username}</p>
                  </div>

                  <button className={styles["comment-reply-button"]}>
                    Reply
                  </button>
                </div>
                <p className={styles["comment-description"]}>
                  <span className="font-primary font-[700] text-[13px] leading-[18.79px] text-primary-600">
                    @{username}
                  </span>
                  &nbsp;
                  {comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
