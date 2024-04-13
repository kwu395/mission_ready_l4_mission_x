import styles from "./Instructions.module.css";

export default function InstructionsContent(props) {
  const {
    title,
    firstInstruction,
    secondInstruction,
    mainImage,
    thirdInstruction,
  } = props.data;

  return (
    <div className={styles.instructionsContainer}>
      <h1 className={styles.sectionInstructionTitle}>{title}</h1>
      <p className={styles.sectionInstruction}>{firstInstruction}</p>
      <p className={styles.sectionInstruction}>{secondInstruction}</p>
      <img src={mainImage} className={styles.renderImage} />
      <p className={styles.sectionInstruction}>{thirdInstruction}</p>
    </div>
  );
}
