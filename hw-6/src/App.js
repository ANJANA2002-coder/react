import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  // ADD STUDENT
  const addStudent = (student) => {
    // check duplicate roll number
    const exists = students.some(
      (s) => s.roll === student.roll
    );
    if (exists) {
      alert("Roll number must be unique!");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      ...student,
    };

    setStudents([...students, newStudent]);
  };

  // DELETE
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // UPDATE
  const updateStudent = (updatedStudent) => {
    // check duplicate roll (excluding current student)
    const exists = students.some(
      (s) =>
        s.roll === updatedStudent.roll &&
        s.id !== updatedStudent.id
    );

    if (exists) {
      alert("Roll number must be unique!");
      return;
    }

    setStudents(
      students.map((s) =>
        s.id === updatedStudent.id ? updatedStudent : s
      )
    );
  };

  // SEARCH FILTER
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Student Management</h1>

      <StudentForm addStudent={addStudent} />

      <SearchBar search={search} setSearch={setSearch} />

      <StudentTable
        students={filteredStudents}
        deleteStudent={deleteStudent}
        updateStudent={updateStudent}
      />
    </div>
  );
}

export default App;