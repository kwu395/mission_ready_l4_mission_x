import styles from "./TopNavDashboard.module.css";
import logo from "../../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";

export default function TopNavDashboard(props) {
  return (
    <div>
      {/* language flags */}
      <div className={styles.flagContainer}>
        <img src={nzFlag} alt="New Zealand flag" className={styles.flag} />
        <img src={maoriFlag} alt="Maori flag" className={styles.flag} />
      </div>

      <div className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          <h3 className={styles.navbarText}>{props.projectTitle}</h3>
          <h5 className={styles.navbarText}>{props.subTitle}</h5>
        </div>
        {/* <div>{props.dotMap}</div> */}

        {/* placeholder buttons */}
        <div className={styles.ctaContainer}>
          <button className={styles.startProjBtn}>Start Project</button>
          <button className={styles.helpBtn}>Ask Teacher for help</button>
          <button className={styles.moreProjBtn}>More Projects</button>
        </div>
      </div>
    </div>
  );
}
