import Idea from "./ui/Idea/Idea";
import styles from "./Home.module.css";
import dropdown from "../../assets/icons/white-dropdown-icon.svg";
import { ideas } from "../../data/ideas";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["home-content-container"]}>
        <Header />
        <div className="flex items-center justify-around bg-tertiary-200  max-h-[56px] w-full h-full">
          <div className="flex items-center">
            <p className="mr-1 font-[400] text-[13px] leading-[19px] text-tertiary-100">
              Sort by <span>:</span>
              <span className="ml-1 font-[700] text-[13px] leading-[19px] not-italic text-tertiary-100">
                Most Upvotes
              </span>
            </p>
            <img
              src={dropdown}
              alt="dropdown"
              className="max-w-[8px] max-h-[6px]"
            />
          </div>
          <div>
            <button className={styles["button"]}>
              <span className={styles["button-text"]}>
                {/* <img src={plus} alt="" /> */}
                Add Idea
              </span>
            </button>
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
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Home;
