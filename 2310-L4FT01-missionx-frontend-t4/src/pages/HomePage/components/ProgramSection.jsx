import styles from "./ProgramSection.module.css";
import group1 from "../../../assets/Home/Group 1.png";
import group2 from "../../../assets/Home/Group 2.png";
import group3 from "../../../assets/Home/Group 3.png";
import group4 from "../../../assets/Home/Group 4.png";
import { useState } from "react";
import CompetenciesSection1 from "./CompetenciesSection1";
import CompetenciesSection2 from "./CompetenciesSection2";
import CompetenciesSection3 from "./CompetenciesSection3";
import CompetenciesSection4 from "./CompetenciesSection4";

const ProgramSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const renderSection = () => {
    switch (activeSection) {
      case "section1":
        return <CompetenciesSection1 />;
      case "section2":
        return <CompetenciesSection2 />;
      case "section3":
        return <CompetenciesSection3 />;
      case "section4":
        return <CompetenciesSection4 />;
      default:
        return <CompetenciesSection1 />;
    }
  };

  return (
    <>
    <div className={styles.programSection}>
      <h2>
        Teaching kids programming and digital skills is MORE than just writing
        code.
      </h2>

      <div className={styles.groupImg}>
        <img src={group1} alt="group1" />
        <img src={group3} alt="group2" />
        <img src={group4} alt="group3" />
        <img src={group2} alt="group4" />
      </div>

      <h1>How our programme helps teachers and schools</h1>

      <div className={styles.programButtons}>
        <button className={activeSection === 'section1' ? styles.keyBtn : styles.programBtn} onClick={() => setActiveSection(`section1`)}>LEARN PATHWAYS</button>
        <button className={activeSection === 'section2' ? styles.keyBtn : styles.programBtn} onClick={() => setActiveSection(`section2`)}>DIGITAL TECHNOLOGIES</button>
        <button className={activeSection === 'section3' ? styles.keyBtn : styles.programBtn} onClick={() => setActiveSection(`section3`)}>KEY COMPETENCIES</button>
        <button className={activeSection === 'section4' ? styles.keyBtn : styles.programBtn} onClick={() => setActiveSection(`section4`)}>IR4.0</button>
      </div>
    </div>

    {renderSection()}

    </>
  );
};
export default ProgramSection;
