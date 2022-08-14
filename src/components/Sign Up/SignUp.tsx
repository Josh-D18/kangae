import { useState } from "react";
import Input from "./ui/Input/Input";
import styles from "./SignUp.module.css";

type initalState = {
  username: string;
  password: string;
  usernameError: boolean;
  passwordError: boolean;
};

const SignUp = () => {
  const [signupInput, setSignUpInput] = useState<initalState>({
    username: "",
    password: "",
    usernameError: false,
    passwordError: false,
  });

  const handleChange = (e: any) => {
    setSignUpInput({ ...signupInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (signupInput.username.length < 3 && signupInput.password.length < 5) {
      setSignUpInput({
        ...signupInput,
        usernameError: true,
        passwordError: true,
      });
    }

    //   setSignUpInput({
    //     ...signupInput,
    //     usernameError: false,
    //     passwordError: false,
    //   });
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-full h-[95%] bg-secondary-200"
      onSubmit={handleSubmit}
    >
      <div className="font-[500] not-italic text-[40px] leading-[42px] text-center tracking-[4.82px] my-3 w-[311px] h-[42px] text-primary-400 font-primary">
        Sign Up
      </div>
      <Input
        placeholder="Username"
        id="username"
        name="username"
        label="User Name"
        handleChange={handleChange}
        error={signupInput.usernameError}
      />
      <Input
        placeholder="Password"
        id="password"
        name="password"
        label="Password"
        handleChange={handleChange}
        error={signupInput.passwordError}
      />
      <input type="submit" placeholder="Submit" className={styles["button"]} />
    </form>
  );
};

export default SignUp;
