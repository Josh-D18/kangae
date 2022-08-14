import clsx from "clsx";
import styles from "./Input.module.css";

interface IInput {
  placeholder: string;
  name: string;
  id: string;
  label: string;
  handleChange: (e: any) => void;
  error: boolean;
}

const Input = (props: IInput) => {
  const { placeholder, name, id, label, handleChange, error } = props;

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
        className={clsx(styles["input"], error && "border-error")}
        onChange={(e) => handleChange(e)}
        type={name}
      />
      {error && (
        <p className="font-[500] not-italic text-error font-primary py-3">
          Invaild Input
        </p>
      )}
    </div>
  );
};

export default Input;
