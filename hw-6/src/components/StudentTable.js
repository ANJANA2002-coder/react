import { useState } from "react";

function StudentTable({ students, deleteStudent, updateStudent }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (student) => {
    setEditId(student.id);
    setEditData(student);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const saveEdit = () => {
    if (!editData.name || !editData.roll || !editData.class) {
      alert("All fields required!");
      return;
    }

    updateStudent(editData);
    setEditId(null);
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Roll</th>
          <th>Class</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="5">No students found</td>
          </tr>
        ) : (
          students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>

              {editId === s.id ? (
                <>
                  <td>
                    <input
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                    />
                  </td>

                  <td>
                    <input
                      name="roll"
                      value={editData.roll}
                      onChange={handleChange}
                    />
                  </td>

                  <td>
                    <input
                      name="class"
                      value={editData.class}
                      onChange={handleChange}
                    />
                  </td>

                  <td>
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={() => setEditId(null)}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{s.name}</td>
                  <td>{s.roll}</td>
                  <td>{s.class}</td>

                  <td>
                    <button onClick={() => startEdit(s)}>
                      Edit
                    </button>
                    <button onClick={() => deleteStudent(s.id)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default StudentTable;