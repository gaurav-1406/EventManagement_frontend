
import React, { Component } from "react";
import EventService from "../services/EventService";
import { button } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';

class ListEventComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }

    this.addEvent = this.addEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    EventService.getEvents().then((res) => {
      this.setState({ events: res.data });
    });
  }

  addEvent() {
    const navigate = this.props.navigate;
    navigate('/add-event/_add');
  }

  editEvent(id) {
    const navigate = this.props.navigate;
    navigate(`/add-event/${id}`);
  }

  deleteEvent(id) {
    EventService.deleteEvent(id).then(res => {
      this.setState({ events: this.state.events.filter(event => event.id !== id) });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center"> Events List</h2>
        <div className="row">
          <button className="btn btn-primary btn-sm" onClick={this.addEvent} style={{ marginLeft: "10px" }}>Add Event</button>
          
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
              {this.state.events.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.description}</td>
                  <td>{event.emailId}</td>
                  <td>{event.startdate}</td>
                  <td>{event.enddate}</td>
                  <td>{event.location}</td>
                  <td>{event.status}</td>
                  <td>
                    <button onClick={() => this.editEvent(event.id)} className="btn btn-info">Update</button>
                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEvent(event.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default function ListEventComponentsWrapper(props) {
  const navigate = useNavigate();
  return <ListEventComponents {...props} navigate={navigate} />;
}


