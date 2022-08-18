import myprofileicon from "../../../../assets/icons/my-profile-icon.png";
import Modal from "../Modal/Modal";
import styles from "./Idea.module.css";

interface IIdea {
  username: string;
  idea: string;
  category: string;
  description: string;
  id: number;
  selectedIdea: {};
}

const Idea = (props: IIdea) => {
  const { idea, category, id, username, description } = props;

  const handleClick = (id: number) => {
    console.log(id);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["icon-container"]} onClick={() => handleClick(id)}>
        <img src={myprofileicon} alt="profile" className={styles["icon"]} />
        <div className={styles["idea-text-container"]}>
          <h2 className={styles["idea-title"]}>{idea}</h2>
          <h3 className={styles["idea-category"]}>{category}</h3>
        </div>
      </div>
      {/* <Modal
        username={username}
        description={description}
        title={idea}
        category={category}
        id={id}
      /> */}
      {/* <div className={styles["idea-description-container"]}>
        <p className={styles["idea-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          qui! Atque aliquam fuga, provident explicabo impedit possimus aperiam
          eius vel, doloribus sit facilis cumque veniam? Ex corrupti reiciendis
          voluptatibus quod!
        </p>
      </div> */}
    </div>
  );
};

export default Idea;
