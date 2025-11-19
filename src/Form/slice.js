import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    students: []
}

const formValidationSlice = createSlice({
    name: 'formValidation',
    initialState,
    reducers: {
        addStudent(state, action) {
            console.log("🚀 ~ addStudent ~ action: ", action);
        },
    }
})

export const {addStudent} = formValidationSlice.actions;

export default formValidationSlice.reducer