import React from "react";

const SignUp = () => {
return (
    <div className="login">
        <form>
            <h2 className="loginHeader">  SignUp to Get started:</h2>
            <div className="loginUn">
                <label>
                    Username
                </label>
                <br/>
                <input type='text' name="username" />
            </div>
            <br />
            <div className="loginUn">
                <label>
                    Email
                </label>
                <br/>
                <input type='text' name="username" />
            </div>
            <br/>
            <div className="loginPw">
                <label>
                    Password
                </label>
                <br/>
                <input type='text' name="password" />
            </div>
            <div className="loginSubmit">
               <button type="submit">Submit</button>
            </div>

        </form>
    </div>
)
}

export default SignUp