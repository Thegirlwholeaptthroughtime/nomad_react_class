import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Coin from "./jsx/Coin";
import Todo from "./jsx/Todo";





function App() {
 

  
  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
