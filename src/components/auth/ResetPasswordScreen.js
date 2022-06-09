import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import {useDispatch, useSelector} from 'react-redux'
import { resetPassword } from "../../actions/auth";
import { useEffect } from "react";
import { removeError } from "../../actions/ui";

const ResetPasswordScreen = () => {

    const dispatch = useDispatch()
    const {isLoading, error} = useSelector( state => state.ui )

    const [ {email}, handleInputChange] = useForm({
        email: 'brahian97@outlook.com'
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPassword(email))
    }

    useEffect(() => {
        dispatch(removeError())
    }, [dispatch])

    return (
        <div>
            <h3 className='auth__title mb-5'>Reset password</h3>

            <form onSubmit={handleSubmit}>
                {
                    error &&
                    <div className='auth__alert-error'>
                        {error}
                    </div>
                }
                <input type='text' placeholder='Email' name='email' className='auth__input mb-2' value={email} onChange={handleInputChange} />

                <button type='submit' className='btn btn-primary btn-block' disabled={isLoading}>Send</button>

                <div className="auth__no-account mt-4 mb-3">
                    <p>Do you want to log in? <Link to='/auth/login' className='link' >Login</Link> </p>
                </div>
            </form>
        </div>
    );
}

export default ResetPasswordScreen;