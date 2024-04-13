import styles from './ProfileImageContainer.module.css'
import { useState, useEffect } from 'react';

// This container is displayed on the left of the teacher profile viewer page.

export default function ProfileImageContainer(props) {
  const [ path, setPath ] = useState('');

  // Fetch the teacher image path
  
  useEffect(() => {
    fetch(`http://localhost:4000/teachers/${props.id.id}`)
      .then((res) => res.json())
      .then((result) => {
        setPath(`${result[0].profile_pic}`) // Set image path 
      }).catch(error => {
      })
  }, []);

  return (
    <div className = {styles.container}>
        <img src={path}/>
        <div className = {styles.profileButtons}>
          <button>EDIT PROFILE</button>
          <button>CHANGE PHOTO</button>
          <button>SETTINGS</button>
        </div>
    </div>
  )
}
