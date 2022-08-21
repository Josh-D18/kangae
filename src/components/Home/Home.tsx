import { useState } from "react";
import Idea from "./ui/Idea/Idea";
import MobileFooter from "./ui/MobileFooter/MobileFooter";
import styles from "./Home.module.css";
import Modal from "./ui/Modal/Modal";
import plus from "../../assets/icons/plus-icon.webp";
import search from "../../assets/icons/search-icon.png";
import { ideas } from "../../data/ideas";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Search from "./ui/Search/Search";
import SearchModal from "./ui/SearchModal/SearchModal";
import DropdownOptions from "./ui/DropdownOptions/DropdownOptions";

const Home = () => {
  const [modalID, setModalID] = useState(0);
  const [viewSortBy, setViewSortBy] = useState(true);
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleSortBy = (state: boolean) => {
    setViewSortBy(state);
  };

  const handleSearch = () => {
    setIsOpenSearch(true);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["home-content-container"]}>
        <div className="flex items-center justify-around bg-tertiary-200  max-h-[56px] w-full h-full">
          <div className="flex">
            <p className="mr-1">Sort by</p>
            <span>:</span>
            <p className="ml-1">Most Upvotes</p>
          </div>
          <div>
            <button>Add Feedback</button>
          </div>
        </div>

        {/* Tablet Size And Up */}
        <div className="flex flex-row-reverse">
          <div className="flex-[2_0_auto] xl:flex-[1_0_auto]">
            {ideas.map((idea) => (
              <div key={idea.id}>
                <Idea
                  idea={idea.idea}
                  category={idea.category}
                  id={idea.id}
                  description={idea.description}
                  likes={idea.likes}
                />
              </div>
            ))}
          </div>
          {/* <MobileFooter /> */}
        </div>
      </div>
      <div>
        {ideas
          .filter((idea) => idea.id === modalID)
          .map((idea) => (
            <div key={idea.id}>
              <Modal
                username={idea.username}
                description={idea.description}
                title={idea.idea}
                category={idea.category}
                id={idea.id}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                likes={idea.likes}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
