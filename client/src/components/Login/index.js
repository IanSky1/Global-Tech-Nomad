import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


const Login = (props) => {

const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

    // submit form
    const handleFormSubmit = async event => {
    event.preventDefault();

    try {
        const { data } = await login({
        variables: { ...formState }
        });

        console.log(data);
        Auth.login(data.login.token);
    } catch (e) {
        console.error(e);
    }
    };

return (
    <div className="login">
        <form onSubmit={handleFormSubmit}>
            <h2 className="loginHeader">  Login to Get started:</h2>
            <div className="loginUn">
                <label>
                    Email
                </label>
                <br/>
                <input 
                type='email' 
                name='email' 
                id='email'
                placeholder='Your email'
                value={formState.email}
                onChange={handleChange}
                />
            </div>
            <br/>
            <div className="loginPw">
                <label>
                    Password
                </label>
                <br/>
                <input 
                type='password' 
                placeholder='******'
                name="password" 
                id='password'
                value={formState.password}
                onChange={handleChange}
                />
            </div>
            <div className="loginSubmit">
               <button type="submit">Submit</button>
            </div>
        </form>
        {error && <div>Login failed</div>}
    </div>
)
}

export default Login
