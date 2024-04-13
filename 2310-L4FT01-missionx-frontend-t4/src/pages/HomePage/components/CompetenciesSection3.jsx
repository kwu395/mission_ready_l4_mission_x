import styles from "./CompetenciesSection.module.css";
import star from "../../../assets/Home/star.png"
const CompetenciesSection3 = () => {
  return (
    <div className={styles.competenciesSection}>
      <div className={styles.competenciesSectionContainer}>
        <h2>Enhance key competencies</h2>
        <p>
          The programme enhances capabilities of students in the 5 Key
          Competencies identified in the New Zealand Curriculum:
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
            <h3>THINKING</h3>
            <p>In particular the programme focused on problem solving, design thinking and computational thinking.</p>
            <h3>DISCERNING CODES</h3>
            <p>Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.</p>
            <h3>SELF-MANAGEMENT</h3>
            <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation.</p>
            <h3>RELATIONSHIPS WITH PEERS</h3>
            <p>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.</p>
            <h3>PARTICIPATION AND COLLABORATION</h3>
            <p> The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompetenciesSection3;
