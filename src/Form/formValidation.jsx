import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {addStudent} from "./slice.js";

function FormValidation() {
    const data = useSelector((state) => state.formValidationReducer);
    const {students} = data
    const dispatch = useDispatch();
    const formValidation = useFormik({
        initialValues: {
            maSV:'',
            email: '',
            hoTen: '',
            soDT:'',

        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Email không hợp lệ").required("Email không được để trống"),
            maSV: Yup.string().required("Mã SV không được để trống").matches(/^[0-9]+$/, "Chỉ được nhập số"),
            hoTen: Yup.string().required("Tên không được để trống").matches(/^[A-Za-zÀ-ỹ]+(?:\s[A-Za-zÀ-ỹ]+)*$/, "Tên không hợp lệ"),
            soDT: Yup.string().required("SĐT không được để trống").matches(/^[0-9]{10}$/, "SĐT phải gồm 10 số"),
        }),
        onSubmit: values => {
            handleSubmit(values);
        }
    })

    const handleSubmit = (e) => {
        dispatch(addStudent(e))
    };

    const renderStudentTable = () => {
        return students?.map((student) => {
            return(
                <tr>
                    <td className="px-6 py-3 text-sm text-gray-700">{student.maSV}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{student.hoTen}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{student.soDT}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{student.email}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">
                        <button
                            className="me-2 inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        >Sửa
                        </button>
                        <button
                            className="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"

                        >Xóa
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <main className="bg-gray-200 min-h-screen flex justify-center py-10">
            <div className="w-full max-w-5xl px-4">
                {/*Card thông tin sinh viên*/}
                <div className="bg-white rounded shadow">
                    {/*Header*/}
                    <div className="bg-gray-800 text-white px-6 py-3 rounded-t">
                        <h2 className="text-lg font-semibold">Thông tin sinh viên</h2>
                    </div>

                    {/*Form */}
                    <div className="p-6">
                        <form id="studentForm" className="space-y-4" onSubmit={formValidation.handleSubmit}>
                            {/*Hàng 1: Mã SV + Họ tên*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Mã SV
                                    </label>
                                    <input
                                        id="maSV"
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                                        placeholder="Nhập mã SV"
                                        onChange={formValidation.handleChange}
                                        value={formValidation.values.maSV}
                                    />
                                    <p id="errorMaSV" className="text-red-500 text-xs mt-1">{formValidation.errors.maSV}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Họ tên
                                    </label>
                                    <input
                                        id="hoTen"
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                                        placeholder="Nhập họ và tên"
                                        onChange={formValidation.handleChange}
                                        value={formValidation.values.hoTen}
                                    />
                                    <p id="errorHoTen" className="text-red-500 text-xs mt-1">{formValidation.errors.hoTen}</p>
                                </div>
                            </div>

                            {/*Hàng 2: SĐT + Email*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Số điện thoại
                                    </label>
                                    <input
                                        id="soDT"
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                                        placeholder="Nhập số điện thoại"
                                        onChange={formValidation.handleChange}
                                        value={formValidation.values.soDT}
                                    />
                                    <p id="errorSoDT" className="text-red-500 text-xs mt-1">{formValidation.errors.soDT}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                                        placeholder="Nhập email"
                                        onChange={formValidation.handleChange}
                                        value={formValidation.values.email}
                                    />
                                    <p id="errorEmail" className="text-red-500 text-xs mt-1">{formValidation.errors.email}</p>
                                </div>
                            </div>

                            {/*Nút thêm*/}
                            <button
                                disabled={!formValidation.isValid}
                                type="submit"
                                className="mt-2 inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                Thêm sinh viên
                            </button>
                        </form>
                    </div>
                </div>

                {/*Bảng danh sách sinh viên*/}
                <div className="bg-white rounded shadow mt-6">
                    {/*Header bảng*/}
                    <div className="bg-gray-800 text-white px-6 py-3 rounded-t">
                        <h2 className="text-lg font-semibold">Danh sách sinh viên</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Mã SV
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Họ tên
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Số điện thoại
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Thao tác
                                </th>
                            </tr>
                            </thead>
                            <tbody id="studentTableBody" className="bg-white divide-y divide-gray-200">
                            {/*Dữ liệu mẫu*/}
                            {renderStudentTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default FormValidation;