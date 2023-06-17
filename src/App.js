import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import CreateEventComponent from "./Components/CreateEventComponent";
import RegistrationComponent from "./Components/RegistrationComponent";
import AdminComponentWrapper from "./Components/AdminComponent";
import UserComponent from "./Components/UserComponent";
import LoginPage from "./Components/LoginPage";
import EventComponent from "./Components/EventComponent";
import TeamComponent from "./Components/TeamComponent";


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<EventComponent />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path ="/team" element={<TeamComponent />} />
            <Route path ="/user" element={<UserComponent />} />
            <Route path="/register/:id" element={<RegistrationComponent />} />
            <Route path="/admin" element={<AdminComponentWrapper />} />
            <Route path="/admin/:id" element={<CreateEventComponent />}></Route>
            
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

