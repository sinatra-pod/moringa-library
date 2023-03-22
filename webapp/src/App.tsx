import { Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import LoginView from "./pages/LoginView";
import RegisterView from "./pages/RegisterView";
import AllSubmissionView from "./pages/AllSubmissionView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/all" element={<AllSubmissionView />} />
    </Routes>
  );
}

export default App;
