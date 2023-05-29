import React, { useEffect, useState } from "react";
import EventService from "../services/EventService";
import { Link, useNavigate } from "react-router-dom";

function UserComponent() {
  const [events, setEvents] = useState([]);
  const [sortedEvents, setSortedEvents] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    EventService.getEvents().then((res) => {
      setEvents(res.data);
      setSortedEvents(res.data);
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    if (location === "") {
      setSortedEvents(events);
    } else {
      const sorted = events.filter((event) => event.location === location);
      setSortedEvents(sorted);
    }
  };

  return (
    <div>
      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h2 className="text-center">Events List</h2>
      <div className="row">
        <div className="col-md-2 text-right">
          <select
            className="form-control form-control-md"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">All Locations</option>
            {Array.from(new Set(events.map((event) => event.location))).map(
              (location) => (
                <option value={location} key={location}>
                  {location}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <div className="row mt-4">
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
              <th>Registration</th>
            </tr>
          </thead>
          <tbody>
            {sortedEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.emailId}</td>
                <td>{event.startdate}</td>
                <td>{event.enddate}</td>
                <td>{event.location}</td>
                <td>{event.status}</td>
                <td>
                  {event.status === "Created" || event.status === "Open" ? (
                    <Link
                      to={`/register/${event.id}`}
                      className="btn btn-primary"
                    >
                      Register
                    </Link>
                  ) : (
                    <button className="btn btn-primary" disabled>
                      Register
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserComponent;
