import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProfessionalDevelopment from "./pages/professional-development/ProfessionalDevelopment";
import ExecutiveCoaching from "./pages/executive-coaching/ExecutiveCoaching";
import LeadershipCompetencies from "./pages/leadership-competencies/LeadershipCompetencies";
import SubjectsPage from "./pages/leadership-competencies/SubjectsPage";
import Login from "./pages/Login";
import PrivateRoutes from "./util/PrivateRoutes";
import LearningSubject from "./pages/professional-development/LearningSubject";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/professional-development"
            element={<ProfessionalDevelopment />}
          />
          <Route
            path="/leadership-competencies"
            element={<LeadershipCompetencies />}
          />
          <Route path="/executive-coaching" element={<ExecutiveCoaching />} />
          <Route
            path="/professional-development/:categoryPath"
            element={<SubjectsPage />}
          />

          <Route
            path="/professional-development/:categoryPath/:subjectPath"
            element={<LearningSubject />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
