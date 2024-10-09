import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailFaculty(){
    const [data, setData] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const apiUrl = "http://localhost:4000/faculty/"+id;

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
        <>
            <Link to="/faculty" className="btn btn-info bi bi-box-arrow-left px-2"> </Link>
            <div className="col-1">
                    <Link className="btn btn-success" to={"/addeditfaculty/"+id} >Edit</Link>
            </div>

            <button className="btn btn-danger bi bi-trash-fill" onClick={()=>{
                const apiUrl = "http://localhost:4000/faculty/"+id;

                fetch(apiUrl, {method:"DELETE"})
                .then(res=>res.json())
                .then(res=>{
                    navigate('/faculty');
                })

                

            }}> </button>
            <h3>Name of the faculty is = {data.name}</h3>
            <img src={data.FacultyImage} />
            <h3>Person works in <strong>{data.FacultyDept}</strong> Department</h3>
            <h3>Person lives in <strong>{data.FacultyCity}</strong></h3>
        </>
    );
}

export default DetailFaculty;