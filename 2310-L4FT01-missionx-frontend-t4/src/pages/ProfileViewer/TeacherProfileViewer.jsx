import NavbarHome from '../../common/NavbarHome.jsx'
import FooterHome from '../../common/FooterHome.jsx'
import ProfileImageContainer from './components/ProfileImageContainer.jsx'
import ProfileInfoContainer from './components/ProfileInfoContainer.jsx'
import BTDButton from './components/BTDButton.jsx'
import BTPButton from './components/BTPButton.jsx'
import styles from './TeacherProfileViewer.module.css'
import { useParams } from 'react-router-dom'

export default function TeacherProfileViewer() {
    const teacherId = useParams()
    return (
        <>
        <div className = {styles.teacherProfileViewer}>
            <div className = {styles.navbar}>
                <NavbarHome teacher={true}/> {/*Using props to display image*/}
            </div>
            <div className = {styles.profileImageContainer}>
                <ProfileImageContainer id={teacherId}/>
            </div>
            <div className = {styles.profileInfoContainer}>
                <ProfileInfoContainer id={teacherId}/>
            </div>
            <div className = {styles.BTDButton}>
                <BTDButton/>
            </div>
            <div className = {styles.BTPButton}>
                <BTPButton/>
            </div>
            <div className = {styles.footer}>
                <FooterHome/>
            </div>
        </div>
        </>
    )
}