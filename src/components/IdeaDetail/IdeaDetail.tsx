import styles from "./IdeaDetail.module.css";
import backarrow from "../../assets/icons/grey-back-arrow.png";
import { ideas } from "../../data/ideas";
import Idea from "./ui/Idea/Idea";
import Comment from "./ui/Comment/Comment";
import { comments } from "../../data/comments";
import CommentReplyForm from "./ui/CommentReplyForm";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";

type IdeaParams = {
  id: string | undefined | any;
};

const IdeaDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<IdeaParams>();

  return (
    <div className="h-full overflow-y-auto bg-tertiary-300">
      <div className={clsx(styles["idea-container"])}>
        <div className="flex justify-between p-[24px] md:px-[40px] md:pt-[56px] lg:pt-[80px] lg:px-[88px] md:justify-center">
          <div
            onClick={() => navigate(-1)}
            className="flex items-center mb-[3px] md:pb-[4px]"
          >
            <img
              src={backarrow}
              alt="back arrow"
              className={styles["back-arrow"]}
            />
            <span className={styles["back-link-text"]}>Go Back</span>
          </div>
          <button className={styles["edit-btn"]}>Edit Idea</button>
        </div>
        {[ideas[id]].map(({ id, idea, category, description, likes }) => (
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
        <div className="mx-[23px] md:mx-[32px]">
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
