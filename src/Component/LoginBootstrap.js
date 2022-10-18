import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../Firebase/firbase.init';

const auth = getAuth(app);
const LoginBootstrap = () => {
    const[success, setSuccess] = useState(false);
    const[userEmail, setUserEmail]= useState('');

    const handleSubmit = event =>{
        //preventing default behavior
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
            
            //form.reset();
        })
        .catch(error => {
            console.error('error', error);
            
          });
    }

        const handleEmailBlur = event =>{
            const email = event.target.value;
            setUserEmail(email);
        }
        const handleForgetPassword = () =>{
            if(!userEmail){
                alert('Please enter your email address ')
                return;
            }
            sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset email sent. Please check your email.')
            })
            .catch(error =>{
                console.error(error);
            })
        }


    return (
        <div className='w-50 mx-auto my-5'>
        <h3>Please Login</h3>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
        <input onClick={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required></input>
        </div>
        <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
        <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your Password" required></input>
        </div>
        <button className="btn btn-primary" type="submit" value="Submit">login</button>
        </form>
        {success && <p>Successfully login to the account</p>}
        <p><small>New to this website ? Please <Link to='/register'>Register</Link></small></p>
        <p>Forget Password? <button type='button' onClick={handleForgetPassword} className='btn btn-link'>Please Reset</button> </p>
        </div>
    );
};
export default LoginBootstrap;
