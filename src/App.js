import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Coin from "./jsx/Coin";
import Movie from "./jsx/Movie";
import Todo from "./jsx/Todo";
import Detail from "./routes/Detail";
import Home from "./routes/Home";





function App() {
 
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
