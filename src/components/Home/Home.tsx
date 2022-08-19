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
        <div className="flex items-center justify-around pt-11 md:hidden">
          <div className="flex">
            <p
              className={clsx(
                styles["sortByText"],
                !viewSortBy && "rounded-full bg-primary-600"
              )}
              onClick={() => handleSortBy(false)}
            >
              Most Liked
            </p>
            <p
              className={clsx(
                styles["sortByText"],
                viewSortBy && "rounded-full bg-primary-600"
              )}
              onClick={() => handleSortBy(true)}
            >
              Most Recent
            </p>
          </div>
          <div className="flex items-center rounded-full bg-secondary-200">
            <Link to="/create-idea" aria-label="link to create idea page">
              <img
                src={plus}
                className="max-w-[35px] mx-4 my-1"
                alt="addition"
              />
            </Link>
            <div onClick={handleSearch}>
              <img
                src={search}
                className="max-w-[35px] mx-4 my-1"
                alt="search"
              />
            </div>

            <SearchModal isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} />
          </div>
        </div>

        {/* Tablet Size And Up */}
        <div className="flex flex-row-reverse">
          <div className="sm:hidden md:flex w-[300px] flex-[0 0 auto] lg:flex-[1_1_auto] xl:flex-[0.5_1_auto]">
            <div className="h-[50%] w-[400px] pr-3 fixed py-6">
              <Search />
              <div className="my-6">
                <p
                  className={clsx(
                    styles["sortByText"],
                    "w-[50%] my-2",
                    !viewSortBy && "rounded-full bg-primary-600"
                  )}
                  onClick={() => handleSortBy(false)}
                >
                  Most Liked
                </p>
                <p
                  className={clsx(
                    styles["sortByText"],
                    "w-[50%] my-2",
                    viewSortBy && "rounded-full bg-primary-600"
                  )}
                  onClick={() => handleSortBy(true)}
                >
                  Most Recent
                </p>
              </div>
              <DropdownOptions />
            </div>
          </div>

          <div className="flex-[2_0_auto] xl:flex-[1_0_auto]">
            {ideas.map((idea) => (
              <div key={idea.id}>
                <Idea
                  idea={idea.idea}
                  category={idea.category}
                  id={idea.id}
                  setModalID={setModalID}
                  setIsOpen={setIsOpen}
                />
              </div>
            ))}
          </div>
          <MobileFooter />
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
