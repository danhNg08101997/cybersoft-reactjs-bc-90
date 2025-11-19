import {useDispatch} from 'react-redux';
import {addToCart, setProductDetails} from "./slice.js";

export default function Phone(props) {
    const dispatch = useDispatch();
    const {productProp} = props;
    const {hinhAnh, tenSP} = productProp;

    const handleDetail = () => {
        dispatch(setProductDetails(productProp));
    };

    const handleAddToCart = () => {
        dispatch(addToCart(productProp))

    };

    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={hinhAnh} alt={tenSP}/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {tenSP}
                    </h5>
                </a>
                <button
                    onClick={handleDetail}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Detail
                </button>
                <button
                    onClick={handleAddToCart}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
}
