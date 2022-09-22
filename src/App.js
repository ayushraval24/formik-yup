import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import FullForm from "./components/FullForm";
import LoginNew from "./components/LoginNew";

function App() {
  const [signupOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleSignUp = () => {
    setLoginOpen(false);
    setSignUpOpen(!signupOpen);
  };

  const handleLogin = () => {
    setSignUpOpen(false);
    setLoginOpen(!loginOpen);
  };

  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="/new-login" element={<LoginNew />} />
        <Route path="add" element={<FullForm />} />
      </Routes>
    </div>
  );
}

export default App;
