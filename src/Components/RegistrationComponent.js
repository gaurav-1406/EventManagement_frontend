
import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import EventService from "../services/EventService";

const RegistrationComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const participant = {
      firstName,
      lastName,
      organizationName: organization,
      designation,
      emailAddress: email,
    };
  
    EventService.registerEvent(id, participant)
      .then((response) => {
        console.log(response.data); 
        setFirstName("");
        setLastName("");
        setOrganization("");
        setDesignation("");
        setEmail("");
        navigate("/user");
      })
      .catch((error) => {
        console.error(error); 
      });
  };

  

  return (
    <div>
      <h2 className="text-center">Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Participant First Name:</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Participant Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Organization/Company Name:</label>
          <input
            type="text"
            className="form-control"
            value={organization}
            onChange={handleOrganizationChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Designation:</label>
          <input
            type="text"
            className="form-control"
            value={designation}
            onChange={handleDesignationChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationComponent;

