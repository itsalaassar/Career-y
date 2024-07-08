import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { Roadmaps } from "./pages/Roadmaps";
import ProfilePage from "./Components/UserProfile";
import JobList from "./Components/JobList";
import AddSkillsPage from "./Components/AddSkillsPage";
import CareerGuidancePage from "./Components/CareerGuidancePage";
import QuizPage from "./Components/QuizPage";
import SkillQuizPage from "./Components/SkillQuizPage";
import TrackAssessmentPage from "./Components/TrackAssessmentPage";
import JobPage from "./Components/JobPage";
import TrackCoursePage from "./Components/TrackCoursePage";
import QuizGradePage from "./Components/QuizGradePage";
import { Roadmap } from "./pages/Roadmaps/Roadmap";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./pages/SignUp";
import Admin2 from "./Components/Admin/Admin";
import AddQuiz from "./Components/Admin/AddQuiz";
import AddQuestions from "./Components/Admin/AddQuestions";
import GetAllUsers from "./Components/Admin/GetAllUsers";
import DeleteUsers from "./Components/Admin/DeleteUsers";
import AddCourse from "./Components/Admin/AddCourse";
import TrackQuizGradePage from "./Components/TrackQuizGradePage";
import FrameworkSelectionPage from "./Components/FrameworkSelectionPage";
import DeleteCourse from "./Components/Admin/DeleteCourse";
import UpdateResource from "./Components/Admin/UpdateResource";
import AddJobOffer from "./Components/Admin/AddJobOffer";
import AddSkillToRoadmap from "./Components/Admin/AddSkillToRoadmap";
import DeleteSkillFromRoadmap from "./Components/Admin/DeleteSkillFromRoadmap";
import DeleteJobOffer from "./Components/Admin/DeleteJobOffer";
import UpdateJobOffer from "./Components/Admin/UpdateJobOffer";
import UpdateCourse from "./Components/Admin/UpdateCourse";
import ApproveCourse from "./Components/Admin/ApproveCourse";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/roadmaps/:id" element={<Roadmap />} />
        <Route path="/UserProfile" element={<ProfilePage />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/add-skills" element={<AddSkillsPage />} />
        <Route path="/career-guidance" element={<CareerGuidancePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/:skill" element={<SkillQuizPage />} />

        <Route path="/track/:id/assessment" element={<TrackAssessmentPage />} />
        <Route path="/track/:id/skill/:skillId/assessment" element={<TrackAssessmentPage />} />
        <Route path="/track/:jobId/framework" element={<FrameworkSelectionPage />} />
        <Route path="/track/:id/grade" element={<TrackQuizGradePage />} />
        {/* t8eer */}
        {/* <Route path="/track/:id/skill/:skillId/grade" element={<TrackQuizGradePage />} /> */}

        <Route path="/job" element={<JobPage />} />
        <Route path="/track/:id/course" element={<TrackCoursePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/delete-users" element={<DeleteUsers />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/add-job-offer" element={<AddJobOffer />} />
        <Route path="/quiz/:skill/grade" element={<QuizGradePage />} />
        <Route path="/track/:id/grade" element={<TrackQuizGradePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/admin" element={<Admin2 />} />
        <Route path="/add-quiz" element={<AddQuiz />} />
        <Route path="/add-questions" element={<AddQuestions />} />
        <Route path="/get-all-users" element={<GetAllUsers />} />
        <Route path="/delete-users" element={<DeleteUsers />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/delete-course" element={<DeleteCourse />} />
        <Route path="/update-resourse" element={<UpdateResource />} />
        <Route path="/add-job-offer" element={<AddJobOffer />} />
        <Route path="/add-skill-to-roadmap" element={<AddSkillToRoadmap />} />
        <Route
          path="/delete-skill-from-roadmap"
          element={<DeleteSkillFromRoadmap />}
        />
        <Route path="/delete-job-offer" element={<DeleteJobOffer />} />
        <Route path="/update-job-offer" element={<UpdateJobOffer />} />
        <Route path="update-course" element={<UpdateCourse />} />
        <Route path="approve-course" element={<ApproveCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
