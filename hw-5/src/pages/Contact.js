import React from "react";

function Contact() {
  function showMessage() {
    document.getElementById("msg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("heading").style.backgroundColor = "lightblue";
  }

  return (
    <div className="card p-4 mb-4">
      <h1 id="heading">This is the Contact Page</h1>
      <p id="msg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showMessage}>
        Show Enthusiasm
      </button>
    </div>
  );
}

export default Contact;