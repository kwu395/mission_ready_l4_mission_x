import TeacherSidebar from '../../../common/SideNavDashboard/TeacherSidebar.jsx'
import ContentWrapper from "./components/HelpRequestsWrapper";
import HelpRequestsContainer from "./components/HelpRequestsContainer";
import Reply from "./components/Reply";
import style from './HelpRequests.module.css';

export default function HelpRequests() {
  return (
    <>
    <div className={style.container}>
        <ContentWrapper>
          <div className={style.helpRequests}>
              <p className={style.title}>HELP REQUESTS</p>
              <div className={style.functions}><Reply/></div>
              <HelpRequestsContainer/>
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}
