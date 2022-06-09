import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import isEmail from 'validator/lib/isEmail';
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { registerWithEmail } from "../../actions/auth";
import { useEffect } from "react";

const RegisterSreen = () => {

    const dispatch = useDispatch()
    const {error} = useSelector( state => state.ui )

    const [ {name, email, password, password2}, handleInputChange] = useForm({
        name: 'Brahian',
        email: 'brahian97@outlook.com',
        password: 'qwerty123',
        password2: 'qwerty123'
    })

    const handleRegister = (e) => {
        e.preventDefault()
        if(isFormValid()) {
            dispatch(registerWithEmail(email, password, name))
        }
    }

    useEffect(() => {
        dispatch(removeError())
    }, [dispatch])


    const isFormValid = () => {
        if(name.trim().lenght === 0) {
            dispatch(setError('Name is requiered'))
            return false
        } else if(!isEmail(email)) {
            dispatch(setError('Email is not valid'))
            return false
        } else if(password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters long and match each other'))
            return false
        } 

        dispatch(removeError())
        return true
    }

    return ( 
        <div>
            <h3 className='auth__title mb-5'>Register</h3>

            <form onSubmit={handleRegister}>
                {
                    error &&
                    <div className='auth__alert-error'>
                        {error}
                    </div>
                }
                
                <input type='text' placeholder='Name' name='name' className='auth__input mb-2' value={name} onChange={handleInputChange} maxLength='15' />
                <input type='text' placeholder='Email' name='email' className='auth__input mb-2' value={email} onChange={handleInputChange} />
                <input type='password' placeholder='Password' name='password' className='auth__input mb-2' value={password} onChange={handleInputChange} />
                <input type='password' placeholder='Confirm password' name='password2' className='auth__input mb-2' value={password2} onChange={handleInputChange} />

                <button type='submit' className='btn btn-primary btn-block'>Register</button>

                <hr />

                <div className="auth__no-account mt-4">
                    <p>Already registered? <Link to='/auth/login' className='link' >Login</Link> </p>
                </div>
            </form>
        </div>
     );
}
 
export default RegisterSreen;