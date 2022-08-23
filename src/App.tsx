import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateIdea from "./components/CreateIdea/CreateIdea";
import EditIdea from "./components/EditIdea/EditIdea";
import FriendsList from "./components/FriendsList/FriendsList";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import SignIn from "./components/Sign In/SignIn";
import SignUp from "./components/Sign Up/SignUp";

function App() {
  return (
    <div className={"site-container"}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-idea" element={<CreateIdea />} />
        <Route path="/edit-idea" element={<EditIdea />} />
        <Route path="/friends-list" element={<FriendsList />} />
      </Routes>
    </div>
  );
}

export default App;
