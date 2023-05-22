
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EventService from "../services/EventService";

const CreateEventComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setEventName] = useState("");
  const [description, setEventDescription] = useState("");
  const [emailId, setEmailId] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (id === "_add") {
      return;
    } else {
      EventService.getEventById(id).then((res) => {
        let event = res.data;
        setEventName(event.name);
        setEventDescription(event.description);
        setEmailId(event.emailId);
        setStartDate(event.startdate);
        setEndDate(event.enddate);
        setLocation(event.location);
        setStatus(event.status);
      });
    }
  }, [id]);

  const saveOrUpdateEvent = (e) => {
    e.preventDefault();
    let event = {
      name,
      description,
      emailId,
      startdate,
      enddate,
      location,
      status,
    };
    console.log("event=>" + JSON.stringify(event));

    if (id === "_add") {
      EventService.createEvent(event).then((res) => {
        navigate("/events");
      });
    } else {
      EventService.updateEvent(event, id).then((res) => {
        navigate("/events");
      });
    }
  };

  const changeEventNameHandler = (event) => {
    setEventName(event.target.value);
  };

  const changeEventDescriptionHandler = (event) => {
    setEventDescription(event.target.value);
  };

  const changeEmailIdHandler = (event) => {
    setEmailId(event.target.value);
  };

  const changeStartDateHandler = (event) => {
    setStartDate(event.target.value);
  };

  const changeEndDateHandler = (event) => {
    setEndDate(event.target.value);
  };

  const changeLocationHandler = (event) => {
    setLocation(event.target.value);
  };

  const changeStatusHandler = (event) => {
    setStatus(event.target.value);
  };

  const cancel = () => {
    navigate("/events");
  };

  const getTitle = () => {
    if (id === "_add") {
      return <h3 className="text-center">Add Event</h3>;
    } else {
      return <h3 className="text-center">Update Event</h3>;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Event Name: </label>
                  <input
                    placeholder="Event Name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={changeEventNameHandler}
                  />
                </div>

                <div className="form-group">
                  <label> Event Description: </label>

                  <input
                    placeholder="Event Description"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={changeEventDescriptionHandler}
                  />
                </div>

                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={changeEmailIdHandler}
                  />
                </div>

                <div className="form-group">
                  <label> Start Date </label>
                  <input
                    placeholder="Start Date"
                    name="startdate"
                    className="form-control"
                    value={startdate}
                    onChange={changeStartDateHandler}
                  />
                </div>

                <div className="form-group">
                  <label> End Date: </label>
                  <input
                    placeholder="End Date"
                    name="enddate"
                    className="form-control"
                    value={enddate}
                    onChange={changeEndDateHandler}
                  />
                </div>

                <div className="form-group">
                  <label> Location: </label>
                  <input
                    placeholder="Location"
                    name="location"
                    className="form-control"
                    value={location}
                    onChange={changeLocationHandler}
                  />
                </div>

                <div className="form-group">
                  <label> Status: </label>
                  <input
                    placeholder="Status"
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={changeStatusHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={saveOrUpdateEvent}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventComponent;
