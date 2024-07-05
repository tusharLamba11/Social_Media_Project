import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navBar";
import Auth from "./components/Auth/auth";

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
