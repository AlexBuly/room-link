const SignUp = () => {
    return (
        <div className="sign-up">
            <fieldset>
            <h1>Create Account</h1> 
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
                <button type="sumbit" className="btn btn-primary">Create</button>
            </form>
        </fieldset> 
        </div>
    )
}

export default SignUp;