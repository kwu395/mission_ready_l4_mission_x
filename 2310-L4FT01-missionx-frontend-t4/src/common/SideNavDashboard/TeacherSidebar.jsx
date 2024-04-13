//Housekeeping
import { NavLink, Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import styles from './SideNavDashboard.module.css'

//menu toggle img
import toggleArrowLeft from "../../assets/arrowLeft.png";

//icons for sidebarNav
import helpRequestIcon from "../../assets/TeacherDashboard/helpRequests.png";
import progressTrackerIcon from "../../assets/TeacherDashboard/progressTracker.png";
import projectLibraryIcon from "../../assets/TeacherDashboard/projectLibrary.png";
import projectSubmissionsIcon from "../../assets/TeacherDashboard/projectSubmissions.png";
import studentProfilesIcon from "../../assets/TeacherDashboard/studentProfiles.png";

//icons for sidebarNav user profile
import logoutIcon from "../../assets/logout.png";
import profileIcon from "../../assets/profile.png";
import settingsIcon from "../../assets/settings.png";

//display content imports
// import ProjectSubmissions from '../../pages/TeacherDashboard/ProjectSubmissions/ProjectSubmissions.jsx'


export default function SidebarDashboard() {
  // sidebar minimise toggle
  const [miniSidebar, setMiniSidebar] = useState(false);
  const minimiseSidebar = () => setMiniSidebar(!miniSidebar);


    // const [display, setDisplay] = useState({ name:"project-submissions", component: <ProjectSubmissions/> })
    // // const [display, setDisplay] = useState({ name:"progress-tracker", component: <ProgressTracker /> })
    // const handleContentClick = (e) => {
    //     console.log(e.target.id)
    //     switch (e.target.id) {
    //         case 'student-profiles':
    //             setDisplay({ name:"student-profiles", component: <StudentProfiles /> })
    //             break;
    //         case 'help-requests':
    //             setDisplay({ name:"help-requests", component: <HelpRequests /> })
    //             break;
    //         case 'project-submissions':
    //             setDisplay({ name:"project-submissions", component: <ProjectSubmissions/> })
    //             break;
    //         case 'project-library':
    //             setDisplay({ name:"project-library", component: <ProjectLibrary/> })
    //             break;
    //         default:
    //             setDisplay({ name:"progress-tracker", component: <ProgressTracker /> })
    //             break;
    //     }}
    
    return (
        <>
            <div className= {`${styles.sidebarNav} ${miniSidebar ? styles.miniSidebar : ""}`}>
                {/* User Profile img */}
                <div>
                <div className= {styles.profileImg}> 
                    img
                    {/* <img src='#'/> */}
                </div>
                </div>

            {/* sidebar nav */}
                <ul className={styles.sidebarNavItems}>
                    <li>
                        {/* <button id="progress-tracker" onClick={handleContentClick} className={`${styles.sideNavBtn}`}> */}
                        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>
                            <img src={progressTrackerIcon} />
                            <span>PROGRESS TRACKER</span>
                        </NavLink>
                        {/* </button> */}
                    </li>
                    <li>
                        {/* <button id="student-profiles" onClick={handleContentClick} className={`${styles.sideNavBtn} `}> */}
                        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>
                            <img src={studentProfilesIcon} />
                            <span>STUDENT PROFILES</span>
                        </NavLink>
                        {/* </button> */}
                    </li>
                    <li>
                        {/* <button id="help-requests" onClick={handleContentClick} className={`${styles.sideNavBtn} `}> */}
                        <NavLink to='help-requests' className={({ isActive }) => (isActive ? styles.active : "")}>
                            <img src={helpRequestIcon} />
                            <span>HELP REQUESTS</span>
                        </NavLink>
                        {/* </button> */}
                    </li>
                    <li>
                        {/* <button id="help-requests" onClick={handleContentClick} className={`${styles.sideNavBtn}  ${display.name === 'submit-project' ? styles.active :""}`}> */}
                        <NavLink to='project-submissions' className={({ isActive }) => (isActive ? styles.active : "")}>
                            <img src={projectSubmissionsIcon} />
                            <span>PROJECT SUBMISSIONS</span>
                        </NavLink>
                        {/* </button> */}
                    </li>
                    <li>
                        {/* <button id='project-library' onClick={handleContentClick} className={`${styles.sideNavBtn} ${display.name === 'bonus-challenge' ? styles.active :""}`}> */}
                        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>
                            <img src={projectLibraryIcon} />
                            <span>PROJECT LIBRARY</span>
                        </NavLink>
                        {/* </button> */}
                    </li>
                </ul>
            <div className={styles.toggleArrows}>                
            {/* toggle arrow - left < */}
                <div className= {styles.toggleArrowLeft} onClick={minimiseSidebar}>
                    <img src={toggleArrowLeft} />
                </div>
                {/* does this div need to sit in it's own div to house both left and right arrows? */}
            </div>
            
            {/* sidebar user nav */}
                <div className= {styles.sideBarUser}>
                    <div className= {styles.user}>
                        <img src={profileIcon} />
                        <span>Profile</span>
                    </div>
                    <div className={styles.user}>
                {/* non-functional element: settings */}
                        <img src={settingsIcon} />
                        <span>Settings</span>
                    </div>
                    <div className={styles.user}>
                        <img src={logoutIcon} />
                        <span>Log out</span>
                    </div>
                </div>

            </div>
            <Outlet />
        </>
    )
}
