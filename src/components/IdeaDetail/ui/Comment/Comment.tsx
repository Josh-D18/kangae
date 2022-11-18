import profileicon from "../../../../assets/icons/profile-icon.png";
import styles from "./Comment.module.css";
import clsx from "clsx";
import { useState } from "react";
import ReplyForm from "../CommentReplyForm/ReplyForm";

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
  const { comment, fullName, username, replies } = props;

  const [activeReplyComment, setActiveReplyComment] = useState<boolean>();

  const handleClick = () => {
    setActiveReplyComment(!activeReplyComment);
  };

  return (
    <div>
      <div className={clsx("mb-[24px]")} onClick={handleClick}>
        <div className="flex">
          <div>
            <img
              src={profileicon}
              alt="profile"
              className="max-w-[40px] max-h-[40px] md:mr-[32px]"
            />
            <div
              className={clsx(
                "sm:hidden md:block",
                activeReplyComment && styles["line-reply"]
              )}
            />
          </div>
          <div className="ml-[16px] mr-[80px] md:ml-0">
            <div className="flex">
              <div>
                <h3 className={styles["comment-user-fullname"]}>{fullName}</h3>
                <p className={styles["comment-username"]}>@{username}</p>
              </div>
              <button
                className={clsx(
                  styles["comment-reply-button"],
                  "sm:hidden md:block"
                )}
              >
                Reply
              </button>
            </div>
            <p
              className={clsx(
                "sm:hidden md:block",
                styles["comment-description"]
              )}
            >
              {comment}
            </p>
          </div>

          <button className={clsx(styles["comment-reply-button"], "md:hidden")}>
            Reply
          </button>
        </div>
        <p className={clsx("md:hidden", styles["comment-description"])}>
          {comment}
        </p>
        <div className={clsx(!activeReplyComment && styles["line"])} />
      </div>
      <div
        className={clsx(
          styles["comment-replies"],
          activeReplyComment && "mb-10"
        )}
      >
        <div className={clsx(!activeReplyComment && "hidden")}>
          {replies?.map(({ id, username, fullName, comment }) => (
            <div key={id} className={styles["comment-reply-container"]}>
              <div className={"ml-[23px] mr-[24px] md:ml-[48px]"}>
                <div className="flex">
                  <img
                    src={profileicon}
                    alt="profile"
                    className="max-w-[40px] max-h-[40px]"
                  />
                  <div className="ml-[16px] mr-[80px] ">
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
          <ReplyForm />
        </div>
      </div>
    </div>
  );
};

export default Comment;
