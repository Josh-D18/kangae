import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import offlineStatus from "../../../../assets/icons/friend-status-offline.png";
import onlineStatus from "../../../../assets/icons/friend-status-online.png";
import requestStatus from "../../../../assets/icons/friend-status-requests.png";

interface IDropDown {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const DropDown = (props: IDropDown) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(true)}
        className={styles["container"]}
        role="dialog"
      >
        <Dialog.Panel>
          <div className={styles["container-content"]}>
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
                <div className={styles["my-profile-friend-status-number"]}>
                  2
                </div>
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
                <div className={styles["my-profile-friend-status-number"]}>
                  2
                </div>
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
                <div className={styles["my-profile-friend-status-number"]}>
                  2
                </div>
              </div>
              <ul className={styles["links-container"]}>
                <Link
                  to="/signin"
                  className={styles["links"]}
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className={styles["links"]}
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default DropDown;
