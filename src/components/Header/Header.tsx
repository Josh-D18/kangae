import headerLogo from "../../assets/images/bright-idea.png";
import hamburger from "../../assets/icons/hamburger.svg";
import { useState } from "react";
import DropDown from "./ui/Dropdown/DropDown";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className=" h-[72px] flex justify-between w-full md:bg-secondary-200 items-center">
      <div className="flex items-center justify-start">
        <img
          src={headerLogo}
          alt="model"
          className="w-[50px] h-[50px] ml-[1.5rem] md:w-[70px] md:h-[70px] md:mt-2"
        />
        <p className="text-primary-400 font-primary font-[700] ml-[1rem] md:text-[30px] md:font-[500] md:mt-2">
          Kangae
        </p>
      </div>

      <div className="md:m-2 md:mr-5 m-[0.8rem] mr-[1.05rem] md:mt-[2rem]">
        <div className="md:hidden">
          <img
            src={hamburger}
            alt=""
            className="w-[50px] h-[50px]"
            onClick={handleClick}
          />
          <DropDown isOpen={openModal} setIsOpen={setOpenModal} />
        </div>
        <ul className={styles["links-container"]}>
          <Link to="#" className={styles["links"]}>
            Sign In
          </Link>
          <Link to="#" className={styles["links"]}>
            Sign Up
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
