import { useDispatch, useSelector } from "react-redux";
import { logout, startEditProfile } from "../../actions/auth";
import { addNewNote } from "../../actions/notes";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {

    const dispatch = useDispatch()
    const {name} = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(logout())
    }

    const handleAddNewNote = () => {
        dispatch(addNewNote())
    }

    const handleEditProfile = () => {
        dispatch(startEditProfile())
    }

    return (
        <aside className='journal__sidebar' >
            <div className='journal__sidebar-navbar mt-1' >
                <h3 className='pointer ml-2' onClick={handleEditProfile}>
                    <i className='far fa-moon' />
                    <span>{name}</span>
                </h3>

                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>

            <div className='journal__new-entry' onClick={handleAddNewNote}>
                <i className='far fa-calendar-plus fa-5x' ></i>
                <p className='mt-3'>New entry</p>
            </div>

            <JournalEntries />
        </aside>
    );
}

export default Sidebar;