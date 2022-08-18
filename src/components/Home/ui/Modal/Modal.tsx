import { Dialog, Transition } from "@headlessui/react";
import styles from "./Modal.module.css";
import closeIcon from "../../../../assets/icons/close-icon.png";
import heartIcon from "../../../../assets/icons/heart.png";
import { Fragment } from "react";

interface IModal {
  username: string;
  description: string;
  title: string;
  category: string;
  id: number;
  isOpen: boolean;
  setIsOpen: any;
  likes: number;
}

const Modal = (props: IModal) => {
  const {
    username,
    description,
    title,
    category,
    id,
    isOpen,
    setIsOpen,
    likes,
  } = props;

  return (
    <div className="absolute top-0 left-0 right-0" key={id}>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className={styles["container"]}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel as="div" className={styles["content-container"]}>
              <img
                src={closeIcon}
                alt="close"
                className="max-w-[20px] self-end mr-[30px]"
                onClick={() => setIsOpen(false)}
              />
              <Dialog.Title className={styles["idea-title"]}>
                {title}
              </Dialog.Title>

              <Dialog.Description
                className={styles["idea-description-container"]}
                as={"div"}
              >
                <p className={styles["idea-description"]}>{description}</p>
              </Dialog.Description>
              <div className={styles["idea-info-container"]}>
                <p
                  className={
                    "text-[18px] rounded-full font-[600] text-[#800080] capitalize"
                  }
                >
                  {username}
                </p>
                <p
                  className={
                    "text-[18px] rounded-full font-[600] text-[#800080] capitalize"
                  }
                >
                  {category}
                </p>
                <div className="flex items-center">
                  <img
                    src={heartIcon}
                    alt="heart"
                    className="max-w-[20px] mr-4"
                  />
                  <p>{likes}</p>
                </div>
              </div>
              <div className={styles["button-container"]}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={
                    "bg-[#800080] rounded-full p-3 text-primary-200 font-[700]"
                  }
                >
                  Go To <span className="capitalize">{username}</span>'s Profile
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
