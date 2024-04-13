import style from './Dashboard.module.css'

export default function Dashboard(props) {
  return (
    <div className={style.layout}>
      <div className={style.contentContainer}>
        {props.children}
      </div>
    </div>
  )
}
