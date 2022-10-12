import backarrow from "../../assets/icons/grey-back-arrow.png";
import styles from "./FriendsList.module.css";
import plusIcon from "../../assets/icons/plus-icon.png";
import clsx from "clsx";
import OnlineFriends from "./ui/OnlineFriends/OnlineFriends";
import OfflineFriends from "./ui/OfflineFriends/OfflineFriends";
import FriendRequests from "./ui/FriendRequests/FriendRequests";
import { useState } from "react";

type IActive = {
  online: boolean;
  offline: boolean;
  requests: boolean;
};

const FriendsList = () => {
  const [isActive, setIsActive] = useState<IActive>({
    online: true,
    offline: false,
    requests: false,
  });

  const handleStatus = (status: string) => {
    isActive.online = false;
    isActive.offline = false;
    isActive.requests = false;
    setIsActive((prevState) => ({ ...prevState, [status]: true }));
  };

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
        <div
          className={clsx(
            styles["status-container"],
            isActive["offline"] && styles["status-container-active"]
          )}
          onClick={() => handleStatus("offline")}
        >
          Offline (3)
          <div
            className={clsx(
              isActive["offline"] && styles["line"],
              "bg-primary-600"
            )}
          />
        </div>
        <div
          className={clsx(
            styles["status-container"],
            isActive["online"] && styles["status-container-active"]
          )}
          onClick={() => handleStatus("online")}
        >
          Online (1)
          <div
            className={clsx(
              isActive["online"] && styles["line"],
              "bg-tertiary-500"
            )}
          />
        </div>
        <div
          className={clsx(
            styles["status-container"],
            isActive["requests"] && styles["status-container-active"]
          )}
          onClick={() => handleStatus("requests")}
        >
          Requests (2)
          <div
            className={clsx(
              isActive["requests"] && styles["line"],
              "bg-tertiary-400"
            )}
          />
        </div>
      </div>
      <div className="h-screen overflow-y-auto bg-tertiary-300">
        <OfflineFriends isOffline={isActive.offline} />
        <OnlineFriends isOnline={isActive.online} />
        <FriendRequests requests={isActive.requests} />
      </div>
    </div>
  );
};

export default FriendsList;
