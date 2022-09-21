import { Link } from "react-router-dom";
import styles from "./HomeOptions.module.css";
import clsx from "clsx";
import offlineStatus from "../../../../assets/icons/friend-status-offline.png";
import onlineStatus from "../../../../assets/icons/friend-status-online.png";
import requestStatus from "../../../../assets/icons/friend-status-requests.png";

const HomeOptions = () => {
  return (
    <div className="sm:hidden md:block mt-[56px] mb-[40px] mr-[10px] ml-[39px]">
      <div className={styles["container-content"]}>
        <div className={clsx("p-[103px_26px_24px_24px]", styles["container"])}>
          <div>
            <p className={styles["title"]}>Kangae</p>
            <p className={styles["user"]}>Guest</p>
          </div>
        </div>
        <div className={styles["options-container"]}>
          <button className={styles["category-item"]}>All</button>
          <button className={styles["category-item"]}>All</button>
          <button className={styles["category-item"]}>All</button>
          <button className={styles["category-item"]}>Enhancement</button>
          <button className={styles["category-item"]}>All</button>
          <button className={styles["category-item"]}>Feature</button>
          <button className={styles["category-item"]}>UI</button>
        </div>

        <div className={styles["options-container"]}>
          <div className="flex justify-between w-full mb-[24px] ">
            <div className={styles["my-profile-title"]}>My Profile</div>
            <div className={styles["my-profile-view"]}>View</div>
          </div>
          <div className="flex justify-between w-full mb-[8px]">
            <div className={styles["my-profile-friend-status"]}>
              <img
                src={onlineStatus}
                alt="oval"
                aria-hidden="true"
                className="w-[8px] h-[8px] mr-[16px]"
              />
              Online
            </div>
            <div className={styles["my-profile-friend-status-number"]}>2</div>
          </div>
          <div className="flex justify-between mb-[8px] w-[175px]">
            <div className={styles["my-profile-friend-status"]}>
              <img
                src={offlineStatus}
                alt="oval"
                aria-hidden="true"
                className="w-[8px] h-[8px] mr-[16px]"
              />
              Offline
            </div>
            <div className={styles["my-profile-friend-status-number"]}>2</div>
          </div>
          <div className="flex justify-between w-full mb-[8px]">
            <div className={styles["my-profile-friend-status"]}>
              <img
                src={requestStatus}
                alt="oval"
                aria-hidden="true"
                className="w-[8px] h-[8px] mr-[16px]"
              />
              Requests
            </div>
            <div className={styles["my-profile-friend-status-number"]}>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOptions;
