const Login = () => {
    return (
     <div className="login">
        <fieldset>
        <h1>Log in</h1> 
            <form action="post">
                <div className="username">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"/>
                </div>
                <br />
                <div className="password">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" id="pwd" name="pwd"/>
                </div>
            </form>
        </fieldset> 
    </div>
    )
}

export default Login;