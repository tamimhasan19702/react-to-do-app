import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Nav from "../pages/Navigation/Nav";
import ShowBook from "../pages/ShowBook";
import AddBook from "../pages/AddBook";

const Index = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/show-book" element={<ShowBook/>}/>
      <Route path="/add-book" element={<AddBook/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default Index;
