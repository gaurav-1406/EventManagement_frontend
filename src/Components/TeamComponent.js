
import React from "react";
import { useNavigate } from "react-router-dom";
import member1 from "../Images/arindom.jpg";
import member2 from "../Images/gaurav.jpg";
import member3 from "../Images/neha.jpeg";
import member4 from "../Images/pratiksha.jpg";
import member5 from "../Images/samiksha.jpg";
import member6 from "../Images/shreya.jpeg";
import member7 from "../Images/stuti.jpeg";

 
function TeamComponent() {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Arindom Bora",
      designation: "Associate Software Engineer",
      photo: member1,
    },
    {
      name: "Gaurav Gupta",
      designation: "Associate Software Engineer",
      photo: member2,
    },
    {
      name: "Neha Singhal",
      designation: "Associate Software Engineer",
      photo: member3,
    },
    {
      name: "Pratiksha Bhise",
      designation: "Associate Software Engineer",
      photo: member4,
    },
    {
      name: "Samiksha Yadav",
      designation: "Associate Software Engineer",
      photo: member5,
    },
    {
      name: "Shreya Khandelwal",
      designation: "Associate Software Engineer",
      photo: member6,
    },
    {
      name: "Stuti Singh",
      designation: "Associate Software Engineer",
      photo: member7,
    },
  ];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="team-component">
      <h2 className="team-title">Team Members</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.name}>
            <img src={member.photo} alt={member.name} />
            <h5>{member.name}</h5>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={handleBack}>
        Home
      </button>
    </div>
  );
}

export default TeamComponent;
