import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import {useDispatch, useSelector} from 'react-redux'
import { googleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useEffect } from "react";
import { removeError } from "../../actions/ui";

const LoginScreen = () => {

    const dispatch = useDispatch()
    const {isLoading, error} = useSelector( state => state.ui )

    const [ {email, password}, handleInputChange] = useForm({
        email: 'brahian97@outlook.com',
        password: 'wasd2020'
    })

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin = () => {
        dispatch(googleLogin())
    }

    useEffect(() => {
        dispatch(removeError())
    }, [dispatch])

    return (
        <div>
            <h3 className='auth__title mb-5'>Login</h3>

            <form onSubmit={handleLogin}>
                {
                    error &&
                    <div className='auth__alert-error'>
                        {error}
                    </div>
                }
                <input type='text' placeholder='Email' name='email' className='auth__input mb-2' value={email} onChange={handleInputChange} />
                <input type='password' placeholder='Password' name='password' className='auth__input mb-2' value={password} onChange={handleInputChange} />

                <button type='submit' className='btn btn-primary btn-block' disabled={isLoading}>Login</button>

                <div className="auth__no-account mt-4 mb-3">
                    <p>Forgot your password? <Link to='/auth/resetPassword' className='link' >Reset password</Link> </p>
                </div>

                <hr />

                <div className="auth__social-networks" >
                    <p style={{fontWeight: '700'}}>Login with social networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <div className="auth__no-account">
                    <p>Don't have an account? <Link to='/auth/register' className='link' >Create new account</Link> </p>
                </div>
            </form>
        </div>
    );
}

export default LoginScreen;