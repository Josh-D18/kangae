import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/Sign Up/SignUp";

function App() {
  return (
    <div className={"site-container"}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
