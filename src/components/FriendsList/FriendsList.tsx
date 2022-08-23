import backarrow from "../../assets/icons/grey-back-arrow.png";
import styles from "./FriendsList.module.css";

const FriendsList = () => {
  return (
    <div>
      <div className="w-full h-[100px] bg-tertiary-200 flex justify-between">
        <div className="flex flex-col">
          <div className="">
            <img
              src={backarrow}
              alt="back arrow"
              className={styles["back-arrow"]}
            />
            <span>Go Back</span>
          </div>
          <span>Kanage</span>
        </div>
        <button>Add Idea</button>
      </div>
    </div>
  );
};

export default FriendsList;
