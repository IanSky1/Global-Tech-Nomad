import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignUp = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();
  
    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
  
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  
return (
    <div className="login">
        <form onSubmit={handleFormSubmit}>
            <h2 className="loginHeader">  SignUp to Get started:</h2>
            <div className="loginUn">
                <label>
                    Username
                </label>
                <br/>
                <input 
                placeholder='Your username'
                type='username' 
                name="username" 
                id='username'
                value={formState.username}
                onChange={handleChange}
                />
            </div>
            <br />
            <div className="loginUn">
                <label>
                    Email
                </label>
                <br/>
                <input 
                type='email' 
                placeholder='Your email'
                name='email'
                id='email'
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
                placeholder='******'
                type='password'
                name="password" 
                value={formState.password}
                onChange={handleChange}
                />
            </div>
            <div className="loginSubmit">
               <button type="submit">Submit</button>
            </div>
        </form>
        {error && <div>Sign up failed</div>}
    </div>
)
}

export default SignUp