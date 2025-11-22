import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
/**
 * xử lý trạng thái đăng nhập
 * nếu nhập vào tài khoản là cybersoft mật khẩu là cybersoft123 -> điều hướng đến trang home nếu sai thì điều hướng sang trang forgot-pass
 *
 */
//route: dùng để khai báo đường dẫn url và component nào sẽ được render tương ứng khi url đó khớp
//useNavigate: 1 hook dùng để điều hướng trang trong các component
const DemoUseNavigate = () => {
    const navigate = useNavigate();

    const formLogin = useFormik({
        initialValues: {
            taiKhoan: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log("values", values);
            if (
                values.taiKhoan === "cybersoft" &&
                values.password === "cybersoft123"
            ) {
                //điều hướng về trang home
                navigate("/");
            } else {
                //điều hướng sang trang forgot-pass
                navigate("/demo-use-navigate/forgot-pass");
                // navigate("/demo-use-navigate/forgot-pass", {replace: true});replace: true ko lưu lịch sử trang hiện tại vào trình duyệt
            }
        },
    });

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full max-w-5xl px-4">
                {/* Bên trái: Logo & mô tả */}
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                        facebook
                    </h1>
                    <p className="text-xl text-gray-800">
                        Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
                        của bạn.
                    </p>
                </div>

                {/* Bên phải: Form đăng nhập */}
                <div className="md:w-1/3 w-full">
                    <form
                        className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-4"
                        onSubmit={formLogin.handleSubmit}
                    >
                        <input
                            type="text"
                            id="taiKhoan"
                            name="taiKhoan"
                            placeholder="Email hoặc số điện thoại"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                            onChange={formLogin.handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                            onChange={formLogin.handleChange}
                        />
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md text-sm">
                            Đăng nhập
                        </button>
                        <div className="text-center">
                            <a href="#" className="text-blue-600 text-xs hover:underline">
                                Quên mật khẩu?
                            </a>
                        </div>

                        <div className="border-t border-gray-300 my-2" />

                        <div className="flex justify-center">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md text-sm">
                                Tạo tài khoản mới
                            </button>
                        </div>
                    </form>

                    <p className="text-xs text-center mt-4 text-gray-700">
                        <span className="font-semibold">Tạo Trang</span> dành cho người nổi
                        tiếng, nhãn hiệu hoặc doanh nghiệp.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DemoUseNavigate;
