import Idea from "./ui/Idea/Idea";
import styles from "./Home.module.css";

import { ideas } from "../../data/ideas";
import Header from "../Header/Header";
import SortBy from "./ui/SortBy/SortBy";
import NotFound from "./ui/NotFound/NotFound";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["home-content-container"]}>
        <Header />
        <SortBy />

        {/* Tablet Size And Up */}
        <div className="flex flex-row-reverse">
          <div className="flex-[2_0_auto] xl:flex-[1_0_auto]">
            {ideas.length > 0 ? (
              ideas.map((idea) => (
                <div key={idea.id}>
                  <Idea
                    idea={idea.idea}
                    category={idea.category}
                    id={idea.id}
                    description={idea.description}
                    likes={idea.likes}
                  />
                </div>
              ))
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
