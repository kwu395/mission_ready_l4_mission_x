import styles from "./Modal.module.css";
import studentImg from "../../../assets/LoginSignup/students.png";
import teacherImg from "../../../assets/LoginSignup/teachers.png";
import closeIcon from "../../../assets/LoginSignup/esc.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ModalLogin = ({ onClose }) => {
  const navigate = useNavigate();
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [nameSignUp, setNameSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState("");
  const [msgToRenderStudentLogin, setMsgToRenderStudentLogin] = useState("");
  const [msgToRenderTeacherLogin, setMsgToRenderTeacherLogin] = useState("");
  const [msgToRenderStudentSignup, setMsgToRenderStudentSignup] = useState("");
  const [msgToRenderTeacherSignup, setMsgToRenderTeacherSignup] = useState("");
  const [msgToRenderNotMatchStudent, setMsgToRenderNotMatchStudent] = useState(false);
  const [msgToRenderNotMatchTeacher, setMsgToRenderNotMatchTeacher] = useState(false);


  // Handle login form submission logic here

  // STUDENT LOGIN
  const handleStudentLoginSubmit = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:4000/api/authentication/student_login", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin
      })
    })
    .then((res) => {
      if (res.status === 200) {
        console.log('success')
        const messageSuccess = <span>Login successful</span>
        setMsgToRenderStudentLogin(messageSuccess)
        navigate('/student-dashboard')
      } else if (res.status === 404) {
        console.log('failed')
        const messageFailed = <span>Email or password wrong</span>
        setMsgToRenderStudentLogin(messageFailed)
      }
    })
    
  };

  // TEACHER LOGIN
  const handleTeacherLoginSubmit = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:4000/api/authentication/teacher_login", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin
      })
    })
    .then((res) => {
      if (res.status === 200) {
        console.log('success')
        const messageSuccess = <span>Login successful</span>
        setMsgToRenderTeacherLogin(messageSuccess)
        navigate('/teacher-dashboard')
      } else if (res.status === 404) {
        console.log('failed')
        const messageFailed = <span>Email or Password wrong</span>
        setMsgToRenderTeacherLogin(messageFailed)
      }
    })
  };

// Handle signup form submission logic here

  // STUDENT SIGN UP
  const handleStudentSignupSubmit = (event) => {
    event.preventDefault();
    if (passwordSignUp !== confirmPasswordSignUp) {
      console.log("NOT MATCH")
      // const messageNotMatchStudent = <span>Email or Password wrong</span>
      setMsgToRenderNotMatchStudent(true);
      setTimeout(() => {
        setMsgToRenderNotMatchStudent(false)
      }, 500);
      
    } else {
      fetch("http://localhost:4000/api/authentication/signup", {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'student',
          name: nameSignUp,
          email: emailSignUp,
          password: passwordSignUp
        })
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('success')
          const messageSuccess = <span>Sign up successful</span>
          setMsgToRenderStudentSignup(messageSuccess)
        } else if (res.status === 400) {
          console.log('failed')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    }
  };

  // TEACHER SIGN UP
  const handleTeacherSignupSubmit = (event) => {
     event.preventDefault();
    if (passwordSignUp !== confirmPasswordSignUp) {
      // const messageNotMatchTeacher = <span>Passwords do not match</span>
      setMsgToRenderNotMatchTeacher(true);
      setTimeout(() => {
        setMsgToRenderNotMatchTeacher(false)
      }, 500);
    } else {
      fetch("http://localhost:4000/api/authentication/signup", {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'teacher',
          name: nameSignUp,
          email: emailSignUp,
          password: passwordSignUp
        })
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('success')
          const messageSuccess = <span>Sign up successful</span>
          setMsgToRenderTeacherSignup(messageSuccess)
        } else if (res.status === 400) {
          console.log('failed')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    }
  }

  const handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "email") {
      setEmailLogin(event.target.value);
    } else if (event.target.name === "password") {
      setPasswordLogin(event.target.value);
    } else if (event.target.name === "name") {
      setNameSignUp(event.target.value);
    } else if (event.target.name === "emailSignup") {
      setEmailSignUp(event.target.value);
    } else if (event.target.name === "passwordSignup") {
      setPasswordSignUp(event.target.value);
    } else if (event.target.name === "confirmPassword") {
      setConfirmPasswordSignUp(event.target.value);
    }
    else {
      console.log("Error");
    }
  };

  const closeModal = () => {
    setIsLogInOpen(false);
    onClose && onClose();
  };

  return (
    <div className={styles.backdrop}>
      <dialog open className={styles.dialogEl}>
        <div className={styles.dialogMenu}>
          {/* STUDENT SECTION */}
          <div className={styles.dialogStudent}>
            <img src={studentImg} alt="student" width="60%" />
            <h1>Students</h1>

            {isLogInOpen ? (
              <>
                {/* SIGN UP LABEL BUTTONS */}

                <div className={styles.labelsContainer}>
                  <button
                    className={styles.labelLoginSignUp}
                    onClick={() => setIsLogInOpen(false)}
                  >
                    LOG IN
                  </button>
                  <button
                    className={styles.labelSignUpSignUp}
                    onClick={() => setIsLogInOpen(true)}
                  >
                    SIGN UP
                  </button>
                </div>

                {/* STUDENT SIGN UP */}

                <form
                  className={styles.dialogForm}
                  onSubmit={handleStudentSignupSubmit}
                >
                  <input type="text" name="name" onChange={handleChange} placeholder="Full Name" />
                  <input type="email" name="emailSignup" onChange={handleChange} placeholder="Email Address" />
                  <input type="password" name="passwordSignup" onChange={handleChange} placeholder="Password" className={`${msgToRenderNotMatchStudent ? styles.inputError : '' }`}/>
                  <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" className={`${msgToRenderNotMatchStudent ? styles.inputError : '' }`}/>
                  {msgToRenderNotMatchStudent}
                  {msgToRenderStudentSignup}
                             
                  <button className={styles.signUpBtn} type="submit">
                    SIGN UP
                  </button>
                </form>
              </>
            ) : (
              <>
                {/* LOGIN LABEL BUTTONS */}

                <div className={styles.labelsContainer}>
                  <button
                    className={styles.labelLoginLogin}
                    onClick={() => setIsLogInOpen(false)}
                  >
                    LOG IN
                  </button>
                  <button
                    className={styles.labelSignUpLogin}
                    onClick={() => setIsLogInOpen(true)}
                  >
                    SIGN UP
                  </button>
                </div>

                {/* STUDENT LOGIN */}

                <form
                  className={styles.dialogForm}

                >
                  <input type="email" name="email" onChange={handleChange} placeholder="Email Address" />
                  <input type="password" name="password" onChange={handleChange} placeholder="Password" />
                
                  {msgToRenderStudentLogin}

                  <button className={styles.loginBtn} name="Login" type="submit" onClick={handleStudentLoginSubmit}>
                    LOG IN
                  </button>
                </form>
              </>
            )}
          </div>

          {/* TEACHER SECTION */}
          <div className={styles.dialogTeacher}>
            {isLogInOpen ? (
              <>
                <img
                  src={closeIcon}
                  alt="close icon"
                  width="8%"
                  onClick={closeModal}
                  className={styles.closeIconSignUp}
                />
                <img
                  src={teacherImg}
                  alt="teacher"
                  width="60%"
                  className={styles.teacherImgSignUp}
                />

                <h1>Teachers</h1>

                {/* SIGN UP LABEL BUTTONS */}

                <div className={styles.labelsContainer}>
                  <button
                    className={styles.labelLoginSignUp}
                    onClick={() => setIsLogInOpen(false)}
                  >
                    LOG IN
                  </button>
                  <button
                    className={styles.labelSignUpSignUp}
                    onClick={() => setIsLogInOpen(true)}
                  >
                    SIGN UP
                  </button>
                </div>

                {/* TEACHER SIGN UP */}

                <form
                  className={styles.dialogForm}
                  onSubmit={handleTeacherSignupSubmit}
                >
                  <input type="text" name="name" onChange={handleChange} placeholder="Full Name" />
                  <input type="email" name="emailSignup" onChange={handleChange} placeholder="Email Address" />
                  <input type="password" name="passwordSignup" onChange={handleChange} placeholder="Password" className={`${msgToRenderNotMatchTeacher ? styles.inputError : '' }`}/>
                  <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" className={`${msgToRenderNotMatchTeacher ? styles.inputError : '' }`}/>
                  {msgToRenderNotMatchTeacher}
                  {msgToRenderTeacherSignup}
                  <button className={styles.signUpBtn} type="submit">
                    SIGN UP
                  </button>
                </form>
              </>
            ) : (
              <>
                <img
                  src={closeIcon}
                  alt="close icon"
                  width="8%"
                  onClick={closeModal}
                  className={styles.closeIconLogin}
                />
                <img
                  src={teacherImg}
                  alt="teacher"
                  width="60%"
                  className={styles.teacherImgLogin}
                />
                <h1>Teachers</h1>
                {/* LOGIN LABEL BUTTONS */}

                <div className={styles.labelsContainer}>
                  <button
                    className={styles.labelLoginLogin}
                    onClick={() => setIsLogInOpen(false)}
                  >
                    LOG IN
                  </button>
                  <button
                    className={styles.labelSignUpLogin}
                    onClick={() => setIsLogInOpen(true)}
                  >
                    SIGN UP
                  </button>
                </div>

                {/* TEACHER LOGIN */}

                <form
                  className={styles.dialogForm}
                  onSubmit={handleTeacherLoginSubmit}
                >
                  <input type="email" name="email" onChange={handleChange} placeholder="Email Address" />
                  <input type="password" name="password" onChange={handleChange} placeholder="Password" />
                  {msgToRenderTeacherLogin}
                  <button className={styles.loginBtn} type="submit">
                    LOG IN
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalLogin;
