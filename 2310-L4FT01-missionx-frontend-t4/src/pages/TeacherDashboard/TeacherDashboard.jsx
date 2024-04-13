//Dashboard layout component
// import style from '../../common/Dashboard/Dashboard.module.css'
import Dashboard from "../../common/Dashboard/Dashboard.jsx";

import TopNavTeacherDashboard from '../../common/TopNavDashboard/TopNavTeacherDashboard'
import FooterDashboard from '../../common/FooterDashboard/FooterDashboard'

// Sidebar and data
// import TeacherSidebar from '../../common/SideNavDashboard/TeacherSidebar'
import SidebarDashboard from '../../common/SidebarDashboard/SidebarDashboard'
import SidebarDataTeacher from '../../common/SidebarDashboard/SidebarData-Teacher.json'

export default function TeacherDashboard() {
  return (
    <>
    {/* <TopNavDashboard
        projectTitle="Project"
        subTitle="Introduction"
        // dotMap="⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"
      /> */}
      <TopNavTeacherDashboard />
      <Dashboard>

        <SidebarDashboard sidebarData={SidebarDataTeacher}/>
        
      </Dashboard>
      <FooterDashboard />
    </>
  )
}
