import styles from "./NavbarHome.module.css";
import logoHome from "../assets/NavBar/LevelUpWorks-white.png";
import avatarIcon from "../assets/NavBar/Avatar-white.png";
import teacherIcon from "/images/teachers/JasminaSalvador.png";
import flagNzIcon from "../assets/NavBar/NZFlag.png";
import flagMaoriIcon from "../assets/NavBar/MaoriFlag.png";
import { useState } from "react";
import ModalLogin from "../pages/HomePage/components/ModalLogin";
import { useNavigate } from 'react-router-dom';
// import ModalSectionLogIn from "../pages/HomePage/components/ModalSectionLogIn";

const NavbarHome = (props) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.navBarHome}>
      
      <img src={logoHome} alt="Home Logo" onClick={() => navigate('/')}/>
      
      <ul className={styles.navMenuHome}>
        <li onClick={() => navigate('/')}>HOME</li>
        <li>FEATURES</li>
        <li>TEACHERS</li>
      </ul>
     
      <div className={styles.rightSection}>
        
        <div className={styles.flags}>
          <p>LANG</p>
          <img src={flagNzIcon} alt="New Zealand Flag" width="15%"/>
          <img src={flagMaoriIcon} alt="Maori Flag" width="15%"/>
        </div>
       
        <div className={styles.regLogin} onClick={props.teacher ? () => navigate('/teacher-profile/1') : undefined}>
          <img src={props.teacher ? teacherIcon : avatarIcon} alt="Avatar Icon" width={"30px"}/>
          <p>
            <span className={styles.span}>{props.teacher ? "JASMINA SALVADOR " : "REGISTER "}</span><span className={styles.span} onClick={handleOpenModal}>{props.teacher ? "" : "| LOGIN"}</span>
            {isModalOpen && <ModalLogin onClose={handleCloseModal} />}
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default NavbarHome;