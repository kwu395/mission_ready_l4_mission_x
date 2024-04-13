import styles from "./FooterHome.module.css";

export default function FooterHome() {
  return (
    <div className={styles.footerHome}>
      <ul>
        <li className={styles.category}>COMPANY</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Partners</li>
      </ul>
      <ul>
        <li className={styles.category}>COURSES</li>
        <li>Register</li>
        <li>Login</li>
        <li>Projects</li>
        <li>Teachers</li>
        <li>Parents</li>
        <li>Resources</li>
      </ul>
      <ul>
        <li className={styles.category}>SUPPORT</li>
        <li>FAQs</li>
        <li>Helpdesk</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <li className={styles.category}>LEGAL</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className={styles.levelUpWorksText}>
        <li className={styles.levelUpWorksTitle}>LevelUp Works</li>
        <li>
          LevelUp Works LevelUp Works is an Auckland-based enterprise dedicated
          to developing game-based learning software to help teachers in
          response to the New Zealand Digital Technologies & Hangarau Matihiko.
        </li>
        <li>alan@levelupworks.com</li>
        <li>(021) 668 185</li>
      </ul>
    </div>
  );
}
