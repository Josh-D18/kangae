import clsx from "clsx";
import styles from "./CommentReplyForm.module.css";

const ReplyForm = () => {
  return (
    <div className={styles["reply-comment-container"]}>
      <div className="px-[24px] pt-[24px] pb-[24px] md:px-[32px]">
        <form className={styles["reply-comment-form-container"]}>
          <input
            placeholder="Type your comment here"
            className={styles["comment-form-input"]}
          />
          <div className="pb-[16px] flex items-center justify-between">
            <button className={clsx(styles["comment-btn"], "pt-0")}>
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReplyForm;
