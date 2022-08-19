import { useForm, SubmitHandler } from "react-hook-form";

enum CategoryEnum {
  AccommodationandFoodServices = "Accommodation and Food Services",
  AdministrationBusiness = "AdministrationBusiness",
  Agriculture = "Agriculture",
  Arts = "Arts",
  Construction = "Construction",
  Educational = "Educational",
  Finance = "Finance",
  Healthcare = "Healthcare",
  Information = "Information",
  Manufacturing = "Manufacturing",
  Mining = "Mining",
  ProfessionalAndScientific = "ProfessionalAndScientific",
  RealEstate = "RealEstate",
  RetailTrade = "RetailTrade",
  TransportationAndWarehousing = "TransportationAndWarehousing",
  Utilities = "Utilities",
  WholesaleTrade = "WholesaleTrade",
  WasteManagement = "WasteManagement",
  Web3 = "Web 3",
}

interface IFormInput {
  idea: String;
  category: CategoryEnum;
}

const CreateIdea = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div>
      <div>Create A Inspring Idea That Will Change The World!</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter Your Life Changing Idea!" />
        <label>First Name</label>
        <input {...register("idea")} />
        <label>Category Selection</label>
        <select {...register("category")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </form>
    </div>
  );
};

export default CreateIdea;
