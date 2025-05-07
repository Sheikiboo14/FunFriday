import React from "react";
import "./App.css";
import Card from "./card"; // keep lowercase if the file is named 'card.js'

const leaders = [
  "Leader 1",
  "Leader 2",
  "Leader 3",
  "Leader 4"
];

const employees = [
  "Gopikannan V", "Gnanasekar D", "Sai Sandeep B", "Ilias Ahamed M",
  "Shankar G", "Ahamed Asraf M", "Raghavan P", "HARIHARA PANDI.K",
  "Krishnan P", "Risvan M P", "Kesavan", "Shathakumar C", "Vamsi Krishna",
  "Santhosh P", "Nivetha P", "Sakthi Swetha G", "Bhadri Narayanan AJ",
  "DS Prakash", "Karthick", "Rajesh", "Sumithra", "Siva Sankar & Rahul",
  "Kabilan", "Hariharan Samy"
];

function App() {
  return (
    <div className="app">
      <h1>Fun Friday</h1>

      {/* Team Leaders Section */}
      <h2>Team Leaders</h2>
      <div className="card-grid">
        {leaders.map((name, index) => (
          <Card
            key={`leader-${index}`}
            number={`L${index + 1}`}
            name={name}
            image={`/images/leader${index + 1}.jpg`} // Add these images to public/images
          />
        ))}
      </div>

      {/* Team Members Section */}
      <h2>Team Members</h2>
      <div className="card-grid">
        {employees.map((name, index) => (
          <Card
            key={`employee-${index}`}
            number={index + 1}
            name={name}
            image={`/images/${index + 1}.jpg`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
