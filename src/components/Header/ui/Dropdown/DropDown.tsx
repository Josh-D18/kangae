import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./Dropdown.module.css";
import closeIcon from "../../../../assets/icons/close-icon.png";
import { Link } from "react-router-dom";

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
        onClose={() => setIsOpen(false)}
        className={styles["container"]}
        role="dialog"
      >
        <Dialog.Panel>
          <div className="flex justify-end m-6">
            <img
              src={closeIcon}
              alt=""
              className="max-w-[20px] max-h-[20px] ml-[1.5rem]"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          </div>
          <div className={styles["container-content"]}>
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
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default DropDown;
