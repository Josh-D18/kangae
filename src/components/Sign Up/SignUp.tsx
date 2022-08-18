import Input from "./ui/Input/Input";
import styles from "./SignUp.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data, errors);

  return (
    <form
      className="flex flex-col items-center justify-center w-full max-h-[95%] bg-secondary-200"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="font-[500] not-italic text-[40px] leading-[42px] text-center tracking-[4.82px] my-3 w-[311px] max-h-[42px] text-primary-500 font-primary">
        Sign Up
      </div>

      <Input
        placeholder="Username"
        id="username"
        name="username"
        label="User Name"
        data={register}
        errors={errors}
      />
      <Input
        placeholder="Password"
        id="password"
        name="password"
        label="Password"
        data={register}
        errors={errors}
      />

      <div className="py-10">
        <button type="submit" placeholder="Submit" className={styles["button"]}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUp;
