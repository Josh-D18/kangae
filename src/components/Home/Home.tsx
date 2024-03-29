import Idea from "./ui/Idea/Idea";
import styles from "./Home.module.css";

import { ideas } from "../../data/ideas";
import Header from "../Header";
import SortBy from "./ui/SortBy/SortBy";
import NotFound from "./ui/NotFound/NotFound";
import HomeOptions from "./ui/HomeOptions";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["home-content-container"]}>
        <Header />
        <HomeOptions />
        <div className="xl:mt-[94px]">
          <SortBy />
          {/* Tablet Size And Up */}
          <div className="flex flex-row-reverse">
            <div className={styles["idea-container"]}>
              {ideas.length > 0 ? (
                ideas.map(
                  ({ id, idea, category, description, likes }, index) => (
                    <div key={id}>
                      <Link to={`idea-detail/${index}`} key={id}>
                        <Idea
                          idea={idea}
                          category={category}
                          id={id}
                          description={description}
                          likes={likes}
                        />
                      </Link>
                    </div>
                  )
                )
              ) : (
                <NotFound />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
