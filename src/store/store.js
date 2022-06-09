import { configureStore } from '@reduxjs/toolkit'
import { combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'
import { noteReducer } from '../reducers/notesReducer'
import { uiReducer } from '../reducers/uiReducers'

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: noteReducer
})

export const store = configureStore(
    {reducer: reducers},
    applyMiddleware(thunk)
)