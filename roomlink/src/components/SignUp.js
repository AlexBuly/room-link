import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { useCookies } from "react-cookie"


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [error, setError] = useState('');
    //const [cookies, setCookie, removeCookie] = useCookies(['user']);
    

    let navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            if (password !== passwordCheck) {
                setError("Passwords don't match");
                return
            }
            console.log("posting", username, password);
            
            
             navigate('/survey');
            
            const response = await axios.post('http://localhost:8000/signup', {username, password});
            
           document.cookie = `Username=${response.data.username}`
           document.cookie = `UserId=${response.data.userId}`
           document.cookie = `AuthToken=${response.data.token}`

            return response;
            
                
        } catch(error) {
            console.log(error);
            /*if (error.response.status === 409) {
                setError("Username already exists. Please choose a different username.");
            } else {
                setError("An error occurred. Please try again.");
            }*/
        }
    }

    return (
            <div className="sign-up">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend><h1>Create Account</h1></legend>
                        <label htmlFor="username">Username:</label>
                        <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={username} 
                        required={true} 
                        onChange={(e) => setUsername(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="pwd">Password:</label>
                        <input 
                        type="password" 
                        name="pwd" 
                        id="pwd" 
                        value={password}
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
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                        <p>{error}</p>
                    </fieldset>
                </form>
            </div>
    )
}

export default SignUp;