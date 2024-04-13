import styles from "./EnquireSection.module.css";
import classroom from "../../../assets/Home/classroom.png";
import { useState } from "react";
import ModalSignUp from "./ModalSignUp";

const EnquireSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.enquireSection}>
      <div className={styles.enquireSectionContainer}>
        <img src={classroom} alt="classroom" />
        <div className={styles.enquireSectionText}>
          <h1>What are you waiting for?</h1>
          <h2>Start teaching Digital Technologies today.</h2>
          <p>
            If you need more information, we are happy to answer any questions
            you may have.
          </p>
          <div className={styles.enquireSectionButtons}>
            <button className={styles.enquireSectionBtn1}>ENQUIRE NOW</button>
            <button className={styles.enquireSectionBtn2} onClick={handleOpenModal}>
              SIGN UP
            </button>
          </div>
          {isModalOpen && <ModalSignUp onClose={handleCloseModal} />}
        </div>
      </div>
    </div>
  );
};
export default EnquireSection;
