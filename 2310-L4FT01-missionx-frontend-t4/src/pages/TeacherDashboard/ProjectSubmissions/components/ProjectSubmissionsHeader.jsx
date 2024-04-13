import styles from './ProjectSubmissionsHeader.module.css'

export default function ProjectSubmissionsHeader(props) {
    const { headerData } = props;


    return (
        <>
            {headerData.map((item) => {
                return (
                    <div className={styles.contentHeader}>
                        <h2>{item.title}</h2>
                        <div className={styles.actions}>
                        <div className={styles.actionOne}>
                            <p>{item.actionOne}</p>
                        </div>
                        <div className={styles.actionTwo}>
                            <p>{item.actionTwo}</p>
                        </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
