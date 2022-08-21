import headerLogo from "../../assets/images/bright-idea.png";
import hamburger from "../../assets/icons/hamburger.svg";
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
        <p className={clsx(styles["header-title"], "font-[500], text-[13px]")}>
          Welcome User
        </p>
      </div>

      <div className="md:m-2 md:mr-5 m-[0.8rem] mr-[1.05rem] md:mt-[2rem] ">
        <div className="md:hidden">
          <img
            src={hamburger}
            alt=""
            className="max-w-[50px] h-[50px]"
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
