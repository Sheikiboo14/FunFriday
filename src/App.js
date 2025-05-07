import React from "react";
import "./App.css";
import Card from "./Card";

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
      <div className="card-grid">
        {employees.map((name, index) => (
          <Card
            key={index}
            number={index + 1}
            name={name}
            image={`/images/${index + 1}.jpg`} // Make sure these exist in public/images/
          />
        ))}
      </div>
    </div>
  );
}

export default App;
