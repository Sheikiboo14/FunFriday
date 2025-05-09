import React from "react";
import "./App.css";
import Card from "./Card";

const employees = [
  "Ilias Ahamed M", "Hariharan Samy", "Krishnan P", "Gnanasekar D", "Vamsi Krishna",
  "Ahamed Asraf M", "Karthick", "Sakthi Swetha G", "HARIHARA PANDI.K", "Sumithra",
  "Shankar G", "Santhosh P", "Risvan M P", "Shathakumar C", "Kesavan",
  "Kabilan", "Sai Sandeep B", "Nivetha P", "Bhadri Narayanan AJ", "Gopikannan V"
  , "Raghavan P","Siva Sankar & Rahul", "Rajesh", "DS Prakash"
];

const funCommittee = ["Dharani", "Jeeva", "Ibrahim", "Santhos", "Yogitha"];
const leaders = ["Arul Prakash", "Narayanan", "Prakash N", "PrabhaKaran"];

const pointsTable = [
  { team: "Team A", firstFF: "00", secondFF: "00", points: "00" },
  { team: "Team B", firstFF: "00", secondFF: "00", points: "00" },
  { team: "Team C", firstFF: "00", secondFF: "00", points: "00" },
  { team: "Team D", firstFF: "00", secondFF: "00", points: "00" }
];


function App() {
  return (
    <div className="app">
      <h1>Fun Friday - May 2025</h1>

      {/* Fun Committee Members (Non-Flip) */}
      <section className="section">
        <h2>Fun Committee Members</h2>
        <div className="card-grid">
          {funCommittee.map((_, index) => (
            <Card
              key={`fun-${index}`}
              image={`/images/fun${index + 1}.jpg`}
              disableFlip={true}
            />
          ))}
        </div>
      </section>

      {/* Team Leaders (Non-Flip) */}
      <section className="section">
        <h2>Team Leaders</h2>
        <div className="card-grid">
          {leaders.map((_, index) => (
            <Card
              key={`leader-${index}`}
              image={`/images/leader${index + 1}.jpg`}
              disableFlip={true}
            />
          ))}
        </div>
      </section>



      {/* Team Members (Flip Cards) */}
      <section className="section">
        <h2>Team Members</h2>
        <h4>Click on the card to reveal the member</h4>
        <div className="card-grid">
          {employees.map((name, index) => (
            <Card
              key={`emp-${index}`}
              number={index + 1}
              name={name.toUpperCase()}
              image={`/images/${index + 1}.jpg`}
              disableFlip={false}
            />
          ))}
        </div>
      </section>


            {/* Points Table */}
            <section className="section">
        <h2>Points Table</h2>
        <table className="points-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>1st FF</th>
              <th>2nd FF</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {pointsTable.map((entry, idx) => (
              <tr key={`pt-${idx}`}>
                <td>{entry.team}</td>
                <td>{entry.firstFF}</td>
                <td>{entry.secondFF}</td>
                <td>{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
