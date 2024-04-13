import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const[name, setName] = useState("")
    const[email, setEmail]  = useState("")
    const[phone, setPhone] = useState("")
    const[address, setAddress]  = useState("")
    const[password, setPassword] = useState("")
    const[answer, setAnswer]  = useState("")
    const navigate = useNavigate();

    // submit

    const handleSubmit = async(e) => {
  e.preventDefault();
  
  try{
    const res = await axios.post("/api/v1/auth/register", {name, email, password, phone, address, answer});
    if(res.data.success){
      // alert(res.data.message)
      toast.success(res.data.message)
      navigate('/login');
    } else{
      // alert(res.data.message)
      toast.error(res.data.message)
    }
  } catch(error){
    console.log(error)
    // alert("Something went wrong")
    toast.error("Something went wrong")
  }
};


  return (
    
    <Layout  title="Register - Omnitrix" >
    <div className="reg">
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <h3>Register</h3>
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              value = {name}
              onChange={(e)=> setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value = {email}
              onChange={(e)=> setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              value = {address}
              onChange={(e)=> setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone No
            </label>
            <input
              type="number"
              value = {phone}
              onChange={(e)=> setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value = {password}
              onChange={(e)=> setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Question
            </label>
            <input
              type="text"
              value = {answer}
              onChange={(e)=> setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your Dream Car"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
      </div>
    </Layout>
  );
};

export default Register;
