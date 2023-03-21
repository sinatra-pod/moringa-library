import { Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import LoginView from "./pages/LoginView";
import PageNotFound from "./pages/PageNotFound";
import RegisterView from "./pages/RegisterView";
import Users from "./pages/admin/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />

      {/* Admin app routes */}
      <Route path="/app/users" element={<Users />}/>

      {/* Not found route */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
