import { useParams, useNavigate } from "react-router-dom";

function Student() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="welcome">Welcome, {name} 👋</h1>

      <button className="btn" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
}

export default Student;