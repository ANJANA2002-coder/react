import { useNavigate } from "react-router-dom";

function Home() {
  const students = ["Alexai", "John", "Riya", "Meera"];
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>🎓 Student List</h1>

      <ul className="list">
        {students.map((student, index) => (
          <li
            key={index}
            onClick={() => navigate(`/student/${student}`)}
          >
            {student}
          </li>
        ))}
      </ul>

      <button
        className="btn"
        onClick={() => navigate("/student/Riya")}
      >
        Go to Default Student (Riya)
      </button>
    </div>
  );
}

export default Home;