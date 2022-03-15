import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import InspectPage from "./components/InspectPage";
import './App.css';

export const UserContext = createContext();

function App() {
  const [ userId, setUserId ] = useState(localStorage.getItem("hooktester-userId") || '');

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage setUserId={setUserId} />} />
          <Route path="/inspect/:url" element={<InspectPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
