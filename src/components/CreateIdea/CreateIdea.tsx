import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./CreateIdea.module.css";
import backArrow from "../../assets/icons/back-arrow.png";
import circleButton from "../../assets/icons/plus-circle-button.png";
import plusIcon from "../../assets/icons/plus-icon.png";

enum CategoryEnum {
  Healthcare = "Healthcare",
  Technology = "Technology",
  Construction = "Construction",
  Retail = "Retail",
  NondurableManufacturing = "Nondurable Manufacturing",
  Telecommunication = "Telecommunication",
  Automobile = "Automobile",
  Manufacturing = "Manufacturing",
  OilandGas = "Oil and Gas",
  FoodIndustry = "Food Industry",
  RealEstate = "Real Estate",
  RetailTrade = "Retail Trade",
  Web3 = "Web 3",
  Utilities = "Utilities",
  WholesaleTrade = "Wholesale Trade",
  WasteManagement = "Waste Management",
  Transportation = "Transportation",
  LifeandHealthInsurance = "Life and Health Insurance",
  Ecommerce = "Ecommerce",
  FinancialServices = "Financial Services",
  AdministrationBusiness = "Administration Business",
  Agriculture = "Agriculture",
  Arts = "Arts",
  Educational = "Educational",
  Warehousing = "Warehousing",
}

interface IFormInput {
  idea: string;
  description: string;
  category: CategoryEnum;
}

const CreateIdea = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="w-full h-full bg-tertiary-300">
      <div className={styles["back-button"]}>
        <img
          src={backArrow}
          alt="arrow"
          className="mr-[15.67px] w-[6px] h-[10px]"
        />
        <span>Go Back</span>
      </div>
      <div>
        <img src={circleButton} alt="circle" />
        <img
          src={plusIcon}
          alt="addition"
          className="absolute top-[102px] left-[14px]"
        />
      </div>
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles["container"]}>
          <div className={styles["title"]}>Create New Feedback</div>
          <div className="flex flex-col w-[322px] items-center mb-5 md:w-[400px] lg:w-[500px]">
            <label className="">Idea</label>
            <label>Enter Your Amazing Idea!</label>
            <input
              {...register("idea")}
              className={styles["input"]}
              placeholder="Enter Your Life Changing Idea!"
            />
          </div>
          <div className="flex flex-col w-[322px] items-center mb-5 md:w-[400px] lg:w-[500px]">
            <textarea
              {...register("description")}
              className={clsx(styles["input"], styles["input-description"])}
              placeholder="Enter Your Life Changing Idea!"
            />
          </div>
          <div className="flex flex-col items-center w-[322px] mt-5 md:w-[400px] lg:w-[500px]"></div>
          <button type="submit" className={styles["button"]}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateIdea;
