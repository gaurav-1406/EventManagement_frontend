import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { button } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import CreateEventComponent from "./Components/CreateEventComponent";
import RegistrationComponent from "./Components/RegistrationComponent";
import AdminComponentWrapper from "./Components/AdminComponent";
import UserComponent from "./Components/UserComponent";
import LoginPage from "./Components/LoginPage";
import EventComponent from "./Components/EventComponent";


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<EventComponent />} />
            <Route exact path="/login" element={<LoginPage />} />
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

