import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import styles from "./DropdownOptions.module.css";

const DropdownOptions = () => {
  return (
    <div className="sm:hidden md:block">
      <Menu>
        <Menu.Button
          as="button"
          className={
            "w-[100px] text-primary-200 text-[19px] capitalize font-[600] bg-primary-600 rounded-md text-center"
          }
        >
          Menu
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className={styles["dropdown-option-container"]}>
            <Menu.Item as="div" className={styles["dropdown-item"]}>
              {({ active }) => (
                <Link
                  to="/create-idea"
                  className={`${active && "text-[19px] font-[700]"}`}
                >
                  Create An Idea
                </Link>
              )}
            </Menu.Item>
            <Menu.Item as="div" className={styles["dropdown-item"]}>
              {({ active }) => (
                <Link
                  to="/my-profile"
                  className={`${active && "text-[19px] font-[700]"}`}
                >
                  My Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item as="div" className={styles["dropdown-item"]}>
              {({ active }) => (
                <Link
                  to="/my-friends"
                  className={`${active && "text-[19px] font-[700]"}`}
                >
                  My Friends
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownOptions;
