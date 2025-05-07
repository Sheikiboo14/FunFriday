import React from "react";
import "./App.css";
import Card from "./Card"; // keep lowercase if the file is named 'card.js'



const employees = [
  "Ilias Ahamed M",          // 1
  "Hariharan samy",          // 2
  "Krishnan P",              // 3
  "Gnanasekar D",            // 4
  "Vamsi krishna",           // 5
  "Ahamed Asraf M",          // 6
  "Karthick",                // 7
  "Sakthi Swetha G",         // 8
  "HARIHARA PANDI.K",        // 9
  "Bhadri Narayanan AJ",     // 10
  "Shankar G",               // 11
  "Santhosh P",              // 12
  "Gopikannan V",            // 13
  "Shathakumar C",           // 14
  "Kesavan",                 // 15
  "kabilan",                 // 16
  "Sai Sandeep B",           // 17
  "Nivetha P",               // 18
  "Sumithra",                // 19
  "Risvan M P",              // 20
  "Siva Sankar & Rahul",     // 21
  "Raghavan P",              // 22
  "Rajesh",                  // 23
  "DS Prakash"               // 24
];


function App() {
  return (
    <div className="app">
      <h1>Fun Friday</h1>

      {/* Team Leaders Section */}
      {/* <h2>Team Leaders</h2>
      <div className="card-grid">
        {leaders.map((name, index) => (
          <Card
  key={`leader-${index}`}
  number={`L${index + 1}`}
  name={name}
  image={`/images/leader${index + 1}.jpg`} // ← correct
/>
        ))}
      </div> */}

      {/* Team Members Section */}
      <h2>Team Members Card</h2>

      <h4>Click on the Card to Reveal the Name</h4>
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
