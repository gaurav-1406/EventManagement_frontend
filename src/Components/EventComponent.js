
import React, { useEffect, useState } from "react";
import EventService from "../services/EventService";
import { useNavigate } from "react-router-dom";

function EventComponent() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EventService.getEvents().then((res) => {
      setEvents(res.data);
    });
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleTeam = () => {
    navigate("/team");
  };

  return (
    <div>
      <div className="login-button-container">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <button className="team-button" onClick={handleTeam}>
          Team
        </button>
      </div>
      <div className="body">
        <h2 className="text-center">Events List</h2>
        <p>
          Welcome to our event management system. Here you can find a list of events and their details. Login to register
          for an event and join the excitement!
        </p>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Email Id</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.emailId}</td>
                <td>{event.startdate}</td>
                <td>{event.enddate}</td>
                <td>{event.location}</td>
                <td>{event.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventComponent;

