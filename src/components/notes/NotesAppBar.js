import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../../actions/notes";

const NotesAppBar = () => {

    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)

    const handleSaveNote = () => {
        dispatch(saveNote(active))
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn" onClick={handleSaveNote}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar;