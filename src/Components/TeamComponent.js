
import React from "react";
import { useNavigate } from "react-router-dom";
import member1 from "/Users/gauravgupta/Desktop/React/frontend/src/Components/Team/arindom.jpg";
import member2 from "/Users/gauravgupta/Desktop/React/frontend/src/Components/Team/gaurav.jpg";
import member3 from "/Users/gauravgupta/Desktop/React/frontend/src/Components/Team/neha.jpeg";
import member4 from "/Users/gauravgupta/Desktop/React/frontend/src/Components/Team/pratiksha.jpg";
import member5 from "/Users/gauravgupta/Desktop/React/frontend/src/Components/Team/samiksha.jpg";
import member6 from "/Users/gauravgupta/Desktop/React/frontend/src/Components/Team/shreya.jpeg";
import member7 from "/Users/gauravgupta/Desktop/React/frontend/src/Components/Team/stuti.jpeg";

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
