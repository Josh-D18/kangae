import backArrow from "../../assets/icons/back-arrow.png";
import circleButton from "../../assets/icons/plus-circle-button.png";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../CreateIdea/CreateIdea.module.css";
import editIcon from "../../assets/icons/edit-icon.png";

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

const EditIdea = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="w-full h-full overflow-y-auto bg-tertiary-300">
      <div>
        <div className={styles["back-button"]}>
          <img
            src={backArrow}
            alt="arrow"
            className="mr-[15.67px] w-[6px] h-[10px]"
          />
          <span>Go Back</span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["edit-form-container"]}
        >
          <div className="relative top-[-18px] md:left-[37px] left-[20px] w-[40px] h-[40px]">
            <img src={circleButton} alt="circle" className="relative" />
            <img
              src={editIcon}
              alt="addition"
              className="relative bottom-[27px] left-[12px] "
            />
          </div>
          <div className={styles["title"]}>Edit Idea</div>
          <div className={styles["form-input-container"]}>
            <div className="flex flex-col px-[24px] w-full md:w-[456px] md:px-[42px] lg:pl-[24px]">
              <label className={styles["form-label-title"]} htmlFor="idea">
                Idea Title
              </label>
              <label
                className={styles["form-label-description"]}
                htmlFor="idea"
              >
                Edit Your Amazing Idea!
              </label>
              <input
                {...register("idea")}
                className={styles["input"]}
                placeholder="Enter Your Idea!"
                id="idea"
              />
            </div>
          </div>

          <div className={styles["form-input-container"]}>
            <div className="flex flex-col px-[24px] w-full md:w-[456px] md:px-[42px] lg:pl-[24px]">
              <label className={styles["form-label-title"]} htmlFor="category">
                Idea Category
              </label>
              <label
                className={styles["form-label-description"]}
                htmlFor="category"
              >
                What Industry Does Your Idea Fall Under?
              </label>
              <select
                {...register("category")}
                className={clsx(styles["input"], styles["input-selection"])}
                value="Select An Industry"
                id="category"
              >
                <option value="Select An Industry" disabled hidden>
                  Select an Industry
                </option>
                <option value="Healthcare">Healthcare</option>
                <option value="Technology">Technology</option>
                <option value="Construction">Construction</option>
                <option value="Retail">Retail</option>
                <option value="Non durable Manufacturing">
                  Nondurable Manufacturing
                </option>
                <option value="Telecommunication">Telecommunication</option>
                <option value="Automobile">Automobile</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Oil and Gas">Oil and Gas</option>
                <option value="Food Industry">Food Industry</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Retail Trade">Retail Trade</option>
                <option value="Web 3">Web 3</option>
                <option value="Utilities">Utilities</option>
                <option value="Wholesale Trade">Wholesale Trade</option>
                <option value="Waste Management">Waste Management</option>
                <option value="Transportation">Transportation</option>
                <option value="Life and Health Insurance">
                  Life and Health Insurance
                </option>
                <option value="Ecommerce">E-commerce</option>
                <option value="FinancialServices">Financial Services</option>
                <option value="Administration Business">
                  Administration Business
                </option>
                <option value="Agriculture">Agriculture</option>
                <option value="Arts">Arts</option>
                <option value="Educational">Educational</option>
                <option value="Warehousing">Warehousing</option>
              </select>
            </div>
          </div>
          <div className={styles["form-input-container"]}>
            <div className="flex flex-col px-[24px] w-full md:w-[456px] md:px-[42px] lg:pl-[24px]">
              <label
                className={styles["form-label-title"]}
                htmlFor="description"
              >
                Idea Description
              </label>
              <label
                className={styles["form-label-description"]}
                htmlFor="description"
              >
                Edit The Description!
              </label>
              <textarea
                {...register("description")}
                className={clsx(styles["input"], styles["input-description"])}
                placeholder="Enter The Spicy Details!"
                id="description"
              />
            </div>
            <div className="md:flex md:flex-row-reverse md:ml-[90px] xl:ml-[50px]">
              <button type="submit" className={styles["button"]}>
                Search
              </button>
              <button type="button" className={styles["button-cancel"]}>
                Cancel
              </button>
              <button type="button" className={styles["button-delete"]}>
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditIdea;
