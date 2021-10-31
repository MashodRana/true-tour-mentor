import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../hooks/useFirebase";
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state ? location.state.from : '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <main>
            <div className=" container mx-auto">
                <div className="login-form mx-auto w-1/2 p-5 my-16">
                    <h2 className="text-3xl">Login</h2>

                    <form>
                        <div>
                            <label className="p-2 mr-5" htmlFor="">Email</label>
                            <input className="p-2 mr-5 border rounded" type="email" name="" id="" placeholder="Your Email" />
                        </div>
                        <br />
                        <div>
                            <label className="p-2 mr-5" htmlFor="">Password</label>
                            <input className="p-2 mr-5 border rounded" type="password" name="" id="" />
                        </div>
                        <br />
                        <div className="text-center">
                            <button>Login</button>
                        </div>
                    </form>

                    <div>-------or----------</div>
                    <div className="text-center">
                        <button
                            className="bg-green-500 py-1 px-9 rounded"
                            onClick={handleGoogleLogin}
                        >Google Sign In</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;