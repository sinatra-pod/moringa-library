import { Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import LoginView from "./pages/LoginView";
import RegisterView from "./pages/RegisterView";
import SignupView from "./pages/SignupView";
import SignupViewTwo from "./pages/SignupViewTwo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/signup" element={<SignupView />} />
      <Route path="/signuptwo" element={<SignupViewTwo />} />



    </Routes>
  );
}

export default App;
