import profileicon from "../../../../assets/icons/profile-icon.png";
import styles from "../Comment/Comment.module.css";
import clsx from "clsx";
import ReplyForm from "../CommentReplyForm/ReplyForm";

interface IReplyComments {
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

const ReplyComments = (props: IReplyComments) => {
  const { replies } = props;
  console.log(replies);
  return (
    <>
      <div>
        {replies?.map(({ id, username, fullName, comment }) => (
          <div key={id} className={styles["comment-reply-container"]}>
            <div className={"ml-[23px] mr-[24px] md:ml-[48px]"}>
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
      <div
        className={clsx(
          replies!.length < 1
            ? "sm:pr-[24px] md:ml-[69px] md:pr-0"
            : "px-[24px] pb-[24px] md:px-[32px] md:pl-[44px]"
        )}
      >
        <ReplyForm />
      </div>
    </>
  );
};

export default ReplyComments;
