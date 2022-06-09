import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";

const ProfileScreen = () => {

    const { name: userName } = useSelector(state => state.auth)

    const [{name, email}, handleInputChange] = useForm({
        name: userName,
        email: 'brahian97@outlook.com'
    })

    return (
        <div className='profile__main'>
            <div className="profile__box-container">
                <div>
                    <h3 className='profile__title'>Profile</h3>
                    <form className='mt-5'>
                        <div className='profile__form-div-content'>
                            <input id='name' type='text' placeholder='Name' name='name' className='profile__form-input mb-2' value={name} onChange={handleInputChange}/>
                            <label htmlFor='name' className='profile__form-input-label'>Name</label>
                        </div>
                        <div className='profile__form-div-content'>
                            <input id='name' type='text' placeholder='Name' name='name' className='profile__form-input disabled mb-2' value={email} onChange={handleInputChange} disabled />
                            <label htmlFor='name' className='profile__form-input-label'>Email</label>
                        </div>
                        <button type='submit' className='btn btn-primary' style={{fontSize: '1.2rem'}}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;