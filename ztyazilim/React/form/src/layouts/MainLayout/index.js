import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Books from "../../pages/Books";
import Users from "../../pages/Users";

import "./index.scss";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <section className="main-section">
          <Routes>
            <Route path="/" element={<Books />} exact />
            <Route path="/books" element={<Books />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
