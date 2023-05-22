import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { button } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ListEventComponents from "./Components/ListEventComponents";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import CreateEventComponent from "./Components/CreateEventComponent";
// import UpdateEventComponent from "./Components/UpdateEventComponent";

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<ListEventComponents />}></Route>
              <Route path="/events" element={<ListEventComponents />}></Route>
              <Route path="/add-event/:id" element={<CreateEventComponent />}></Route>
              {/* <Route path="/update-event/:id" element={<UpdateEventComponent />}></Route> */}
              {/* <ListEventComponents /> */}
            </Routes>
          </div>
          <FooterComponent />
        
      </Router>
    </div>
  );
}

export default App;
