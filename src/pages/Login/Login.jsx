import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../hooks/useFirebase";
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state? location.state.from :'/home';
    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {/* <p>new to ema-john website? <Link to="/register">Create Account</Link></p> */}
            <div>-------or----------</div>
            <button
                className="btn-regular"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
    );
};

export default Login;