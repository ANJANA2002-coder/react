import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e)=>{

        e.preventDefault();

        const users =
        JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            user =>
            user.email === email &&
            user.password === password
        );

        if(!user){
            alert("Invalid Credentials");
            return;
        }

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );

        navigate("/dashboard");
    }

    return(
        <div className="login-page">

            <div className="login-container">

                {/* LEFT SIDE */}

                <div className="login-left">

                    <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/006/553/917/small/healthcare-modern-apothecaries-concept-free-vector.jpg"
                    alt="login"
                    />

                </div>

                {/* RIGHT SIDE */}

                <div className="login-right">

                    <h1 className="login-title">
                        MEDI'S Login
                    </h1>

                    <p className="login-subtitle">
                        Login to manage medicines and stock
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">

                            <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />

                        </div>

                        <div className="input-group">

                            <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />

                        </div>

                        <button className="login-btn">
                            Login
                        </button>

                    </form>

                    <p className="bottom-text">

                        Don't have an account?

                        <Link to="/">
                            Signup
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    )
}

export default Login;