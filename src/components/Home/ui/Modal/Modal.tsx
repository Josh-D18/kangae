import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface IModal {
  username: string;
  description: string;
  title: string;
  category: string;
  id: number;
}

const Modal = (props: IModal) => {
  const { username, description, title, category } = props;
  let [isOpen, setIsOpen] = useState(true);

  return (
    <div className="absolute top-0 left-0 right-0">
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
          className="absolute top-0 left-0 right-0 w-[200px] m-auto"
        >
          <Dialog.Panel>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            {/* <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button> */}
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
