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
            const studentPayload = {
                maSV: student.maSV,
                hoTen: student.hoTen,
                email: student.email,
                soDT: student.soDT,
                status: 'create',
            };
            const index = findIndexStudent(studentPayload.maSV, state.students);
            let newStudent = [...state.students];
            if (index !== -1) {
                if (studentPayload.status === 'create') {
                    alert(`SV có [maSV: ${student.maSV} - email: ${student.email}] đã tồn tại`);
                }else {
                    console.log("🚀 ~ addStudent ~ studentPayload: ", studentPayload);
                }
            } else {
                newStudent.push(studentPayload);
            }
            state.students = newStudent;
        },
        editStudent(state, action) {
            const student = action.payload
            const {maSV, status} = student
            const index = findIndexStudent(maSV, state.students);
            console.log("🚀 ~ editStudent ~ state.students: ", state.students[index]);
            console.log("🚀 ~ editStudent ~ index: ", index);
            if (index !== -1) {
                let newStudent = [...state.students];
                console.log("🚀 ~ editStudent ~ newStudent: ", newStudent);
                if (status === 'edit') {
                    newStudent[index].status = 'edit';
                    console.log("🚀 ~ editStudent ~ newStudent: ", newStudent);
                }
            }
        },
        removeStudent(state, action) {
            const student = action.payload
            const {maSV, status} = student
            const index = findIndexStudent(maSV, state.students);
            if (index !== -1) {
                let newStudent = [...state.students];
                if(status === 'remove') {
                    newStudent.splice(index, 1);
                }
            }
        }
    }
})

const findIndexStudent = (maSV, students) => {
    return students.findIndex((student) => student.maSV === maSV);
};

export const {addStudent, editStudent, removeStudent} = formValidationSlice.actions;

export default formValidationSlice.reducer