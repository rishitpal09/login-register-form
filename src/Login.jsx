
import React, {useState} from "react";

export const Login = (props) => {
    
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h1>IIT BHU</h1>
            
            <h2>Log In For Spardha</h2>
            <form className="login-form" onSumbit={handleSubmit}>
                <label for="email">Email</label>
                <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label for="password">Password</label>
                <input value={pass} onChange={(e) =>setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
                <button type="submit">Log In</button>
            
            
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Dont't have an account? Sign in here.</button>
        </div>
    )
}