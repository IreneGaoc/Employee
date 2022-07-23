import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/add" element={<Add />} ></Route>
          <Route path="/:id" element={<Add />} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
