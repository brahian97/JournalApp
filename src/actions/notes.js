import { db } from "../firebase/firebase-config"

export const addNewNote = () => {
    return (dispatch, getState) => {
        const { uid } = getState().auth

        const newNote = {
            title: '',
            content: '',
            date: new Date().getTime(),
        }

        const document =  db.collection(`${uid}/journal/notes`).add(newNote)
    }
}