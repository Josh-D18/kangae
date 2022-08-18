import myprofileicon from "../../../../assets/icons/my-profile-icon.png";
import styles from "./Idea.module.css";

interface IIdea {
  idea: string;
  category: string;
  id: number;
  setModalID: any;
  setIsOpen: any;
}

const Idea = (props: IIdea) => {
  const { idea, category, id, setModalID, setIsOpen } = props;

  const handleClick = (id: number) => {
    setModalID(id);
    setIsOpen(true);
  };

  return (
    <div className={styles["container"]} onClick={() => handleClick(id)}>
      <div className={styles["icon-container"]}>
        <img src={myprofileicon} alt="profile" className={styles["icon"]} />
        <div className={styles["idea-text-container"]}>
          <h2 className={styles["idea-title"]}>{idea}</h2>
          <h3 className={styles["idea-category"]}>{category}</h3>
        </div>
      </div>
    </div>
  );
};

export default Idea;
