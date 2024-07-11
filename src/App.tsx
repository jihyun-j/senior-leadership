import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProfessionalDevelopment from "./pages/professional-development/ProfessionalDevelopment";
import ExecutiveCoaching from "./pages/executive-coaching/ExecutiveCoaching";
import LeadershipCompetencies from "./pages/leadership-competencies/LeadershipCompetencies";
import SubCategories from "./pages/leadership-competencies/SubCategories";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/professional-development"
          element={<ProfessionalDevelopment />}></Route>
        <Route
          path="/leadership-competencies"
          element={<LeadershipCompetencies />}></Route>
        <Route
          path="/executive-coaching"
          element={<ExecutiveCoaching />}></Route>
        <Route
          path="/leadership-competencies/:sub-category"
          element={<SubCategories />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
