import { Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import LoginView from "./pages/LoginView";
import RegisterView from "./pages/RegisterView";
import SignupView from "./pages/SignupView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/signup" element={<SignupView />} />


    </Routes>
  );
}

export default App;
