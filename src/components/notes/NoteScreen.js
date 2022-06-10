import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import NotesAppBar from "./NotesAppBar";
import { activeNote } from "../../actions/notes";

const NotesScreen = () => {

    const { active } = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const [ formValues, handleInputChange, reset] = useForm(active)

    const { title, content } = formValues

    useEffect(() => {
        reset(active)
    }, [reset, active])

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [dispatch, formValues])

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="content"
                    value={content}
                    onChange={handleInputChange}
                ></textarea>

                {
                    active.url &&
                    <div className="notes__image">
                        <img
                            src={active.url}
                            alt="imagen"
                        />
                    </div>
                }



            </div>
        </div>
    );
}

export default NotesScreen;