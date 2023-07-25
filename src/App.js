import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addtask from "./componets/Addtask"
import Edittask from "./componets/Edittask";




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addtask/>}/>
        <Route path="/edittask/:id" element={<Edittask/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
