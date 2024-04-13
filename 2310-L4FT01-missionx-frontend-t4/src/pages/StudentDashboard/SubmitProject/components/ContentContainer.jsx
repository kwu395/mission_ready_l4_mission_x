import styles from '../components/ContentContainer.module.css'

//display images
import callTeacherImg from '../../../../assets/StudentDashboard/submitProject-Photo.png'
import projectSubmitImg from '../../../../assets/StudentDashboard/makeProject-screenshot.png'

//button images
import callTeachIcon from '../../../../assets/StudentDashboard/callTeacher.png'
import sendPhotoIcon from '../../../../assets/StudentDashboard/sendPhoto.png'

export default function ContentContainer(props) {

    const { contentData } = props
    // const{
    //     imgSrc,
    //     imgAlt,
    //     title,
    //     text
    // } = props.data;

    return (
        <>
            {contentData.map((item, index) => {
                return (
                    <div className={styles.container} key={index} >
                        {/* <div className={styles.container} key={props.id} > */}
                        <img src={item.imgSrc} className={styles.displayImg} alt={item.imgAlt} />
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        {props.children}
                    </div>
                )
            })}
        </>
    )
}
