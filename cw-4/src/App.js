import { useState, useEffect } from 'react';

function App(){
  const [name, setName] = useState("Guest");
  useEffect( () =>{
    console.log("User changed to alice");
  }, [name]);
  
  const handleClick = () => {
    setName("alice");
  };

    return (
  <div>
  <p>Welcome {name}  </p>
  <button onClick={handleClick} > Login as  Alice</button>
  </div>
);
}
export default App;