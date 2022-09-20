import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import styles from "./DropdownOptions.module.css";
import dropdown from "../../../../assets/icons/dropdown-icon.png";
import clsx from "clsx";

const HomeOptions = () => {
  return (
    <div className="sm:hidden md:block">
      <div className={styles["dropdown-option-container"]}></div>
    </div>
  );
};

export default HomeOptions;
