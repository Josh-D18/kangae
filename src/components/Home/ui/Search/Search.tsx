import React from "react";
import styles from "./Search.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";

type FormValues = {
  idea: string;
  category: string;
};

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form>
      <input
        placeholder="Enter Idea"
        className={clsx(styles["input"], errors.idea && styles["input-error"])}
        {...register("idea", {
          required: "Please enter an Idea!",
        })}
      />
      <div className="relative">
        {errors.idea?.type === "required" && (
          <p className="font-[500] not-italic text-error font-primary py-3 absolute capitalize whitespace-nowrap top-[-28px]">
            {errors.idea.message}
          </p>
        )}
      </div>
      <input
        placeholder="Enter Category"
        className={styles["input"]}
        {...register("category")}
      />
    </form>
  );
};

export default Search;
