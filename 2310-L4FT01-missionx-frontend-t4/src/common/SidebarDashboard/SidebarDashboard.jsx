//Housekeeping
import { NavLink, Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import styles from './SidebarDashboard.module.css'

//menu toggle img
import toggleArrowLeft from '../../assets/arrowLeft.png'

//icons for sidebarNav user profile
import logoutIcon from '../../assets/logout.png'
import profileIcon from '../../assets/profile.png'
import settingsIcon from '../../assets/settings.png'



export default function SidebarDashboard(props) {

    // data from props as defined by where component is placed
    const { sidebarData } = props;

    // sidebar minimise toggle
    const [miniSidebar, setMiniSidebar] = useState(false);
    const collaspeSidebar = () => setMiniSidebar(!miniSidebar);


    return (
        <>
            <div className={`${styles.sidebarNav} ${miniSidebar ? styles.miniSidebar : ""}`}>
                {/* User Profile img */}
                <div className={styles.profile}>
                    <div className={styles.profileImg}>
                        img
                        {/* <img src='#'/> */}
                        {/* this is going to need to be a component likely to parse in img src? */}
                    </div>
                </div>
            
                {/* sidebar nav */}
                <ul className={styles.sidebarNavItems}>
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} >
                                <NavLink to={item.path} className={({ isActive }) => (isActive ? styles.active : "")}>
                                    <img className={styles.icon} src={item.icon} alt={item.alt} />
                                    <img className={styles.selectedIcon} src={item.selectedIcon} alt={item.alt} />
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.toggleArrows}>
                    {/* toggle arrow - left < */}
                    <div className={styles.toggleArrowLeft} onClick={collaspeSidebar}>
                        <img src={toggleArrowLeft} alt='< arrow'/>
                    </div>
                    {/* does this div need to sit in it's own div to house both left and right arrows? */}
                </div>
                {/* advertisement area */}
                <div className={styles.advertisementArea}>

                </div>
                {/* sidebar user nav */}
                <div className={styles.sideBarUser}>
                    <Link className={styles.user}>
                        <img src={profileIcon} alt='profileIcon'/>
                        <span>Profile</span>
                    </Link>
                    <Link className={styles.user}>
                        {/* non-functional element: settings */}
                        <img src={settingsIcon} alt='settingsIcon'/>
                        <span>Settings</span>
                    </Link>
                    <Link className={styles.user}>
                        <img src={logoutIcon} alt='logOutIcon'/>
                        <span>Log out</span>
                    </Link>
                </div>


            </div>
            <Outlet />
      
          

        </>
    )
}
