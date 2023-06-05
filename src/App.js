import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import AdminLayout from "./admin/AdminLayout";
import Navbar from "./components/Navbar";
import Dashboard from "./dashboard/Dashboard";
import User from "./admin/User";
import Cart from "./admin/Cart";
import Message from "./admin/Message";
import Analaytics from "./admin/Analaytics";
import Setting from "./admin/Setting";
import FileManager from "./admin/FileManager";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="user" element={<User />} />
              <Route path="analytics" element={<Analaytics />} />
              <Route path="setting" element={<Setting />} />
              <Route path="filemanager" element={<FileManager />} />
              <Route path="cart" element={<Cart />} />
              <Route path="message" element={<Message />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
