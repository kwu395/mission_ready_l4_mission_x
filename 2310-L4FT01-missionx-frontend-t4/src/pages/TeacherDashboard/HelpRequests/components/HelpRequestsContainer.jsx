import style from "./HelpRequestsContainer.module.css"
import { useEffect, useState } from "react";
import { MdOutlineCheck } from "react-icons/md";

// This is the main Help Requests component. Includes Mark As Done button, checkbox, student image, comment, date and time.

export default function HelpRequestsContainer(props) {
  const [ requests, setRequests ] = useState([]);
  const [ selectedRequests, setSelectedRequests ] = useState([]);

  // Options used to format date fetched from database

  const dateOptions = { 
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }

  const timeOptions = { 
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }

  // Fetch Help Requests data

  useEffect(() => {
    fetch("http://localhost:4000/help-requests")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setRequests(result);
      })
  }, []);

  // onChange checkboxes, used to get request ID and done value from selected requests.
  const handleCheckboxes = (event) => {
    setSelectedRequests((prevState) => {
      return {...prevState, [event.target.id]: event.target.checked 
    }});  
  };

  function handleMarkAsDone (event) {
    event.preventDefault();
    fetch(`http://localhost:4000/help-requests/done`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({requests: selectedRequests}), // Send selected request ID and done values to backend
    })
    .then((res) => {
      if (res.status === 200) {
        console.log("Success 200")
      } else if (res.status === 500) {
        console.log("Failed 500")
      } else {
        console.log("Failed")
      }
    })
    .catch((error) => {
      console.error(error);
    })
    location.reload(); // Refresh the page after updating database
  }
  
  // formatName converts full name to first name in upper cases.

  const formatName = (fullName) => {
    let firstName = fullName.split(' ');
    return firstName[0].toUpperCase();
  }

  // returnPronoun returns "his" or "her" depending on student's gender. 

  const returnPronoun = (gender) => {
    if (gender == "male") {
      return "his";
    } else if (gender == "female") {
      return "her";
    }
  }

  return (
    <>
    <div>
    <div className = {style.markContainer}>
        <div className = {style.markIcon}><MdOutlineCheck/></div> {/* Mark As Done icon */}
        <span className = {style.mark} onClick={handleMarkAsDone}>MARK AS DONE</span> {/* Mark As Done Component. See handleMarkAsDone function */}
    </div>
      {requests.map((request, index) => {
        if (!request.done) {
        return (
        <div key = {index} className = {style.container}>
          <input type="checkbox" className = {style.checkbox}  id={request.request_id} onChange={handleCheckboxes}></input> {/* Checkbox Component. See handleCheckboxes function */}
          <div className = {style.content}>
            <img src={`${request.profile_pic}`}/> {/* Image Component */}
            <p className = {style.comment}>{formatName(request.name)} needs help with {returnPronoun(request.gender)} project.</p> {/* Text Component. See formatName and returnPronoun function */}
            <div>
              <p className = {style.date}>{new Date(request.date_created).toLocaleDateString("en-US", dateOptions)}</p> {/* Date and Time. See Options */}
              <p className = {style.time}>{new Date(request.date_created).toLocaleTimeString("en-US", timeOptions)}</p>
            </div>
          </div>
        </div>
          );
        }
        })}
      </div>
    </>
  )
}
