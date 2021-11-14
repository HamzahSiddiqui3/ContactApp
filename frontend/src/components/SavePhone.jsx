import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { getContact,saveContact } from "./../serversUrl/urls"
import {useNavigate} from 'react-router-dom';

export default function SavePhone() {
    const navigate = useNavigate();
    let [type,setType]=useState("");
    let [code,setCode]=useState("");
    let [mobile,setMobile]=useState("");
    let userId=JSON.parse(localStorage.getItem("userId"));
    useEffect(async()=>{
            try {
                const mno=await axios.get(getContact+"/"+userId);
            } catch (error) {
                console.log(error)
            }
            },
    [])

    const onSave=async(e)=>{
        try {
            e.preventDefault();
            let data={
                type:type,
                cCode:code,
                userId:userId,
                pno:mobile
            }
            const response=await axios.post(`${saveContact}`,data);
            console.log(response.data)
            navigate("/saveAdd");

        } catch (error) {
            console.log(error)
        }
     
    }
 
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                   <div className="col-md-6 m-auto">
                       <form onSubmit={onSave} >
                           <div className="form-group">
                               <label htmlFor="">Type</label>
                               <select  className="form-control" onChange={(e)=>{setType(e.target.value)}}>
                                   <option value="" defaultChecked>Select Option</option>
                                   <option value="home">Home</option>
                                   <option value="office">Office</option>
                               </select>
                           </div>
                           <div className="form-group">
                               <label htmlFor="">Country Code</label>
                               <select  className="form-control"  onChange={(e)=>{setCode(e.target.value)}}>
                               <option value="" defaultChecked>Select Option</option>

                                   <option value="+91">+91</option>
                                   <option value="+92">+92</option>
                               </select>
                               <div className="form-group">
                                   <label htmlFor="">Mobile no</label>
                                   <input type="text"   onChange={(e)=>{setMobile(e.target.value)}} className="form-control" />
                               </div>
                               <input type="submit"  className="btn btn-primary mx-auto d-block w-50 mt-4 " value="next" />


                           </div>
                       </form>
                   </div>
                </div>
            </div>
        </React.Fragment>
    )
}
