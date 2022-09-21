import onlineStatusIcon from "../../../../assets/icons/friend-status-online.png";
import messagebubble from "../../../../assets/icons/messagebubble.png";
import styles from "./FriendItem.module.css";

interface IFriendItem {
  id: number;
  username: string;
  online: boolean;
  friendBio: string;
  numberOfIdeas: number;
}

const FriendItem = (props: IFriendItem) => {
  const { username, friendBio, numberOfIdeas } = props;

  return (
    <div className={styles["friend-info-container"]}>
      <div className={styles["line"]} />
      <div className={styles["friend-status"]}>
        <img
          src={onlineStatusIcon}
          alt="online"
          aria-hidden="true"
          className="mr-[8px]"
        />
        Online
      </div>
      <div className="px-[24px] pb-[24px]">
        <div className={styles["friend-name"]}>@{username}</div>
        <div className={styles["friend-description"]}>{friendBio}</div>
        <div className="flex justify-between mt-[30px]">
          <button className={styles["numberOfFriends"]}>
            # Of Ideas:
            <span className={styles["numberOfFriends-number"]}>
              {numberOfIdeas}
            </span>
          </button>
          <div className="flex items-center">
            <img
              src={messagebubble}
              alt="message bubble"
              className="w-[18px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendItem;
