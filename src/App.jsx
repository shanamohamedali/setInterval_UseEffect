import { useEffect, useState } from "react";
import "./App.css";
import { Title } from "./components/Title";

function App() {
  const [toggle, setToggle] = useState(true);


  return (
    <>
      <div>
      
       {toggle && <Title/>}

        <button onClick={() => setToggle((prev) => !prev)}>{toggle?"Hide":"Show"}</button>
      </div>
    </>
  );
}

export default App;
