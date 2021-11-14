import axios from 'axios';
import React,{useState} from 'react'
import { saveAddress } from './../serversUrl/urls';

export default function AddAddress() {
    const [addressType, setAddressType]=useState("");
const [streetName,setStreetName]=useState("");
const [streetNum,setStreetNum]=useState("");
const [streetApt, setAppartment]=useState("");
const [country,setCountry]=useState("india");
const [state,setState]=useState("");
const [city,setCity]=useState("");
const onSave=(e)=>{
    e.preventDefault();
    const data={
        type:addressType,
        streetName:streetName,
        streetNumber:streetNum,
        apartmentNumber:streetApt,
        country:country,
        city:city,
        userId:JSON.parse(localStorage.getItem("userId"))
    }
    axios.post(saveAddress,data).then((data)=>{
        console.log(data)
    }).catch(error=>{
        console.log(error)
    })

}
    return (
        <div>
            <div className="cotnainer">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <form  onSubmit={onSave}>
                            <div className="form-group  ">
                                <label htmlFor="">Address </label>
                                <select className="form-control " onChange={(e) => { setAddressType(e.target.value) }}>
                                    <option defaultValue="Type" >Type</option>
                                    <option value="home">Home</option>
                                    <option value="work">Work</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Street Name</label>
                                <input type="text" onChange={e => setStreetName(e.target.value)} placeholder="Enter Street name" className="form-control " />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Street Number</label>
                                <input type="text" onChange={e => setStreetNum(e.target.value)} placeholder="Enter Street Number" className="form-control " />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Apartment No</label>
                                <input type="text" onChange={e => setAppartment(e.target.value)} placeholder="Enter Street name" className="form-control " />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Country</label>
                                <select onChange={(e) => setCountry(e.target.value)} className="form-control">
                                   <option value="" defaultChecked>Select Option</option>

                                    <option value="india">India</option>
                                    <option value="pakistan">Pakistan</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">State</label>
                                <select onChange={(e) => setState(e.target.value)} className="form-control">
                                   <option value="" defaultChecked>Select Option</option>

                                    <option value="mp">Mp</option>
                                    <option value="up">UP</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">City</label>
                                <select onChange={(e) => setCity(e.target.value)} className="form-control">
                                   <option value="" defaultChecked>Select Option</option>

                                    <option value="bhopal">Bhopal</option>
                                    <option value="indore">Indore</option>
                                </select>
                            </div>
                            <div className="text-center p-4">
                        <button type="submit" className="btn btn-primary w-50">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
