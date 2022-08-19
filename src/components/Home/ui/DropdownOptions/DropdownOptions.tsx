import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import styles from "./DropdownOptions.module.css";
import dropdown from "../../../../assets/icons/dropdown-icon.png";
import clsx from "clsx";

const DropdownOptions = () => {
  return (
    <div className="sm:hidden md:block">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              as="button"
              className={
                "w-[100px] text-primary-500 text-[19px] capitalize font-[600] bg-primary-600 rounded-md text-center flex justify-around items-center cursor-pointer"
              }
            >
              Menu
              <img
                src={dropdown}
                className={clsx(
                  "w-[20px] ",
                  open ? "rotate-180 duration-200" : "duration-200"
                )}
                alt=""
              />
              {/* rotate(180deg); cursor: pointer; */}
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
          </>
        )}
      </Menu>
    </div>
  );
};

export default DropdownOptions;
