import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { StrictMode } from "react";
import StudentTable from "./Components/StudentTable/StudentTable";
import CreateStudent from "./Components/CreateStudent/CreateStudent";
import EditStudent from "./Components/EditStudent/EditStudent";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentTable />}></Route>
          <Route path="student/create" element={<CreateStudent />}></Route>
          <Route path="student/edit/:id" element={<EditStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;