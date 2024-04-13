import styles from "./CompetenciesSection.module.css";
import star from "../../../assets/Home/star.png"
const CompetenciesSection1 = () => {
  return (
    <div className={styles.competenciesSection}>
      <div className={styles.competenciesSectionContainer}>
        <h2>Interlinking Pathways</h2>
        <p>
        This programme gives us 5 important interlinking Learning Pathways.
        </p>
        <div className={styles.competenciesSectionTextMain}>
          <div className={styles.competenciesSectionIcons}>
            <img src={star} alt="star" className={styles.iconStar}/>
            <img src={star} alt="star" className={styles.iconStar}/>
            <img src={star} alt="star" className={styles.iconStar}/>
            <img src={star} alt="star" className={styles.iconStar}/>
            <img src={star} alt="star" className={styles.star}/>
          </div>
          <div className={styles.competenciesSectionText}>
            <h3>COMPUTATIONAL THINKING</h3>
            <p>Within the programme the students are enabled to express problems and form solutions that will be designed so a computer can be used to create diverse and encapsulating applications.</p>
            <h3>DEVELOPING DIGITAL OUTCOMES</h3>
            <p>This programme is designed to strengthen the outcomes of each students personally to form strong applications.</p>
            <h3>DESIGNING PROCESSED OUTCOMES</h3>
            <p>Students will be taught the ways of how outcomes are processed, thought about, and produced.</p>
            <h3>DEVELOP VISUAL AND SOCIAL COMMUNICATIONS</h3>
            <p>Students will learn to design visually pleasing applications used to both keep the user aware of what is happening on the screen.</p>
            <h3>STRONG TECHNOLOGICAL PRACTICES</h3>
            <p>The programme will show students the best practices to think and solve the problems brought on by using technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompetenciesSection1;
