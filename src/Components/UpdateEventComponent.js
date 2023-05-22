import React, { Component } from 'react';
import EventService from '../services/EventService';
import { useParams } from 'react-router-dom';



class UpdateEventComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: this.props.match.Params.id,
          eventName: " ",
          eventDescription: " ",
          emailId: " ",
          startDate: " ",
          endDate: " ",
          location: " ",
        };
    
        this.changeEventNameHandler = this.changeEventNameHandler.bind(this);
        this.changeEventDescriptionHandler = this.changeEventDescriptionHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeStartDateHandler=this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler=this.changeEndDateHandler.bind(this);
        this.changeLocationHandler=this.changeLocationHandler.bind(this);
        this.updateEvent=this.updateEvent.bind(this);
      }

      componentDidMount() {
        EventService.getEventById(this.state.id).then((res) => {
          let event = res.data;
          this.setState({eventName: event.eventName,
            eventDescription: event.eventDescription,
            emailId: event.emailId,
            startDate: event.startDate,
            endDate: event.endDate,
            location: event.location,

          });
        });
      }
    
      updateEvent = (e) => {
        e.preventDefault();
        let event = {eventName: this.state.eventName, eventDescription: this.state.eventDescription, emailId: this.state.emailId, startDate: this.state.startDate, endDate: this.state.endDate, location: this.state.location };
        console.log('event=>' + JSON.stringify(event));
        EventService.updateEvent(event, this.state.id).then(res => {
          this.props.history.push('/events');
        });
    
      }
    
      changeEventNameHandler = (events) => {
        this.setState({ eventName: events.target.value });
      };
    
       changeEventDescriptionHandler =(events) => {
           this.setState({eventDescription:events.target.value});
       };
    
       changeEmailIdHandler =(events) => {
        this.setState({emailId:events.target.value});
        };
    
    changeStartDateHandler =(events) => {
        this.setState({startDate:events.target.value});
    };
    
    changeEndDateHandler =(events) => {
        this.setState({endDate:events.target.value});
    };
    
    changeLocationHandler =(events) => {
        this.setState({location:events.target.value});
    };
    
    cancel(){
        this.props.history.push('/events');
    }
    
    
      render() {
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h3 className="text-center">Update Event</h3>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label> Event Name: </label>
                        <input
                          placeholder="Event Name"
                          name="eventName"
                          className="form-control"
                          value={this.state.eventName}
                          onChange={this.changeEventNameHandler}
                        />
                      </div>
    
                      <div className="form-group">
                        <label> Event Description: </label>
                        <input
                          placeholder="Event Description"
                          name="eventDescription"
                          className="form-control"
                          value={this.state.eventDescription}
                          onChange={this.changeEventDescriptionHandler}
                        />
                      </div>
    
                      <div className="form-group">
                        <label> Email Id: </label>
                        <input
                          placeholder="Email Id"
                          name="emailId"
                          className="form-control"
                          value={this.state.emailId}
                          onChange={this.changeEmailIdHandler}
                        />
                      </div>
    
                      <div className="form-group">
                        <label> Start Date </label>
                        <input
                          placeholder="Start Date"
                          name="startDate"
                          className="form-control"
                          value={this.state.startDate}
                          onChange={this.changeStartDateHandler}
                        />
                      </div>
    
                      <div className="form-group">
                        <label> End Date: </label>
                        <input
                          placeholder="End Date"
                          name="endDate"
                          className="form-control"
                          value={this.state.endDate}
                          onChange={this.changeEndDateHandler}
                        />
                      </div>
    
                      <div className="form-group">
                        <label> Location: </label>
                        <input
                          placeholder="Location"
                          name="location"
                          className="form-control"
                          value={this.state.location}
                          onChange={this.changeLocationHandler}
                        />
                      </div>
    
                        <button className="btn btn-success" onClick={this.updateEvent}>Save</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }


export default UpdateEventComponent;