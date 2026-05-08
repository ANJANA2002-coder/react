import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Signup(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e)=>{

        e.preventDefault();

        if(password !== confirmPassword){
    alert("Passwords do not match");
    return;
}

/* PASSWORD VALIDATION */

const passwordPattern =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if(!passwordPattern.test(password)){

    alert(
        "Password must contain:\n" +
        "- Minimum 8 characters\n" +
        "- One uppercase letter\n" +
        "- One lowercase letter\n" +
        "- One number\n" +
        "- One special character"
    );

    return;
}
        const users =
        JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(
            user => user.email === email
        );

        if(existingUser){
            alert("User already exists");
            return;
        }

        users.push({
            name,
            email,
            password
        });

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert("Signup Successful");

        navigate("/login");
    }

    return(
        <div className="signup-page">

            <div className="signup-container">

                {/* LEFT SIDE */}

                <div className="signup-left">

                    <div className="logo">
                        🏥
                    </div>

                    <div className="left-content">

                        <h1>
                            MEDI'S
                        </h1>

                        <p>
                            Manage medicines, stock,
                            search and inventory easily.
                        </p>

                        <img
                        src="https://media.istockphoto.com/id/1346505072/vector/female-and-male-doctors-presenting-drugs-antibiotic-pills-vitamins-and-bottles-vector-flat.jpg?s=612x612&w=0&k=20&c=CAgkVsAelu6lrllDvWBjKnlFdYzMLugFERjkLtr6S_4="
                        alt="medical"
                        className="signup-image"
                        />

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="signup-right">

                    <h1 className="signup-title">
                        MEDI'S
                    </h1>

                    <p className="signup-subtitle">
                        Create your medical store account
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">

                            <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />

                        </div>

                        <div className="input-group">

                            <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />

                        </div>

                        <div className="input-group">

                            <input
                            type="password"
                            placeholder="Create password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />

                        </div>

                        <div className="input-group">

                            <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            />

                        </div>

                        <button className="signup-btn">
                            Sign Up
                        </button>

                    </form>

                    <p className="bottom-text">

                        Already have an account?

                        <Link to="/login">
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    )
}

export default Signup;