import profileicon from "../../../../assets/icons/profile-icon.png";
import styles from "./Comment.module.css";
import clsx from "clsx";
import { useState } from "react";
import ReplyComments from "../ReplyComments/ReplyComments";

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
      <div className={clsx()} onClick={handleClick}>
        <div className="flex mt-[24px]">
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
          <ReplyComments replies={replies} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
