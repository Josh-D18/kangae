import clsx from "clsx";
import styles from "./Input.module.css";

interface IInput {
  placeholder: string;
  name: string;
  id: string;
  label: string;
  data: any;
  errors: any;
}

const Input = (props: IInput) => {
  const { placeholder, name, id, label, data, errors } = props;

  return (
    <div className="flex flex-col my-6">
      <label
        htmlFor={id}
        className="font-[500] not-italic text-primary-500 font-primary py-3"
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        id={id}
        className={clsx(styles["input"], errors && "border-error")}
        type={name}
        {...data(name, {
          required: `${name} is required`,
          maxLength: 10,
          minLength: 4,
        })}
      />
      {/* Intergrate with the backend */}
      <div className="relative">
        {errors[`${name}`]?.type === "required" && (
          <p className="font-[500] not-italic text-error font-primary py-3 absolute capitalize whitespace-nowrap">
            {errors[`${name}`].message}
          </p>
        )}
        {/* {errors[`${name}`]?.type === "maxLength" && (
          <p className="font-[500] not-italic text-error font-primary py-3 absolute capitalize whitespace-nowrap">
            {`${name} must be no greater than 10 characters`}
          </p>
        )}
        {errors[`${name}`]?.type === "minLength" && (
          <p className="font-[500] not-italic text-error font-primary py-3 absolute capitalize whitespace-nowrap">
            {`${name} must be greater than 5 characters`}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Input;
