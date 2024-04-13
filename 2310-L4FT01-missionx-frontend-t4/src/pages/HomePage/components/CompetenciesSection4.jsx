import styles from "./CompetenciesSection.module.css";
import star from "../../../assets/Home/star.png"
const CompetenciesSection4 = () => {
  return (
    <div className={styles.competenciesSection}>
      <div className={styles.competenciesSectionContainer}>
        <h2>IR4.0</h2>
        <p>
          Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in the Fourth Industrial Revolution. (IR4.0)
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
            <h3>LEARNING TO LEARN</h3>
            <p>The programme will set challenges at the end of every project to encourage students to explore and learn how to learn.</p>
            <h3>COMMUNITY ENGAGEMENT</h3>
            <p>The programme encourages students to be involved in the communities, such as family, friends, and in school, to contribute and make connections with other people.</p>
            <h3>CULTURAL DIVERSITY</h3>
            <p>This programme is designed in New Zealand and reflects NZ's cultural diversity.</p>
            <h3>INCLUSION</h3>
            <p>In particular the programme is designed with acknowledgement to the student's identities and talents, allowing them to be creative to their personal ability.</p>
            <h3>FUTURE FOCUS</h3>
            <p>The programme leads students to explore future themes such as artificial intelligence and augmented reality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompetenciesSection4;
