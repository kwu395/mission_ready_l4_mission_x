import styles from "./TopNavTeacherDashboard.module.css";
import logo from "../../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";

export default function TopNavTeacherDashboard(props) {
  return (
    <div>
      {/* language flags */}
      <div className={styles.flagContainer}>
        <img src={nzFlag} alt="New Zealand flag" className={styles.flag} />
        <img src={maoriFlag} alt="Maori flag" className={styles.flag} />
      </div>

      <div className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />
        
        {/* placeholder buttons */}
        <div className={styles.ctaContainer}>
          <button className={styles.helpBtn}>Help Centre</button>
          <button className={styles.moreProjBtn}>More Projects</button>
        </div>
      </div>
    </div>
  );
}
