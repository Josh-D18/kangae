import { friends } from "../../../../data/friends";
import FriendItem from "../FriendItem/FriendItem";
import styles from "../../FriendsList.module.css";
import clsx from "clsx";

interface IOfflineFriends {
  isOffline: boolean;
}

const OfflineFriends = (props: IOfflineFriends) => {
  const { isOffline } = props;

  return (
    <div
      className={clsx(
        styles["friend-status-container"],
        isOffline ? "sm:block" : "sm:hidden",
        "md:block"
      )}
    >
      <div>
        <p className={styles["friend-title"]}>Offline</p>
        <p className={styles["friend-description"]}>
          Total Of Friends You Have Offline
        </p>

        {friends.map(({ id, username, online, friendBio, numberOfIdeas }) => (
          <FriendItem
            key={id}
            id={id}
            username={username}
            online={online}
            friendBio={friendBio}
            numberOfIdeas={numberOfIdeas}
            status={"offline"}
          />
        ))}
      </div>
    </div>
  );
};

export default OfflineFriends;
