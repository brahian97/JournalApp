import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInfo } from "../../actions/auth";
import useForm from "../hooks/useForm";

const ModalProfile = () => {

    const dispatch = useDispatch()

    const { name: userName, email: userEmail } = useSelector(state => state.auth)

    const [changePassword, setChangePassword] = useState(false)

    const [{ name, email, password, password2 }, handleInputChange] = useForm({
        name: userName,
        email: userEmail,
        password: '',
        password2: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateInfo(name))
    }

    return (
        <div className="modalprofile__box-container">
            <div>
                <h3 className='modalprofile__title'>Profile</h3>
                <form className='mt-5' onSubmit={handleSubmit}>
                    <div className='modalprofile__form-div-content'>
                        <input id='name' type='text' placeholder='Name' name='name' className='modalprofile__form-input mb-2' value={name} onChange={handleInputChange} maxLength='15' />
                        <label htmlFor='name' className='modalprofile__form-input-label'>Name</label>
                    </div>
                    <div className='modalprofile__form-div-content'>
                        <input id='name' type='text' placeholder='Name' name='name' className='modalprofile__form-input disabled mb-2' value={email} onChange={handleInputChange} disabled />
                        <label htmlFor='name' className='modalprofile__form-input-label'>Email</label>
                    </div>
                    {
                        changePassword ?
                        (<>
                            <div className='modalprofile__form-div-content'>
                                <input id='password' type='password' placeholder='Password' name='password' className='modalprofile__form-input mb-2' value={password} onChange={handleInputChange} />
                                <label htmlFor='password' className='modalprofile__form-input-label'>Password</label>
                            </div>
                            <div className='modalprofile__form-div-content'>
                                <input id='password2' type='password' placeholder='Confirm Password' name='password2' className='modalprofile__form-input mb-2' value={password2} onChange={handleInputChange} />
                                <label htmlFor='password2' className='modalprofile__form-input-label'>Confirm Password</label>
                            </div>
                        </>) :
                        (<>
                            <p className='pointer mb-4 auth__no-account' onClick={() => {setChangePassword(true)}}>Want to change your password?</p>
                        </>)
                    }
                    <button type='submit' className='btn btn-primary' style={{ fontSize: '1.2rem' }}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default ModalProfile;