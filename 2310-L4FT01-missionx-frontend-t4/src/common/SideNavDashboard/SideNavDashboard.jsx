//Housekeeping
import { NavLink, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./SideNavDashboard.module.css";

//menu toggle img
import toggleArrowLeft from "../../assets/arrowLeft.png";

//icons for sidebarNav
import learningObjectivesIcon from '../../assets/StudentDashboard/learningObjectives.png'
import instructionsIcon from '../../assets/StudentDashboard/instructions.png'
import videoIcon from '../../assets/StudentDashboard/video.png'
import submitProjIcon from '../../assets/StudentDashboard/submitProject.png'
import makeProjectIcon from '../../assets/StudentDashboard/makeProject.png'
import takeQuizIcon from '../../assets/StudentDashboard/takeTheQuiz.png'
import bonusChallengeIcon from '../../assets/StudentDashboard/bonusChallenge.png'

//selected icons for sidebarNav
import learningObjectivesIconSelected from '../../assets/StudentDashboard/learningObjectivesSelected.png'
import instructionsIconSelected from '../../assets/StudentDashboard/instructionsSelected.png'
import videoIconSelected from '../../assets/StudentDashboard/videoSelected.png'
import submitProjIconSelected from '../../assets/StudentDashboard/submitProjectSelected.png'
import makeProjectIconSelected from '../../assets/StudentDashboard/makeProjectSelected.png'

//icons for sidebarNav user profile
import logoutIcon from "../../assets/logout.png";
import profileIcon from "../../assets/profile.png";
import settingsIcon from "../../assets/settings.png";

//display content imports
// import LearningObjectives from '../../pages/StudentDashboard/components/LearningObjectives/LearningObjectives'
// import VideoTutorial from '../../pages/StudentDashboard/components/VideoTutorial/VideoTutorial'
// import Instructions from '../../pages/StudentDashboard/components/Instructions/Instructions'
// import MakeProject from '../../pages/StudentDashboard/components/MakeProject/MakeProject'
// import SubmitProject from '../../pages/StudentDashboard/SubmitProject/SubmitProject'


export default function SidebarDashboard() {

    // active icon change
    // const [activeIconSrc , setActiveIconSrc] = useState(false);
    // const activeIcon = (e) => {
    //     const handleImg1 = () => setActiveIconSrc(learningObjectivesIconSelected)

    // }

    // sidebar minimise toggle
    const [miniSidebar, setMiniSidebar] = useState(false);
    const minimiseSidebar = () => setMiniSidebar(!miniSidebar);


    return (
        <>
            <div className={`${styles.sidebarNav} ${miniSidebar ? styles.miniSidebar : ""}`}>
                {/* User Profile img */}
                <div>
                    <div className={styles.profileImg}>
                        img
                        {/* <img src='#'/> */}
                    </div>
                </div>

                {/* sidebar nav */}
                <ul className={styles.sidebarNavItems}>
                    <li>
                        <NavLink to='learning-objectives' className={({ isActive }) => (isActive ? styles.active : "")} >
                        {/* <NavLink to='learning-objectives' id="learning-objectives" onClick={handleContentClick} className={({ isActive }) => (isActive ? styles.active : "")} > */}
                            <img src={learningObjectivesIcon} />
                            <span>LEARNING OBJECTIVES</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='instructions' className={({ isActive }) => (isActive ? styles.active : "")}>
                        {/* <NavLink to='instructions' id="instructions" onClick={handleContentClick} className={({ isActive }) => (isActive ? styles.active : "")}> */}
                        {/* <Link to='instructions' id="instructions" onClick={handleContentClick} className={`${styles.sideNavBtn} ${display.name === 'instructions' ? styles.active : ""}`}> */}
                            <img src={instructionsIcon} />
                            <span>INSTRUCTIONS</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='video-tutorial' className={({ isActive }) => (isActive ? styles.active : "")}>
                        {/* <NavLink to='video-tutorial' id="video-tutorial" onClick={handleContentClick} className={({ isActive }) => (isActive ? styles.active : "")}> */}
                            <img src={videoIcon} />
                            <span>VIDEO TUTORIAL</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='make-project' className={({ isActive }) => (isActive ? styles.active : "")}>
                        {/* <NavLink to='make-project' id='make-project' onClick={handleContentClick} className={({ isActive }) => (isActive ? styles.active : "")}> */}
                            <img src={makeProjectIcon} />
                            <span>MAKE PROJECT</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='submit-project' className={({ isActive }) => (isActive ? styles.active : "")}>
                        {/* <NavLink to='submit-project' id='submit-project' onClick={handleContentClick} className={({ isActive }) => (isActive ? styles.active : "")}> */}
                            <img src={submitProjIcon} />
                            <span>SUBMIT PROJECT</span>
                        </NavLink>
                    </li>
                    {/* Non-function sidebar links below this line */}
                    <li>
                        <NavLink to='#'>
                            <img src={bonusChallengeIcon}/>
                            {/* <img src={bonusChallengeIcon} id='bonus-challenge' onClick={handleContentClick} /> */}
                            <span>BONUS CHALLENGE</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='#'>
                        {/* <NavLink to='#' id='take-the-quiz' onClick={handleContentClick}> */}
                            <img src={takeQuizIcon} />
                            <span>TAKE THE QUIZ</span>
                        </NavLink>
                    </li>
                </ul>
                <div className={styles.toggleArrows}>
                    {/* toggle arrow - left < */}
                    <div className={styles.toggleArrowLeft} onClick={minimiseSidebar}>
                        <img src={toggleArrowLeft} />
                    </div>
                    {/* does this div need to sit in it's own div to house both left and right arrows? */}
                </div>
                {/* advertisement area */}
                <div>

                </div>
                {/* sidebar user nav */}
                <div className={styles.sideBarUser}>
                    <div className={styles.user}>
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
                {/* </div> */}


            </div>
            <Outlet />

      {/* <div>{display.component}</div> */}
    </>
  );
}
