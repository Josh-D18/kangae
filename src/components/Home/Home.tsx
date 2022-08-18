import React, { useState } from "react";
import Idea from "./ui/Idea/Idea";
import MobileFooter from "./ui/MobileFooter/MobileFooter";
import styles from "./Home.module.css";
import Modal from "./ui/Modal/Modal";
import plus from "../../assets/icons/plus-icon.webp";
const Home = () => {
  let [isOpen, setIsOpen] = useState(true);

  const ideas = [
    {
      id: 1,
      username: "user1",
      idea: "UPI Payment app",
      category: "Finance",
      description:
        "UPI, i.e. Unified Payments Interface- based payment apps are all the rage now-a-days. It is a real-time inter-bank payment system that allows sending or requesting money.",
    },
    {
      id: 2,
      username: "user2",
      idea: "Fitness App",
      category: "Fitness",
      description:
        "A healthy lifestyle web application targeting health conscious people to track their habits assisted by registered nutritionists, pathologists and health coaches in order to ultimately lower the risk of lifestyle disorders",
    },
    {
      id: 3,
      username: "user3",
      idea: "Voice translation app",
      category: "Miscellaneous",
      description:
        "One of the primary concern of travelling abroad is not knowing the language of the country and the struggle of trying to communicate with the natives.",
    },
    {
      id: 4,
      username: "user4",
      idea: "Language learning app",
      category: "Education",
      description:
        "The language learning app that helps users with some beginner lessons on different languages in one of the most brilliant app ideas for 2022. The app can have different levels of difficulty with the first level being alphabets and basic letters to the advanced level containing full-fledged conversations. ",
    },
    {
      id: 5,
      username: "user5",
      idea: "Railway tracking app",
      category: "Transportation",
      description:
        "Citizens of metropolitan cities are heavily dependent on trains to get to their destination. It can be incredibly disruptive if the trains are late and you have no way of knowing if you should wait or consider an alternative way of getting to your destination.",
    },
    {
      id: 6,
      username: "user6",
      idea: "Restaurant POS Application",
      category: "Food",
      description:
        "There are many things to consider when purchasing furniture for your home. One of the most important considerations is where you’ll want it placed and what kind will best suit both functions as well aesthetically? ",
    },
    {
      id: 7,
      username: "user7",
      idea: "Bike servicing app",
      category: "Fitness",
      description:
        "A door-step bike servicing platform and application which will use technology for the convenience of two-wheeler owners by providing them a transparent connection with high-quality vehicle maintenance providers.",
    },
  ];

  return (
    <div className={styles["container"]}>
      <div className="h-[100%] overflow-y-auto scroll-smooth">
        <div className="flex items-center justify-around pt-11">
          <div>
            <p>Trending</p>
          </div>
          <div>
            <img src={plus} className="w-[35px]" />

            <img src={plus} className="w-[35px]" />
          </div>
        </div>
        {ideas.map((idea) => (
          <div key={idea.id}>
            <Idea
              username={idea.username}
              idea={idea.idea}
              category={idea.category}
              description={idea.description}
              selectedIdea={idea}
              id={idea.id}
            />
          </div>
        ))}
      </div>
      <MobileFooter />
    </div>
  );
};

export default Home;
