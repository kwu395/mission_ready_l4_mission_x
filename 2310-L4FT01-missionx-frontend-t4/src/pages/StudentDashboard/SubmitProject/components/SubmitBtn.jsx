import styles from '../components/SubmitBtn.module.css'

export default function SubmitBtn(props) {
    const { contentData } = props
    // const {
    //     btnIcon,
    //     btnText,
    // } = props.data;

    return (
        <>
            {contentData.map((item, index) => {
                return (
                    <button className={styles.projSubBtn} key={index}>
                        <img src={item.btnIcon} className={styles.btnIcon} />
                        <p>{item.btnText}</p>

                    </button>
                )
            })}
        </>
    )
}
