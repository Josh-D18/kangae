import styles from "./IdeaDetail.module.css";
import backarrow from "../../assets/icons/grey-back-arrow.png";
import { ideas } from "../../data/ideas";
import Idea from "./ui/Idea/Idea";
import Comment from "./ui/Comment/Comment";
import { comments } from "../../data/comments";
import CommentReplyForm from "./ui/CommentReplyForm";

const IdeaDetail = () => {
  return (
    <div className="h-full overflow-y-auto bg-tertiary-300">
      <div className="flex justify-between p-[24px] md:px-[40px] md:pt-[56px] lg:pt-[80px]">
        <div className="flex items-center mb-[3px] md:pb-[4px]">
          <img
            src={backarrow}
            alt="back arrow"
            className={styles["back-arrow"]}
          />
          <span className={styles["back-link-text"]}>Go Back</span>
        </div>
        <button className={styles["edit-btn"]}>Edit Idea</button>
      </div>
      <div className="idea-container">
        {[ideas[0]].map(({ id, idea, category, description, likes }) => (
          <div key={id}>
            <Idea
              idea={idea}
              category={category}
              id={id}
              description={description}
              likes={likes}
            />
          </div>
        ))}
      </div>

      <div className={styles["comments-container"]}>
        <div className="mx-[23px]">
          <h2 className={styles["comments-title"]}>4 Comments</h2>
          <>
            {comments.map(({ id, comment, fullName, username, replies }) => (
              <Comment
                key={id}
                id={id}
                comment={comment}
                fullName={fullName}
                username={username}
                replies={replies}
              />
            ))}
          </>
        </div>
      </div>

      <CommentReplyForm />
    </div>
  );
};

export default IdeaDetail;
