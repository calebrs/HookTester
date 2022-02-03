import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import InspectPage from "./components/InspectPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/inspect/:url" element={<InspectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
