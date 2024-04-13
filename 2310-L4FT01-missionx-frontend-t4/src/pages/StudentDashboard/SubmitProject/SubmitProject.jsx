// things to delete once confirmed no longer needed
import style from '../../../common/Dashboard/Dashboard.module.css'
//display images
import callTeacherImg from '../../../assets/StudentDashboard/submitProject-Photo.png'
import projectSubmitImg from '../../../assets/StudentDashboard/makeProject-screenshot.png'

//button images
import callTeachIcon from '../../../assets/StudentDashboard/callTeacher.png'
import sendPhotoIcon from '../../../assets/StudentDashboard/sendPhoto.png'
import btnData from './SubmitProjectBtn.json' //delete later when sure not required

  // {/* <div className={`${style.display} ${styles.content}`}>
  //     <div className={styles.photoSubmit}>
  //       <img src={projectSubmitImg} className={styles.displayImg}/>
  //       <h2>Submit project photo</h2>
  //       <p>After completing your project, take a screenshot of your project and upload it here.</p>
  //       <button className={styles.projSubBtn}>
  //         <img src={sendPhotoIcon} className={styles.btnIcon}/>
  //         Send Photo
  //       </button>
  //     </div>
  //    <div className={styles.vl}></div>
  //     <div className={styles.showTeacher}>
  //       <img src={callTeacherImg} className={styles.displayImg}/>
  //       <h2>Show your teacher</h2>
  //       <p>If your teacher is in the same room as you, click the button below to let them know you are done.</p>
  //       <button className={styles.projSubBtn}>
  //         <img src={callTeachIcon} className={styles.btnIcon}/>
  //         Call Teacher
  //       </button>
  //     </div>

  //   </div> */}
//----------------------------------------//

// Housekeeping
import styles from './SubmitProject.module.css'

//Dashboard styling component
import DashboardContent from '../../../common/Dashboard/DashboardContent'

// Submit Project content container
import ContentContainer from './components/ContentContainer'

// button
import SubmitAndCallBtn from './components/SubmitBtn'

// data
import submitProjectData from './SubmitProject.json'
import callTeacherData from './CallTeacherData.json'

// console.log(submitProjectData)
// console.log(btnData)

export default function SubmitProject() {


  return (
    
    <>
      <DashboardContent>
        <ContentContainer contentData={submitProjectData}>
          <SubmitAndCallBtn  contentData={submitProjectData}/>
        </ContentContainer>
        <div className={styles.vl}></div>
        <ContentContainer contentData={callTeacherData}>
          <SubmitAndCallBtn  contentData={callTeacherData}/>
        </ContentContainer>        
      </DashboardContent>
    </>
  
  )
}
