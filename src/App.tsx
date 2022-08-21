import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateIdea from "./components/CreateIdea/CreateIdea";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import SignIn from "./components/Sign In/SignIn";
import SignUp from "./components/Sign Up/SignUp";

function App() {
  return (
    <div className={"site-container"}>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-idea" element={<CreateIdea />} />
      </Routes>
    </div>
  );
}

export default App;
