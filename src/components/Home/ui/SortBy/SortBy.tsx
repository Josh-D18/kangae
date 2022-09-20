import { ReactComponent as Dropdown } from "../../../../assets/icons/white-dropdown-icon.svg";
import styles from "./SortBy.module.css";
import plusicon from "../../../../assets/icons/plus-icon.png";
import { ReactComponent as Ideaicon } from "../../../../assets/icons/idea-lightblub.svg";

const SortBy = () => {
  return (
    <div className={styles["container"]}>
      <p className="sm:hidden md:flex ml-[24px] mr-[38px] ">
        <Ideaicon className="mr-[16px]" />
        <span className="font-primary font-[700] text-[18px] leading-[26.01px] letter-[-0.25px] text-primary-200">
          0 Ideas
        </span>
      </p>
      <div className="flex items-center md:max-w-[221px] md:mr-[141px] xl:max-w-[141px] mt-[6px]">
        <p className="mr-1 font-[400] text-[13px] leading-[19px] text-tertiary-100 xl:text-tertiary-300">
          Sort by <span>:</span>
          <span className="ml-1 font-[700] text-[13px] leading-[19px] not-italic text-tertiary-100">
            Most Upvotes
          </span>
        </p>
        <Dropdown className="max-w-[8px] max-h-[6px]" />
      </div>
      <div>
        <button className={styles["button"]}>
          <img
            src={plusicon}
            alt="addition"
            className="w-[11.45px] h-[11.43px]"
          />
          <span className="pl-[11px]">Add Idea</span>
        </button>
      </div>
    </div>
  );
};

export default SortBy;
