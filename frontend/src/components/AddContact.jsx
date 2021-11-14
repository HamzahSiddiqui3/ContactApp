import React,{useState} from 'react'
import { addContact } from '../serversUrl/urls';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


export default function AddContact() {
    const navigate = useNavigate();

    const [fname,setFname]=useState("");
    const [mname,setMname]=useState("");
    const [lname,setLname]=useState("");
    const [mno,setMno]=useState();
    const [altno,setAltno]=useState();

const onSave=async(e)=>{
    let  arr=[];
try {
    e.preventDefault();
    arr.push(mno);
    arr.push(altno);
    const data={
        fname:fname,
        mname:mname,
        lname:lname,
        pno_list:arr
     
    };
    
    const response=await axios.post(addContact,data);
    localStorage.setItem("userId",JSON.stringify(response.data.userId));
    navigate("/savePhone");

} catch (error) {
    console.log(error)
}     
}

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto p-5 border shadow mt-5">
                        <form onSubmit={onSave} >
                        <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input type="text"  onChange={(e)=>setFname(e.target.value)} id="" placeholder="Enter First Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Middle Name</label>
                            <input type="text" onChange={e=>setMname(e.target.value)} id="" placeholder="Enter Middle Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" onChange={e=>setLname(e.target.value)} id="" placeholder="Enter Last Name" className="form-control" />
                        </div>
                        <div>
                        <label htmlFor="">Mobile no</label>
                            <input type="text" onChange={e=>setMno(e.target.value)} id="" placeholder="Enter Mobile no" className="form-control" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="">Alternate no</label>
                            <input type="text" onChange={e=>setAltno(e.target.value)} id="" placeholder="Enter Alternate" className="form-control" />
                        </div>

                      
                        <div className="text-center p-4">
                        <button type="submit" className="btn btn-primary w-50">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
