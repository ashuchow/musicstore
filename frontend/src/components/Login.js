import React from 'react'
import { Link } from 'react-router-dom';

function userSignIn() {
    return (
        <div>
            <div className="header">
          <h1>Sign-in</h1>
        </div>

          
        <div className = "form">
        <form onSubmit>
            <ul className = "form-container">
                <li>
                    <h3>Sign In</h3>
                </li>
                <li>
                    <label htmlFor= "email">
                        Email
                    </label>
                    <input type = "email" name ="email" id = "email" onChange={(e) =>(e.target.value)}>
                    </input>
                    
                </li>
                <li>
                <label for= "password">Password</label>
                <input type = "password" name ="password" id = "password" onChange={(e) =>(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type ="submit" className= "button primary">Sign In</button>
                </li>
                <li>
                    Make New Account
                </li>
                <li>
                    <Link to = "/signup" className ="button secondary text-center">Create a new Account</Link>
                </li>

            </ul>



        </form>

    </div>
    </div>
    )
}

export default userSignIn