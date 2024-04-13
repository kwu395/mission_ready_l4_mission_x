import ModalSignUp from "./ModalSignUp";
import styles from "./SignUpSection.module.css";
import { useState } from "react";

const SignUpSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.signUpSectionContainer}>
      <div className={styles.signUpSectionText}>
        <h1>
          Prepare young minds for a better <span className={styles.signUpSectionSpan}>future.</span>
        </h1>
        {/* <br/> */}
        <p>
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </p>
      </div>
      <div className={styles.signUpSectionButtons}>
        <button className={styles.signUpSectionButton1}>LEARN MORE</button>
        <div className={styles.signUpContainer}>
            <button onClick={handleOpenModal} className={styles.signUpSectionButton2}>SIGN UP</button>
            <p>*Basic subscription includes the first 15 projects free of charge.</p>
            {isModalOpen && <ModalSignUp onClose={handleCloseModal} />}
        </div>
      </div>
      
    </div>
  );
};
export default SignUpSection;
