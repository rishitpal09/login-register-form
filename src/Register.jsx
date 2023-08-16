
import React, {useState} from "react";

export const Register = (props) => {


    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,setName]=useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(

        <div className="auth-form-container">
            <h1>IIT BHU</h1>
            <h2>Sign in For Spardha</h2>
        <form className="register-form" onSumbit={handleSubmit}>
                <label>Full Name</label>
                <input value={name} name="name" onChange={(e)=>setName(e.target.value)} id="name" placeholder="full Name"/>
                <label for="email">Email</label>
                <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label for="password">Password</label>
                <input value={pass} onChange={(e) =>setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
                <button type="submit">Log In</button>
            
            
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}