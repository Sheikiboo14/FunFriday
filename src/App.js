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
const redDragon = ["Arul Prakash", "HARIHARA PANDI.K","Ilias Ahamed M","Krishnan P", "Karthick", "Vamsi Krishna"];

const palayaSoru = ["Narayanan", "Ahamed Asraf M","Nivetha P", "Raghavan P", "Rajesh","Santhosh P"];

const aaruPadai = ["PrabhaKaran","Bhadri Narayanan AJ", "Kesavan", "Risvan M P", "Sai Sandeep B","Shankar G"];

const thalaPolaVaruma = ["Prakash N", "Gnanasekar D","Hariharan Samy", "Kabilan", "DS Prakash","Sakthi Swetha G"];


const teams = [
  {
    name: "Red Dragon",
    members: ["Alice", "Bob", "Charlie", "Daisy"]
  },
  {
    name: "Blue Phoenix",
    members: ["Eve", "Frank", "Grace", "Heidi"]
  }
];


const pointsTable = [
  { place : "1",team: "Red Dragon", firstFF: "16", secondFF: "00", points: "16" },
  { place : "2",team: "Thala Pola Varuma", firstFF: "15", secondFF: "00", points: "15" },
  { place : "3",team: "Palaya Soru", firstFF: "14", secondFF: "00", points: "14" },
  { place : "4",team: "Aaru Padai", firstFF: "13", secondFF: "00", points: "13" }
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
      {/* <section className="section">
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
      </section> */}

            {/* Team Red Dragon (Non-Flip) */}
            <section className="section">
        <h2>Team Red Dragon</h2>
        <div className="card-grid">
          {redDragon.map((_, index) => (
            <Card
              key={`redDragon-${index}`}
              image={`/images/redDragon${index + 1}.jpg`}
              disableFlip={true}
            />
          ))}
        </div>
      </section>

                  {/* Team Thala Pola Varuma (Non-Flip) */}
                  <section className="section">
        <h2>Team Thala Pola Varuma</h2>
        <div className="card-grid">
          {thalaPolaVaruma.map((_, index) => (
            <Card
              key={`thalaPolaVaruma-${index}`}
              image={`/images/thalaPolaVaruma${index + 1}.jpg`}
              disableFlip={true}
            />
          ))}
        </div>
      </section>

                  {/* Team Palaya Soru (Non-Flip) */}
                  <section className="section">
        <h2>Team Palaya Soru</h2>
        <div className="card-grid">
          {palayaSoru.map((_, index) => (
            <Card
              key={`palayaSoru-${index}`}
              image={`/images/palayaSoru${index + 1}.jpg`}
              disableFlip={true}
            />
          ))}
        </div>
      </section>

                  {/* Team Aaru Padai (Non-Flip) */}
                  <section className="section">
        <h2>Team Aaru Padai</h2>
        <div className="card-grid">
          {aaruPadai.map((_, index) => (
            <Card
              key={`aaruPadai-${index}`}
              image={`/images/aaruPadai${index + 1}.jpg`}
              disableFlip={true}
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
              <th>Place</th>
              <th>Team</th>
              <th>1st FF</th>
              <th>2nd FF</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {pointsTable.map((entry, idx) => (
              <tr key={`pt-${idx}`}>
                <td>{entry.place}</td>
              
                <td>{entry.team}</td>
                <td>{entry.firstFF}</td>
                <td>{entry.secondFF}</td>
                <td>{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
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


    </div>
  );
}

export default App;
