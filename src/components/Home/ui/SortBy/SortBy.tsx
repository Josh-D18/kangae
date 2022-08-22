import dropdown from "../../../../assets/icons/white-dropdown-icon.svg";
import styles from "./SortBy.module.css";
import plusicon from "../../../../assets/icons/plus-icon.png";

const SortBy = () => {
  return (
    <div className="flex items-center justify-around bg-tertiary-200  max-h-[56px] w-full h-full">
      <div className="flex items-center">
        <p className="mr-1 font-[400] text-[13px] leading-[19px] text-tertiary-100">
          Sort by <span>:</span>
          <span className="ml-1 font-[700] text-[13px] leading-[19px] not-italic text-tertiary-100">
            Most Upvotes
          </span>
        </p>
        <img
          src={dropdown}
          alt="dropdown"
          className="max-w-[8px] max-h-[6px]"
        />
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
