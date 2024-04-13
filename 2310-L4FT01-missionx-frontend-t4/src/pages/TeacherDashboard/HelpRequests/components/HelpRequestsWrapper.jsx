import styles from "./HelpRequestsWrapper.module.css";

// This component is the content wrapper that contains the student help requests
// This component includes the scroll bar. See HelpRequestsWrapper.css.module.

export default function HelpRequestsWrapper(props) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}




