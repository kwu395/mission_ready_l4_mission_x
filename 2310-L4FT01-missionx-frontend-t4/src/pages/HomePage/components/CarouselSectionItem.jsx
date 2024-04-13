import styles from "./CarouselSectionItem.module.css";

const CarouselSectionItem = ({item}) => {
  return (
    <div className={styles.carouselItem}>
        <div></div>
         <img className={styles.carouselImg} src={item.image}/>
    </div>
  )
}
export default CarouselSectionItem