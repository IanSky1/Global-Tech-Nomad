import React from "react";

const Login = () => {
return (
    <div>
        <h2>Login to Get started:</h2>
        <form>
            <label>
                username:
                <input type='text' name="username" />
            </label>
            <label>
                Password:
                <input type='text' name="password" />
            </label>
        </form>
    </div>
)
}

export default Login