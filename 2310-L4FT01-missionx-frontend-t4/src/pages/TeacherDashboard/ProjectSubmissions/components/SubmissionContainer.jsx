import styles from './SubmissionContainer.module.css'

export default function SubmissionContainer(props) {
  const { userData , statusData } = props
  
  return (
    <>
      <div className={styles.container}>
        <input type='checkbox' className={styles.checkbox}></input>
        <div className={styles.content}>
          <img src='' alt='profile image' className={styles.profileImg} />
          <p>(toUpperCase{props.name}) {props.projStatus}</p>
          <p>Date</p>
          <p>time</p>
          <img></img>
        </div>
      </div>


    </>
  )
}

