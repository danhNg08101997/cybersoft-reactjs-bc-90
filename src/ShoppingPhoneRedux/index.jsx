import Phone from "./phone";
import Detail from "./detail";
import Cart from "./cart";
import {useSelector} from "react-redux"

export default function ShoppingPhoneRedux() {
    const data = useSelector(state => state.shoppingPhoneReducer);
    const {products, carts} = data;

    const renderListProducts = () => {
        return products?.map((product) => (
            <Phone
                key={product.maSP}
                productProp={product}
            />
        ));
    };

    // Tính tổng số lượng sản phẩm
    const totalQty = () => {
        const total = carts.reduce(
            (total, product) => (total += product.soLuong),
            0
        );
        return total;
    };

    return (
        <div>
            <h1>ShoppingPhone</h1>
            <h1>Total Qty Carts: {totalQty()}</h1>
            <Cart/>
            <div className="container mx-auto grid grid-cols-3 gap-10">
                {renderListProducts()}
            </div>
            <Detail/>
        </div>
    );
}
