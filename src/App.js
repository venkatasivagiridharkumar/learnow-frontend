import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import HomeLeft from "./components/HomeLeft";
import HomeRight from "./components/HomeRight";
import Help from "./components/Help";
import NotFound from "./components/NotFound";
import Community from "./components/Community";
import { Routes, Route} from "react-router-dom";
import PersonalDetails from "./components/PersonalDetails";
import MyJourney from "./components/MyJourney";
import QuestionBanks from "./components/QuestionBanks";
import JobsBoard from "./components/JobsBoard";
import MentorDetails from "./components/MentorDetails";
import Announcements from "./components/Announcements";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import EditPersonalDetails from "./components/EditPersonalDetails";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsAuthenticated(true);
    }
   }, []);


  const handleLogin = (username) => {
    localStorage.setItem("username",username);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Header onLogout={handleLogout} />
      <div className="home-container">
        <HomeLeft onLogout={handleLogout} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomeRight />} />
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/my-journey" element={<MyJourney />} />
            <Route path="/question-banks" element={<QuestionBanks />} />
            <Route path="/jobs-board" element={<JobsBoard />} />
            <Route path="/mentor-details" element={<MentorDetails />} />
            <Route path="/help" element={<Help />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/communities" element={<Community />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/edit-details" element={<EditPersonalDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
