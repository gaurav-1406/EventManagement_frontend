import React, { useEffect, useState } from "react";
import EventService from "../services/EventService";
import { Link, useNavigate } from "react-router-dom";

function UserComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    EventService.getEvents().then((res) => {
      setEvents(res.data);
    });
  }, []);
  

  return (
    <div>
      <h2 className="text-center">Events List</h2>
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
              <th>Registration</th>
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



