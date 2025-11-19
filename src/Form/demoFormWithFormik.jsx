import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

function DemoFormWithFormik() {
        const signupForm = useFormik({
            initialValues: {
                fullName: '',
                email: '',
                password: '',
            },
            validationSchema: Yup.object().shape({
                fullName: Yup.string().required("Full name is required"),
                email: Yup.string().email("Email is not match regex").required("Email is required"),
                password: Yup.string().min(3).required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password is not match regex"),
            }),
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            },
        })

    return (
        <>
            <main className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Đăng ký tài khoản
                </h2>

                <form className="space-y-4" onSubmit={signupForm.handleSubmit}>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Họ và tên
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Nguyễn Văn A"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.fullName}
                        />
                        <p id="errorFullName" className="text-red-500 text-xs mt-1">{signupForm.errors.fullName}</p>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="email@domain.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.email}
                        />
                        <p id="errorEmail" className="text-red-500 text-xs mt-1">{signupForm.errors.email}</p>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.password}
                        />
                        <p id="errorPassword" className="text-red-500 text-xs mt-1">{signupForm.errors.password}</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 mt-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
                    >
                        Đăng ký
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Đã có tài khoản?
                        <a href="#" className="text-indigo-600 font-medium hover:underline">
                            Đăng nhập
                        </a>
                    </p>
                </form>
            </div>
            </main>
        </>
    );
}

export default DemoFormWithFormik;