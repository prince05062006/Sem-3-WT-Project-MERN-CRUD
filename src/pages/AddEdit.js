import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data,setData] = useState({});
    const isForEdit = (id != null);

    useEffect(()=>{
        if(isForEdit){
            const apiUrl = 'http://localhost:4000/faculty/'+id;
            fetch(apiUrl,{method : 'GET'}).then(res=>res.json()).then(res=>setData(res));
        }
    },[]);
    return(
        <>
            <div className="container p-3">
                <div className="row mb-3">
                    {isForEdit && <div className="col-2"><Link className="btn btn-dark" to={'/faculty/'+id}>Back</Link></div>}
                    {!isForEdit && <div className="col-2"><Link className="btn btn-dark" to='/' >Back</Link></div>}
                </div>
                <div className="row my-1">
                    <div className="col-2">FacultyId</div>
                    <div className="col-1">:</div>
                    <div className="col">
                        <input type="number" value={data.id} onChange={(e)=>setData({...data,FacultyId:e.target.value})} className="form-control"/>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-2">Faculty Name</div>
                    <div className="col-1">:</div>
                    <div className="col">
                        <input type="text" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} className="form-control"/>
                    </div>
                </div>
                
                <div className="row my-1">
                    <div className="col-2">Department</div>
                    <div className="col-1">:</div>
                    <div className="col">
                        <input type="text" value={data.FacultyDept} onChange={(e)=>setData({...data,FacultyDept:e.target.value})} className="form-control"/>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-2">City</div>
                    <div className="col-1">:</div>
                    <div className="col">
                        <input type="text" value={data.FacultyCity} onChange={(e)=>setData({...data,FacultyCity:e.target.value})} className="form-control"/>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-2 ">Image</div>
                    <div className="col-1">:</div>
                    <div className="col">
                        <input type="text" value={data.FacultyImage} onChange={(e)=>setData({...data,FacultyImage:e.target.value})} className="form-control"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 d-flex justify-content-end">
                        {/* for edit student */}
                        {isForEdit && (
                            <button className="btn btn-primary" onClick={()=>{
                                const apiUrl = 'http://localhost:4000/faculty/'+id;
                                fetch(apiUrl,{
                                    method:"PATCH",
                                    body:JSON.stringify(data),
                                    headers:{
                                        "Content-Type":"application/json"
                                    }
                                })
                                .then(res=>res.json())
                                .then(res=>{
                                    navigate('/faculty/'+data.id);
                                }); 
                            }}>Update</button>
                        )}
                        {/* for add new student submition */}
                        {!isForEdit && (
                            <button className="btn btn-primary" onClick={()=>{
                                const apiUrl = "http://localhost:4000/faculty";
                                fetch(apiUrl,{
                                    method:"POST",
                                    body:JSON.stringify(data),
                                    headers:{
                                        "Content-Type":"application/json"
                                    }
                                })
                                .then(res=>res.json())
                                .then(res=>{
                                    navigate('/faculty/'+data.id);
                                });
                            }}>Submit</button>
                        )}
                    </div>
                    <div className="col d-flex justify-content-start">
                        <button className="btn btn-warning" onClick={()=>{
                            setData({
                                ...data,
                                id : '',
                                name : '',
                                spi : '',
                                sem : '',
                                contact : '',
                                img : ''
                            });
                        }}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddEdit;