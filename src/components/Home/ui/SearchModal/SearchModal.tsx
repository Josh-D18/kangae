import { Dialog } from "@headlessui/react";
import styles from "./SearchModal.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";

type FormValues = {
  idea: string;
  category: string;
};

interface ISearchModal {
  isOpen: boolean;
  setIsOpen: any;
}

const SearchModal = (props: ISearchModal) => {
  const { isOpen, setIsOpen } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        as="div"
        className={styles["container"]}
      >
        <Dialog.Panel className={styles["content-container"]}>
          <Dialog.Title className={styles["title"]}>
            Search For An Idea
          </Dialog.Title>
          <Dialog.Description className={styles["description"]}>
            Search For An Idea By Name And/Or Category!
          </Dialog.Description>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Enter Idea"
              className={clsx(
                styles["input"],
                errors.idea && styles["input-error"]
              )}
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
            <div className="flex justify-between my-5">
              <button
                onClick={() => setIsOpen(false)}
                className={styles["button"]}
                type="button"
              >
                Go back
              </button>
              <button type="submit" className={styles["button"]}>
                Submit
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default SearchModal;
