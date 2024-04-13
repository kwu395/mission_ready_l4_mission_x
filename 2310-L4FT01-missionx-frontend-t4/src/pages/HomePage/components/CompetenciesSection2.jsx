import styles from "./CompetenciesSection.module.css";
import star from "../../../assets/Home/star.png"
const CompetenciesSection2 = () => {
  return (
    <div className={styles.competenciesSection}>
      <div className={styles.competenciesSectionContainer}>
        <h2>Expands Digital Knowledge Base</h2>
        <p>
        This programme gives you the 5 major capabilities to be confident in Digital Technologies.
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
            <h3>PROBLEM SOLVING</h3>
            <p>The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology.</p>
            <h3>DECISION-MAKING</h3>
            <p>The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications.</p>
            <h3>CONFIDENCE</h3>
            <p>When having the skills to manipulate the applications and learning to use it brings self-confidence into your life.</p>
            <h3>HIGHER SELF-EXPECTATIONS</h3>
            <p>This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults.</p>
            <h3>COHERENCE</h3>
            <p>This programme offers all students a broader education that makes links within and across learning areas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompetenciesSection2;
