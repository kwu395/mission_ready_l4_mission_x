import styles from "./LearningObjectives.module.css";

export default function ScratchBlocks(props) {
  const { title, subtitle, blocks } = props.data;
  const renderBlocks = () => {
    return blocks.map((block, index) => {
      return (
        <div key={index}>
          <h3>{block.title}</h3>
          <div className={styles.renderBlocks}>
            <img src={block.mainImage} />
            <img src={block.secondaryImage} />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>
        <h1 className={styles.sectionTitle}>{title}</h1>
        <p className={styles.sectionSubtitle}>{subtitle}</p>
      </div>
      <div className={styles.renderBlocks}>{renderBlocks()}</div>
    </div>
  );
}
