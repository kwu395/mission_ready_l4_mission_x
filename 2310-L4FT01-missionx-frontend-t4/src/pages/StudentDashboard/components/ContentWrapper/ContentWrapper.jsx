import styles from "./ContentWrapper.module.css";

export default function ContentWrapper(props) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}




