import { types } from "../types/types"

const initialState = {
    notes: [],
    active: null,
}

export const noteReducer = (state = initialState, action) => {
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
            return state.map(note => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        title: action.title,
                        content: action.content
                    }
                } else {
                    return note
                }
            })

        default:
            return state
    }
}