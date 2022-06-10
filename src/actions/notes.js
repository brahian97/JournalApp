import Swal from "sweetalert2"
import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"

export const addNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newNote = {
            title: '',
            content: '',
            date: new Date().getTime(),
        }

        const document =  await db.collection(`${uid}/journal/notes`).add(newNote)

        dispatch(activeNote(document.id, newNote))
    }
}

export const activeNote = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const notes = await loadNotes(uid)

        dispatch(setNotes(notes))
    }
}

const setNotes = (notes) => ({
    type: types.noteLoad,
    payload: notes
})

export const saveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const noteToFirestore = { ...note }
        delete noteToFirestore.id

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore).then(() => {
            dispatch(refreshNote(note.id, note)) 
            Swal.fire('Note Saved', '', 'success')
        })
    }
}

export const refreshNote = (id, note) => ({
    type: types.noteUpdate,
    payload: {
        id, note
    }
})