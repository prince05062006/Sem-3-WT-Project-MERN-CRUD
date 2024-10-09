import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Faculty(){

    const [data, setData] = useState([]);

    const apiUrl = "http://localhost:4000/faculty";

    const { id } = useParams();

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const foramtedFaculty = data.map((fac)=>{
        return(
            <tr>
                <td>{fac.id}</td>
                <td>{fac.FacultyId}</td>
                <td>{fac.name}</td>
                <td><Link className="bi bi-file-person" to={"/faculty/"+fac.id}></Link></td>
            </tr>
        );
    })

    return(<table className="table">{foramtedFaculty}</table>);
}

export default Faculty;