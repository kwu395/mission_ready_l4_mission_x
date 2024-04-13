//Housekeeping
import styles from './ProjectSubmissions.module.css'

//Dashboard styling component
import DashboardContent from '../../../common/Dashboard/DashboardContent'
import ContentContainer from './components/ContentContainer'

//Content pieces
import ProjectSubmissionsHeader from './components/ProjectSubmissionsHeader'
import SubmissionContainer from './components/SubmissionContainer'

//data pieces
import headerData from './ProjectSubmissionsData.json'
import userData from '../../../common/StudentData.json'


export default function ProjectSubmissions() {
  return (
    <>
       <DashboardContent> 
      {/* <div className={`${styles.content}`}> */}
        <ContentContainer>
        <ProjectSubmissionsHeader headerData={headerData}/>
          <SubmissionContainer userData={userData}/>
        </ContentContainer>



      {/* </div> */}
      </DashboardContent>
    </>
  )
}
