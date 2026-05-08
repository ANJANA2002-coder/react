import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";

function Dashboard(){

    const navigate = useNavigate();

    const [medicineName,setMedicineName] = useState("");
    const [stock,setStock] = useState("");
    const [search,setSearch] = useState("");
    const [medicines,setMedicines] = useState([]);
    const [page,setPage] = useState(1);

    const medicinesPerPage = 3;

    const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    useEffect(()=>{

        if(!loggedInUser){
            navigate("/login");
            return;
        }

        const allMedicines =
        JSON.parse(localStorage.getItem("medicines")) || [];

        const userMedicines = allMedicines.filter(
            med => med.userEmail === loggedInUser.email
        );

        setMedicines(userMedicines);

    },[]);

    const addMedicine = ()=>{

        if(!medicineName || !stock){
            alert("Fill all fields");
            return;
        }

        const allMedicines =
        JSON.parse(localStorage.getItem("medicines")) || [];

        const userMedicines = allMedicines.filter(
            med => med.userEmail === loggedInUser.email
        );

        if(userMedicines.length >= 5){
            alert("Only 5 medicines allowed");
            return;
        }

        const newMedicine = {
            id:Date.now(),
            medicineName,
            stock,
            time:new Date().toLocaleString(),
            userEmail:loggedInUser.email
        };

        const updatedMedicines = [
            ...allMedicines,
            newMedicine
        ];

        localStorage.setItem(
            "medicines",
            JSON.stringify(updatedMedicines)
        );

        setMedicines([
            ...userMedicines,
            newMedicine
        ]);

        setMedicineName("");
        setStock("");
    }

    const deleteMedicine = (id)=>{

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this medicine?"
    );

    if(!confirmDelete){
        return;
    }

    const allMedicines =
    JSON.parse(localStorage.getItem("medicines")) || [];

    const updatedMedicines = allMedicines.filter(
        med => med.id !== id
    );

    localStorage.setItem(
        "medicines",
        JSON.stringify(updatedMedicines)
    );

    setMedicines(
        medicines.filter(med => med.id !== id)
    );
}

    const editMedicine = (id)=>{

        const newName = prompt("Enter medicine name");
        const newStock = prompt("Enter stock");

        if(!newName || !newStock){
            return;
        }

        const allMedicines =
        JSON.parse(localStorage.getItem("medicines")) || [];

        const updatedMedicines = allMedicines.map(med => {

            if(med.id === id){

                return{
                    ...med,
                    medicineName:newName,
                    stock:newStock
                }
            }

            return med;
        });

        localStorage.setItem(
            "medicines",
            JSON.stringify(updatedMedicines)
        );

        const userMedicines = updatedMedicines.filter(
            med => med.userEmail === loggedInUser.email
        );

        setMedicines(userMedicines);
    }

    const logout = ()=>{

        localStorage.removeItem("loggedInUser");

        navigate("/login");
    }

    const filteredMedicines = medicines.filter(med =>
        med.medicineName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    const lastIndex = page * medicinesPerPage;

    const firstIndex = lastIndex - medicinesPerPage;

    const currentMedicines =
    filteredMedicines.slice(firstIndex,lastIndex);

    return(

        <div className="dashboard-page">

            <div className="dashboard-container">

                {/* HEADER */}

                <div className="dashboard-header">

                    <div>
                        <h1>MEDI's Collection</h1>
                        <p>
                            Manage medicines and stock
                        </p>
                    </div>

                    <button
                    className="logout-btn"
                    onClick={logout}
                    >
                        Logout
                    </button>

                </div>

                {/* FORM */}

                <div className="medicine-card">

                    <h2>Add Medicine</h2>

                    <div className="medicine-inputs">

                        <input
                        type="text"
                        placeholder="Medicine Name"
                        value={medicineName}
                        onChange={(e)=>
                        setMedicineName(e.target.value)}
                        />

                        <input
                        type="number"
                        placeholder="Available Stock"
                        value={stock}
                        onChange={(e)=>
                        setStock(e.target.value)}
                        />

                        <button
                        className="add-btn"
                        onClick={addMedicine}
                        >
                            Add Medicine
                        </button>

                    </div>

                </div>

                {/* SEARCH */}

                {/* SEARCH */}

<div className="search-section">

    <div className="search-box-modern">

        <span className="search-icon">
            🔍
        </span>

        <input
        type="text"
        placeholder="Search medicine here..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />

    </div>

</div>

                {/* TABLE */}

                <table className="medicine-table">

                    <thead>

                        <tr>
                            <th>Medicine</th>
                            <th>Stock</th>
                            <th>Added Time</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            currentMedicines.length > 0 ?

                            currentMedicines.map((med)=>(

                                <tr key={med.id}>

                                    <td>{med.medicineName}</td>

                                    <td>{med.stock}</td>

                                    <td>{med.time}</td>

                                    <td>

                                        <button
                                        className="edit-btn"
                                        onClick={()=>
                                        editMedicine(med.id)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                        className="delete-btn"
                                        onClick={()=>
                                        deleteMedicine(med.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>
                            ))

                            :

                            <tr>

                                <td
                                colSpan="4"
                                className="no-data"
                                >
                                    No Medicines Added
                                </td>

                            </tr>
                        }

                    </tbody>

                </table>

                {/* PAGINATION */}

                <div className="pagination">

                    <button
                    disabled={page === 1}
                    onClick={()=>setPage(page - 1)}
                    >
                        Previous
                    </button>

                    <button
                    disabled={
                        lastIndex >=
                        filteredMedicines.length
                    }
                    onClick={()=>setPage(page + 1)}
                    >
                        Next
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Dashboard;