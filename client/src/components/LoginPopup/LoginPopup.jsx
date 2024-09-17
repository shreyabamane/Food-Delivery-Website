import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { RxCross1 } from "react-icons/rx";
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";


export function LoginPopup({ setShowLogin }) {

  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  //create handleInputChange function that will pick the data from the input field & saved it into state variable
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  // debugging or tracking changes in the data state. 
  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  const onLogin = async (event) => {
    event.preventDefault() //prevent reloading of webpage (prevent the default behavior of an event.)
    let newUrl = url;
    //change the endpoint of an HTTP request based on a user's action 
    if (currState === "Login") {
      newUrl += "api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data) //sends a POST request to the server using Axios

    //handles the response from an API call
    if (response.data.success) {
      setToken(response.data.token);//save token in state
      localStorage.setItem("token", response.data.token);//store token in local storage for persistence
      setShowLogin(false); //hide the login form
    }
    else {
      alert(response.data.message); //show error message to the user
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">

        <div className="login-popup-title">
          <h2>{currState}</h2>
          <RxCross1 onClick={() => setShowLogin(false)} size={20} />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input name='name' onChange={handleInputChange} value={data.name} type="text" placeholder='Your Name' required />}
          <input name='email' onChange={handleInputChange} value={data.email} type="email" placeholder='Your Email' required />
          <input name='password' onChange={handleInputChange} value={data.password} type="password" placeholder='Password' required />
        </div>

        <button type='submit'>{currState === 'Sign Up' ? "Create Account" : 'Login'}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}
