import styles from "./IdeaDetail.module.css";
import backarrow from "../../assets/icons/grey-back-arrow.png";

const IdeaDetail = () => {
  return (
    <div className="h-full bg-tertiary-300">
      <div className="flex justify-between p-[24px]">
        <div className="flex items-center mb-[3px] md:pb-[4px]">
          <img
            src={backarrow}
            alt="back arrow"
            className={styles["back-arrow"]}
          />
          <span className={styles["back-link-text"]}>Go Back</span>
        </div>
        <button>Edit Idea</button>
      </div>
    </div>
  );
};

export default IdeaDetail;
