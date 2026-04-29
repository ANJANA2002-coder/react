import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Welcome message displayed.");
  }, []); // empty dependency → runs only once

  return (
    <div>
      <h1>Hello, user! Welcome to our site.</h1>
    </div>
  );
}

export default App;