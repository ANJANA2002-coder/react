import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !roll || !studentClass) {
      alert("All fields are required!");
      return;
    }

    addStudent({ name, roll, class: studentClass });

    // clear form
    setName("");
    setRoll("");
    setStudentClass("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <input
        type="text"
        placeholder="Class (e.g., 10A)"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;