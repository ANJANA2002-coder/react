import React from "react";
import "../App.css";

function Home() {
  function showMessage() {
    document.getElementById("msg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("heading").style.backgroundColor = "lightblue";
  }

  return (
    <div className="custom-card p-4">
      <h1 id="heading" className="custom-heading">
        This is the Home Page
      </h1>

      <p id="msg">Click the button to see my enthusiasm!</p>

      <button className="btn-custom" onClick={showMessage}>
        Show Enthusiasm
      </button>
    </div>
  );
}

export default Home;