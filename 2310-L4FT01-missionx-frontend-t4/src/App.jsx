import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage/Home";

//Student Dashboard
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import SubmitProject from "./pages/StudentDashboard/SubmitProject/SubmitProject";
import LearningObjectives from "./pages/StudentDashboard/components/LearningObjectives/LearningObjectives";
import Instructions from "./pages/StudentDashboard/components/Instructions/Instructions";
import VideoTutorial from "./pages/StudentDashboard/components/VideoTutorial/VideoTutorial";
import MakeProject from "./pages/StudentDashboard/components/MakeProject/MakeProject";

//TeacherDashboard
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import ProjectSubmissions from "./pages/TeacherDashboard/ProjectSubmissions/ProjectSubmissions";
import TeacherProfileViewer from "./pages/ProfileViewer/TeacherProfileViewer.jsx";
import HelpRequests from "./pages/TeacherDashboard/HelpRequests/HelpRequests.jsx";

function App() {
  return (
    <>
      {/* Start your Mission X here!🕺 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route
            path="learning-objectives"
            // /:project_id
            element={<LearningObjectives />}
          />
          <Route path="instructions" element={<Instructions />} />
          <Route path="video-tutorial" element={<VideoTutorial />} />
          <Route path="make-project" element={<MakeProject />} />
          <Route path="submit-project" element={<SubmitProject />} />
        </Route>
         <Route path='teacher-profile/:id' element={<TeacherProfileViewer />} />
        <Route path='/teacher-dashboard' element={<TeacherDashboard />}>
          {/* <Route path='progress-tracker' element={<ProgressTracker />} /> */}

          <Route path="help-requests" element={<HelpRequests />} />
          <Route path="project-submissions" element={<ProjectSubmissions />} />
          {/* <Route path='project-library' element={<ProjectLibrary />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
