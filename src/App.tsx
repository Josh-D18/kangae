import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
