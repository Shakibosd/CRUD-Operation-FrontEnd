import { createRoot } from "react-dom/client";
import Navbar from "./Components/Navbar/Navbar";
import "./app.css";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentTable from './Components/StudentTable/StudentTable';
import CreateStudent from './Components/CreateStudent/CreateStudent';
import EditStudent from './Components/EditStudent/EditStudent';
import Footer from "./Components/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentTable />}></Route>
        <Route path="student/create" element={<CreateStudent />}></Route>
        <Route path="student/edit/:id" element={<EditStudent />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
