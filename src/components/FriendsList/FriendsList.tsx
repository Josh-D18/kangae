import backarrow from "../../assets/icons/grey-back-arrow.png";
import styles from "./FriendsList.module.css";
import plusIcon from "../../assets/icons/plus-icon.png";
import clsx from "clsx";
import FriendItem from "./ui/FriendItem/FriendItem";
import { friends } from "../../data/friends";

const FriendsList = () => {
  return (
    <div className="h-full">
      <div className={styles.container}>
        <div className="flex flex-col py-[26px] px-[24px]">
          <div className="flex items-center mb-[3px]">
            <img
              src={backarrow}
              alt="back arrow"
              className={styles["back-arrow"]}
            />
            <span className={styles["back-link-text"]}>Go Back</span>
          </div>
          <span className={styles["title"]}>Your Friends List</span>
        </div>
        <button className={styles["button"]}>
          <img src={plusIcon} alt="addtion" className="mr-[11px]" />
          Add Idea
        </button>
      </div>

      <div className={styles["friends-container"]}>
        <div className={styles["status-container"]}>Offline (3)</div>
        <div
          className={clsx(
            styles["status-container"],
            styles["status-container-active"]
          )}
        >
          Online (1)
        </div>
        <div className={styles["status-container"]}>Requests (2)</div>
      </div>

      <div className="h-full overflow-y-auto bg-tertiary-300">
        <div className={styles["friend-status-container"]}>
          <p className={styles["friend-title"]}>Online</p>
          <p className={styles["friend-description"]}>
            Total Of Friends You Have Online
          </p>
          {friends.map(({ id, username, online, friendBio, numberOfIdeas }) => (
            <FriendItem
              id={id}
              username={username}
              online={online}
              friendBio={friendBio}
              numberOfIdeas={numberOfIdeas}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
