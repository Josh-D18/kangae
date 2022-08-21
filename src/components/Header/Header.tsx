import headerLogo from "../../assets/images/bright-idea.png";
import hamburger from "../../assets/icons/white-hamburger.svg";
import { useState } from "react";
import DropDown from "./ui/Dropdown/DropDown";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className={styles["container"]}>
      <div className="flex flex-col justify-start m-[16px_24px]">
        <h1 className={styles["header-title"]}>Kangae</h1>
        <p
          className={clsx(
            styles["header-title"],
            "font-[500], text-[13px] opacity-[0.75] leading-[19px]"
          )}
        >
          Welcome Guest
        </p>
      </div>

      <div className="m-[27px_24px_28px]">
        <div className="md:hidden">
          <img
            src={hamburger}
            alt=""
            className="max-w-[20px] h-[17px]"
            onClick={handleClick}
          />
          <DropDown isOpen={openModal} setIsOpen={setOpenModal} />
        </div>
        <ul className={styles["links-container"]}>
          <li className={styles["links"]}>
            <Link to="/signin">Sign In</Link>
          </li>
          <li className={styles["links"]}>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
