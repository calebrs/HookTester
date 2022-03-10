import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import InspectPage from "./components/InspectPage";
import './App.css';
import * as waypost from 'waypost-sdk-react';
const { Config, WaypostProvider } = waypost;

const config = new Config('12345', "http://localhost:5000");

function App() {
  return (
    <WaypostProvider config={config}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/inspect/:url" element={<InspectPage />} />
        </Routes>
      </BrowserRouter>
    </WaypostProvider>
  );
}

export default App;
