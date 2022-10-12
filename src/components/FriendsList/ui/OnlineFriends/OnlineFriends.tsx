import { friends } from "../../../../data/friends";
import FriendItem from "../FriendItem/FriendItem";
import styles from "../../FriendsList.module.css";
import clsx from "clsx";

interface IOnlineFriends {
  isOnline: boolean;
}

const OnlineFriends = (props: IOnlineFriends) => {
  const { isOnline } = props;

  return (
    <div
      className={clsx(
        styles["friend-status-container"],
        isOnline ? "sm:block" : "sm:hidden",
        "md:block"
      )}
    >
      <p className={styles["friend-title"]}>Online</p>
      <p className={styles["friend-description"]}>
        Total Of Friends You Have Online
      </p>
      {friends.map(({ id, username, online, friendBio, numberOfIdeas }) => (
        <FriendItem
          key={id}
          id={id}
          username={username}
          online={online}
          friendBio={friendBio}
          numberOfIdeas={numberOfIdeas}
          status={"online"}
        />
      ))}
    </div>
  );
};

export default OnlineFriends;
