import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    students: []
}

const formValidationSlice = createSlice({
    name: 'formValidation',
    initialState,
    reducers: {
        addStudent(state, action) {
            const student = action.payload
            const index = findIndexStudent(student.maSV, state.students);
            let newStudent = [...state.students];
                console.log("🚀 ~ addStudent ~ index: ", index);
            if (index !== -1) {
                newStudent.splice(index, 1);
            } else {
                newStudent.push(student);
            }
            state.students = newStudent;
        },
    }
})

const findIndexStudent = (maSV, students) => {
    return students.findIndex((student) => student.maSV === maSV);
};

export const {addStudent} = formValidationSlice.actions;

export default formValidationSlice.reducer