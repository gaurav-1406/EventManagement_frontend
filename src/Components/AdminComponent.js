import React, { useEffect, useState } from "react";
import EventService from "../services/EventService";
import { Link, useNavigate } from "react-router-dom";


function AdminComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    EventService.getEvents().then((res) => {
      setEvents(res.data);
    });
  }, []);

  const navigate = useNavigate();

  const addEvent = () => {
    navigate("/admin/_add");
  };

  const editEvent = (id) => {
    navigate(`/admin/${id}`);
  };

  const deleteEvent = (id) => {
    EventService.deleteEvent(id).then((res) => {
      setEvents(events.filter((event) => event.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center">Events List</h2>
      <div className="row">
        <button
          className="btn btn-primary btn-sm"
          onClick={addEvent}
       
        >
          Add Event
        </button>
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
              <th>Actions</th>
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
                  <button
                    onClick={() => editEvent(event.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteEvent(event.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminComponentWrapper() {
  const navigate = useNavigate();
  return <AdminComponent navigate={navigate} />;
}
