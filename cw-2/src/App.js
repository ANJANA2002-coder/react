import React from "react";
import "./App.css";

function App() {
  const name = "Alex";
  const age = 20;
  const isStudent = true;

  const favoriteHobbies = ["Reading", "Hiking", "Coding"];

  const headingColor = "lightblue";

  // 🔹 FOR LOOP list
  const hobbyListFor = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbyListFor.push(<li key={i}>{favoriteHobbies[i]}</li>);
  }

  // 🔹 BUTTON FUNCTION
  const showMessage = () => {
    document.getElementById("message").innerText =
      "Hello from React! I love my hobbies!";

    document.getElementById("heading").style.backgroundColor =
      headingColor;
  };

  return (
    <div className="container mt-4">
      {/* 🔹 Heading */}
      <h1 id="heading" className="p-2">
        My Profile
      </h1>

      {/* 🔹 Bootstrap Card */}
      <div className="card p-3 mt-3">
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Student: {isStudent.toString()}</p>
      </div>

      {/* 🔹 Hobbies using FOR loop */}
      <h4 className="mt-4">Hobbies </h4>
      <ul>{hobbyListFor}</ul>

      {/* 🔹 Hobbies using MAP */}
      <h4 className="mt-4">Hobbies</h4>
      <ul>
        {favoriteHobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      {/* 🔹 Button */}
      <button className="btn btn-primary mt-3" onClick={showMessage}>
        Show Enthusiasm
      </button>

      {/* 🔹 Message */}
      <p id="message" className="mt-3">
        Click the button to see my enthusiasm!
      </p>
    </div>
  );
}

export default App;