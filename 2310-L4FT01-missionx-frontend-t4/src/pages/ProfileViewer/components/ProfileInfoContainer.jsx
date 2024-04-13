import styles from './ProfileInfoContainer.module.css'
import { useState, useEffect } from 'react';

// This container is displayed on the right of the teacher profile viewer page.

export default function ProfileInfoContainer(props) {
  const [ teacher, setTeacher ] = useState([]);
  const options = { // Options used to format date fetched from database
    day: "numeric",
    month: "short",
    year: "numeric",
  }

  // Fetch teacher data
  useEffect(() => {
    fetch(`http://localhost:4000/teachers/${props.id.id}`) // Dynamic routing using teacher ID
      .then((res) => res.json())
      .then((result) => {
        setTeacher(result[0]);
      });
  }, []);

  return (
    <div className = {styles.container}>
        <div className = {styles.name}>{teacher.name}</div>
        <ul className = {styles.leftList}>
            <li>School</li>    
            <li>Date of Birth</li>    
            <li>Contact No</li>    
            <li>Email Address</li>    
        </ul>
        <ul className = {styles.rightList}>
            <li>{teacher.school}</li>    
            <li>{new Date(teacher.date_of_birth).toLocaleDateString("en-US", options)}</li>  {/*Format Date*/}
            <li>{teacher.contact_number}</li>    
            <li>{teacher.email}</li>
        </ul>
    </div>
  )
}