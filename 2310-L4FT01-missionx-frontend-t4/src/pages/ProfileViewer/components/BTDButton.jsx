import styles from "./BTDButton.module.css"
import { useNavigate } from 'react-router-dom'

export default function BTDButton() {
  const navigate = useNavigate()
  return (
    <button className = {styles.BTDButton} onClick={() => navigate('/teacher-dashboard/help-requests')}>BACK TO DASHBOARD</button>
  )
}
