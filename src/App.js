import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
// eslint-disable-next-line
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";

function App() {
  return (
    <BrowserRouter>
      <>
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />}/>
              <Route path="/" element={<EmailList />}/>
            </Routes>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
