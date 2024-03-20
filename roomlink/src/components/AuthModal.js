import { useState } from "react";

const AuthModal = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordCheck, setPasswordCheck] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const isSignUp = false;

    return (
        <div className="auth-modal">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    required={true} 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="pwd">Password:</label>
                    <input 
                    type="password" 
                    name="pwd" 
                    id="pwd" 
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="pwd-check">Confirm password:</label>
                    <input 
                    type="password" 
                    name="pwd-check" 
                    id="pwd-check" 
                    required={true}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    />
                    <br/>
                    <button className="btn btn-primary" type="submit">{isSignUp ? "Log in" : "Sign up"}</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AuthModal;