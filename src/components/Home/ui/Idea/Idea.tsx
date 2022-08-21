import myprofileicon from "../../../../assets/icons/my-profile-icon.png";
import styles from "./Idea.module.css";
import likeArrow from "../../../../assets/icons/like-up-arrow.png";
import messageBubble from "../../../../assets/icons/messagebubble.png";
import clsx from "clsx";
interface IIdea {
  idea: string;
  category: string;
  id: number;
  description: string;
  likes: number;
}

const Idea = (props: IIdea) => {
  const { idea, category, likes, description } = props;

  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["idea-text-container"]}>
          <div className={styles["idea-title"]}>{idea}</div>
          <div className={styles["idea-description"]}>{description}</div>
          <div className={styles["idea-category"]}>{category}</div>
          <div className="flex justify-between h-[32px] items-center ">
            <div className={styles["idea-likes"]}>
              <img src={likeArrow} className="w-[8px] h-[4px]" alt="likes" />
              <span className={styles["idea-number-text"]}>{likes}</span>
            </div>
            <div className={styles["idea-comments"]}>
              <img
                src={messageBubble}
                alt="message"
                className="w-[18px] h-[16px] mr-[2px]"
              />
              <span className={clsx(styles["idea-number-text"], "ml-[2px]")}>
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
