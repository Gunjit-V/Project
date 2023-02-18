import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Rooms from "./pages/Rooms"
import Signout from "./pages/Signout"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Signin />} path="/signin" />
          <Route element={<Rooms />} path="/rooms" />
          <Route element={<Signout />} path="/signout" />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
