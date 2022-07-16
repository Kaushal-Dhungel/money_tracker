import React,{useState,useRef} from 'react';
import InputIcon from '@material-ui/icons/Input';
import ClipLoader from "react-spinners/ClipLoader";
import {registerFn} from '../components/utils';
import { Link, useHistory, Redirect } from "react-router-dom";
import {loginFn} from '../components/utils';


const Register = ()=> {
    const [message,setMessage] = useState("");

    const [passwordMissMatch, setPasswordMissMatch] = useState(false);
    const [passLength, setPassLength] = useState(true);

    const passwordRef = useRef();
    const confpasswordRef = useRef();    
    const [loading,setLoading] = useState(false);
    const [guestLoading, setGuestLoading] = useState(false);

    const history = useHistory();
    const isAuthenticated = localStorage.getItem("access") !== null;

    const register = (e) => {
        e.preventDefault();
        setLoading(true)

        const form = new FormData(e.target);
        
        registerFn(form)
        .then(res=> {
            setLoading(false)
            history.push('/profile');
        })
        .catch(err => {
            setMessage(err.response.data)
            setLoading(false)
        })
    }

    function handleChange(e) {
    
          const pass1 = passwordRef.current.value;
          const pass2 = confpasswordRef.current.value;

          if(pass1){
            if (pass1.length >= 8) 
              setPassLength(false)
            
            else 
              setPassLength(true);
          }

          if (pass1 === pass2 || pass1 === "" || pass2 === "" ){
            setPasswordMissMatch(false)
            return
          }
    
          if (pass1 !== pass2){
            setPasswordMissMatch(true);
            return
          }
    }

    const onGuestLogin = () => {
    
        setGuestLoading(true)
        
        loginFn(process.env.REACT_APP_GUEST_USERNAME, process.env.REACT_APP_GUEST_PASSWORD)
        .then(res => {
            setGuestLoading(false)
            history.push('/profile');
        })
        .catch(err => {
            setGuestLoading(false)
            setMessage("Invalid Credentials. Please Try Again.")
        })
    }

    
    const pStyle = {
        color : "red"
      }

    return (
        isAuthenticated ? <Redirect to = "/profile" />:
        <div className="login_wrapper">
            <h2 className = "add_student_header"> Register </h2>
            {
                    message !== "" ?
                        <p style = {pStyle}> {message} </p>
                    :
                    null
                }
            <div className = "add_student">
                <form action="" onSubmit = {register}>
                    <input type="text" name="username" className="formStyle"  onChange = {handleChange} style = {{backgroundColor:"rgb(247, 247, 247)"}}
                    placeholder="Username" autoComplete="off"  required />

                    <input type="email" name="email" className="formStyle" onChange = {handleChange} style = {{backgroundColor:"rgb(247, 247, 247)"}}
                    placeholder="Email" required autoComplete="off"
                    />

                    <input type="password" name="password" className="formStyle" onChange = {handleChange} style = {{backgroundColor:"rgb(247, 247, 247)"}}
                    placeholder="Password" autoComplete="off" required ref = {passwordRef} />
                    {passLength? <p style = {pStyle}> Password must be 8 characters long </p>: null }

                    <input type="password" name="confirm_password" className="formStyle" onChange = {handleChange} style = {{backgroundColor:"rgb(247, 247, 247)"}}
                    placeholder="Confirm Password" autoComplete="off" minLength="8" required ref = {confpasswordRef} />
                    {passwordMissMatch ? <p style = {pStyle}> Password and Confirm Password must be same</p>: null }

                    <div className="form_text">
                        <p> Have an Account? </p>
                        <Link to = "/login">  Login Here </Link>
                    </div>

                    <span className = "form_button">

                        {
                        loading ? 
                          <ClipLoader color="rgb(207, 52, 52)" size={60} />
                        :
                        <button className="simple_button" disabled = { passwordMissMatch|| passLength}>Register <InputIcon /></button>

                        }
                    </span>

                </form>

                <div className="guest_user">
                    {
                        guestLoading ? 
                        <ClipLoader color="rgb(207, 52, 52)" size={60} />
                        :
                        <button className="simple_button" onClick={()=> {
                            onGuestLogin();
                            }}
                            > Explore as a Guest </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Register;