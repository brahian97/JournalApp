import { types } from "../types/types"

const initialState = {
    notes: [],
    active: null,
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.noteAdd:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    content: action.content
                }
            ]
            
        case types.noteRemove:
            return state.filter(note => note.id !== action.id)

        case types.noteUpdate:
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
            }

        case types.noteActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.noteLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        default:
            return state
    }
}