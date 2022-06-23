import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppContainer from "./containers/AppContainer";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Editar from "./pages/Profile/editP";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Landing page</p>} />
        <Route path="login" element={<p>Login</p>} />
        <Route path="signup" element={<p>Signup</p>} />
        <Route path="app" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<Editar/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;