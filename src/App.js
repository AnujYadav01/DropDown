import Dropdown from "./Dropdown";
import { useState } from "react";
function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
