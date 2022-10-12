import clsx from "clsx";
import messagebubble from "../../../../assets/icons/messagebubble.png";
import styles from "./FriendItem.module.css";

interface IFriendItem {
  id: number;
  username: string;
  online: boolean;
  friendBio: string;
  numberOfIdeas: number;
  status: string;
}

const FriendItem = (props: IFriendItem) => {
  const { username, friendBio, numberOfIdeas, status } = props;

  return (
    <div className={styles["friend-info-container"]}>
      <div
        className={clsx(
          styles["line"],
          status === "offline" && "bg-primary-600",
          status === "requests" && "bg-tertiary-400",
          status === "online" && "bg-tertiary-500"
        )}
      />
      <div className={styles["friend-status"]}>
        <div
          className={clsx(
            "mr-[8px] h-[8px] w-[8px] rounded-[50%]",
            status === "offline" && "bg-primary-600",
            status === "requests" && "bg-tertiary-400",
            status === "online" && "bg-tertiary-500"
          )}
        ></div>
        {(status === "online" && "Online") ||
          (status === "requests" && "Request") ||
          (status === "offline" && "Offline")}
      </div>
      <div className="px-[24px] pb-[24px]">
        <div className={styles["friend-name"]}>@{username}</div>
        <div className={styles["friend-description"]}>{friendBio}</div>
        <div className="flex justify-between mt-[30px] md:mt-[10px] xl:mt-[20px] md:mb-[5px]">
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
