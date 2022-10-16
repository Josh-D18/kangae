import styles from "./CommentReplyForm.module.css";

const CommentReplyForm = () => {
  return (
    <div className={styles["comment-reply-form-container"]}>
      <div className="px-[24px] pt-[24px] pb-[24px]">
        <h3 className={styles["comment-form-title"]}>Add Comment</h3>

        <form>
          <input
            placeholder="Type your comment here"
            className={styles["comment-form-input"]}
          />
        </form>
        <div className="pt-[16px] flex justify-between items-center">
          <p className={styles["comment-characters-remaining"]}>
            250 Characters left
          </p>
          <button className={styles["comment-btn"]}>Post Comment</button>
        </div>
      </div>
    </div>
  );
};

export default CommentReplyForm;
