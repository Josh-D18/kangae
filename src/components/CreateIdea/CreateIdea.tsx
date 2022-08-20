import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./CreateIdea.module.css";

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
    <div className="flex flex-col items-center h-full">
      <div className={styles["title"]}>Create An Inspring Idea!</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["container"]}>
        <div className="flex flex-col w-[322px] items-center mb-5 md:w-[400px] lg:w-[500px]">
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
        <div className="flex flex-col items-center w-[322px] mt-5 md:w-[400px] lg:w-[500px]">
          <select
            {...register("category")}
            className={styles["input"]}
            value="Select An Industry"
          >
            <option value="Select An Industry" disabled hidden>
              Select an Industry
            </option>
            <option value="Healthcare">Healthcare</option>
            <option value="Technology">Technology</option>
            <option value="Construction">Construction</option>
            <option value="Retail">Retail</option>
            <option value="NondurableManufacturing">
              Nondurable Manufacturing
            </option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="Automobile">Automobile</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="OilandGas">Oil and Gas</option>
            <option value="FoodIndustry">Food Industry</option>
            <option value="RealEstate">Real Estate</option>
            <option value="RetailTrade">Retail Trade</option>
            <option value="Web 3">Web 3</option>
            <option value="Utilities">Utilities</option>
            <option value="WholesaleTrade">Wholesale Trade</option>
            <option value="WasteManagement">Waste Management</option>
            <option value="Transportation">Transportation</option>
            <option value="LifeandHealthInsurance">
              Life and Health Insurance
            </option>
            <option value="Ecommerce">E-commerce</option>
            <option value="FinancialServices">Financial Services</option>
            <option value="AdministrationBusiness">
              Administration Business
            </option>
            <option value="Agriculture">Agriculture</option>
            <option value="Arts">Arts</option>
            <option value="Educational">Educational</option>
            <option value="Warehousing">Warehousing</option>
          </select>
        </div>
        <button type="submit" className={styles["button"]}>
          Search
        </button>
      </form>
    </div>
  );
};

export default CreateIdea;
