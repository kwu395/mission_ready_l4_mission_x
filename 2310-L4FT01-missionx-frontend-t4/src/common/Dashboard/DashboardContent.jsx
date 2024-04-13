import style from './DashboardContent.module.css'

export default function Dashboard(props) {
  return (
      <div className={style.display}>
        {props.children}
      </div>
  )
}
