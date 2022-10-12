import { friends } from "../../../../data/friends";
import FriendItem from "../FriendItem/FriendItem";
import styles from "../../FriendsList.module.css";
import clsx from "clsx";

interface IFriendRequests {
  requests: boolean;
}

const FriendRequests = (props: IFriendRequests) => {
  const { requests } = props;

  return (
    <div
      className={clsx(
        styles["friend-status-container"],
        requests ? "sm:block" : "sm:hidden",
        "md:block"
      )}
    >
      <p className={styles["friend-title"]}>Requests</p>
      <p className={styles["friend-description"]}>
        Total Of Friend Requests You Have
      </p>
      {friends.map(({ id, username, online, friendBio, numberOfIdeas }) => (
        <FriendItem
          key={id}
          id={id}
          username={username}
          online={online}
          friendBio={friendBio}
          numberOfIdeas={numberOfIdeas}
          status={"requests"}
        />
      ))}
    </div>
  );
};

export default FriendRequests;
