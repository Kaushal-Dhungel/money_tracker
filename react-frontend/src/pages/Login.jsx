import React,{useState} from 'react';
import {loginFn} from '../components/utils';
import ClipLoader from "react-spinners/ClipLoader";

import {Link} from 'react-router-dom';
import InputIcon from '@material-ui/icons/Input';
import { useHistory } from "react-router-dom";
import {Redirect} from 'react-router-dom';

const Login = ()=> {

    const [loading, setLoading] = useState(false);
    const [message,setMessage] = useState("");
    const history = useHistory();
    const isAuthenticated = localStorage.getItem("access") !== null;

    const pStyle = {
        color : "red",
        textAlign:"center",
        fontSize : "18px",
        margin : "3vh 0"
    }

    const login = (e) => {
        e.preventDefault();
        setLoading(true)
        const form = new FormData(e.target)
        const username = form.get("username")
        const password = form.get("password")
        
        loginFn(username,password)
        .then(res => {
            setLoading(false)
            history.push('/profile');
        })
        .catch(err => {
            setLoading(false)
            setMessage("Invalid Credentials. Please Try Again.")
            // console.log(err.respose.header)
            // console.log(err.response.data)
        })
    }

    return (
        isAuthenticated ? <Redirect to = "/profile" />:

        <div className="login_wrapper">
                <h2 className = "add_student_header"> Login </h2>
                {
                    message !== "" ?
                        <p style = {pStyle}> {message} </p>
                    :
                    null
                }
                <div className = "add_student">
                    <form action="" onSubmit = {login} >
                        <input type="text" name="username" className="formStyle" style = {{backgroundColor:"rgb(247, 247, 247)"}}
                        placeholder="Username" autoComplete="off"  required />

                        <input type="password" name="password" className="formStyle"  style = {{backgroundColor:"rgb(247, 247, 247)"}}
                        placeholder="Password" autoComplete="off" required />

                        <div className="form_text">
                            <p> New User?? </p>
                            <Link to = "/register">  Register Here </Link>
                        </div>

                        <span className = "form_button">
                        {
                            loading ? 
                            <ClipLoader color="rgb(207, 52, 52)" size={60} />
                            :
                            <button className = "simple_button"> Login <InputIcon /> </button>
                        }
                        </span>

                    </form>
                </div>
        </div>
    )
}

export default Login;