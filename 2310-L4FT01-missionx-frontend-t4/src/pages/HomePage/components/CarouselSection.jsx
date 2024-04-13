import styles from "./CarouselSection.module.css";
import icon1 from "../../../assets/Home/animation.png";
import icon2 from "../../../assets/Home/games.png";
import icon3 from "../../../assets/Home/chatbots.png";
import icon4 from "../../../assets/Home/augreality.png";
import laptop1 from "../../../assets/Home/laptop1.png";
import laptop2 from "../../../assets/Home/laptop2.png";
import laptop3 from "../../../assets/Home/laptop3.png";
import laptop4 from "../../../assets/Home/laptop4.png";
import CarouselSectionItem from "./CarouselSectionItem";
import { useState } from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // CAROUSEL ARRAY
  const items = [
    {
      title: "laptop1",
      image: laptop1,
    },
    {
      title: "laptop2",
      image: laptop2,
    },
    {
      title: "laptop3",
      image: laptop3,
    },
    {
      title: "laptop4",
      image: laptop4,
    },
  ];


  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className={styles.carouselSectionContainer}>
      <div className={styles.carouselSectionLeft}>
        <div className={styles.carouselSectionText}>
          <h1>What we offer</h1>
          <p>
            The Creative Problem Solving programme is series of digital creation
            projects aimed to encourage self-motivation and student agency,
            designed by New Zealand’s leading IT industry experts and schools.
          </p>
          <h2>What will students create?</h2>
        </div>
        <div className={styles.carouselSectionIcons}>
          <img src={icon1} alt="animation" onClick={() => updateIndex(0)} />
          <img src={icon2} alt="games" onClick={() => updateIndex(1)}/>
          <img src={icon3} alt="chatbots" onClick={() => updateIndex(2)}/>
          <img src={icon4} alt="augreality" onClick={() => updateIndex(3)}/>
        </div>
      </div>

      {/* CAROUSEL */}

      <div className={styles.carouselSectionRight}>
        <div
          className={styles.inner}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return <CarouselSectionItem item={item}   />;
          })}
        </div>
        <div className={styles.carouselButtons}>
          <div className={styles.indicators}>
            {items.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    updateIndex(index);
                  }}
                  className={styles.indicatorsButtons}>
                  {index === activeIndex ? <MdRadioButtonChecked size="25px" /> : <MdRadioButtonUnchecked size="25px" />}                 
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselSection;
