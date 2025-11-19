import {useDispatch, useSelector} from "react-redux";
import {updateQuantityCart} from "./slice.js";

export default function Cart() {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.shoppingPhoneReducer.carts);

    const renderListCarts = () => {
        return carts.map((product) => {
            return (
                <tr
                    key={product.maSP}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {product.tenSP}
                    </th>
                    <td className="px-6 py-4">
                        <img src={product.hinhAnh} alt={product.tenSP} width={50}/>
                    </td>
                    <td className="px-6 py-4">
                        <button onClick={() => dispatch(updateQuantityCart({maSP: product.maSP, status: false}))}
                        >
                            -
                        </button>
                        {product.soLuong}
                        <button onClick={() => dispatch(updateQuantityCart({maSP: product.maSP, status: true}))}>
                            +
                        </button>
                    </td>
                    <td className="px-6 py-4">${product.giaBan * product.soLuong}</td>
                </tr>
            );
        });
    };

    return (
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                {/* Modal header */}
                <div
                    className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Carts
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal"
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal body */}
                <div className="p-4 md:p-5 space-y-4">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                            </thead>
                            <tbody>{renderListCarts()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
