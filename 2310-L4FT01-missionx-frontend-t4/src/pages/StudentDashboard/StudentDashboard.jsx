//Dashboard layout component
// import style from '../../common/Dashboard/Dashboard.module.css'
import Dashboard from "../../common/Dashboard/Dashboard.jsx";

// Dashboard components
import TopNavDashboard from "../../common/TopNavDashboard/TopNavDashboard.jsx";
import FooterDashboard from "../../common/FooterDashboard/FooterDashboard.jsx";

// Sidebar and data
// import SideNavDashboard from "../../common/SideNavDashboard/SideNavDashboard.jsx"
import SidebarDashboard from '../../common/SidebarDashboard/SidebarDashboard'
import SidebarDataStudent from '../../common/SidebarDashboard/SidebarData-Student.json'

export default function StudentDashboard() {
  return (
    <>
      <TopNavDashboard
        projectTitle="Project"
        subTitle="Introduction"
        dotMap="⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"
      />
      <Dashboard>
   {/* <div className={style.layout}>
      <div className={style.contentContainer}> */}
        <SidebarDashboard sidebarData={SidebarDataStudent}/>
        
      {/* </div>
      </div> */}
      </Dashboard>
      <FooterDashboard />
    </>
  );
}

