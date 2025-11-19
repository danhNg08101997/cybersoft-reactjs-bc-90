import {createSlice} from '@reduxjs/toolkit'
import data from './data.json'

const initialState = {
    products: data,
    productDetails: null,
    carts: []
}

const shoppingPhoneSlice = createSlice(
    {
        name: 'shoppingPhone',
        initialState,
        reducers: {
            setProductDetails(state, action) {
                const product = action.payload
                state.productDetails = product
            },
            addToCart(state, action) {
                const product = action.payload
                const productAddToCart = {
                    maSP: product.maSP,
                    tenSP: product.tenSP,
                    hinhAnh: product.hinhAnh,
                    giaBan: product.giaBan,
                    soLuong: 1,
                };
                const index = findIndexCarts(productAddToCart.maSP, state.carts);
                let newCarts = [...state.carts];
                if (index !== -1) {
                    // product tồn tại => Update qty
                    newCarts[index].soLuong += 1;
                } else {
                    // product k tồn tại => thêm
                    newCarts.push(productAddToCart);
                }
                state.carts = newCarts
            },
            updateQuantityCart(state, action) {
                const product = action.payload
                const {maSP, status} = product
                const index = findIndexCarts(maSP, state.carts);
                if (index !== -1) {
                    let newCarts = [...state.carts];
                    if(status) {
                        newCarts[index].soLuong += 1;
                    }else {
                        newCarts[index].soLuong -= 1;
                        if(newCarts[index].soLuong === 0) {
                            newCarts.splice(index, 1);
                        }
                    }
                    state.carts = newCarts
                }
            }
        }
    }
)

const findIndexCarts = (maSP, carts) => {
  return carts.findIndex((product) => product.maSP === maSP);
};


export const {setProductDetails,addToCart,updateQuantityCart} = shoppingPhoneSlice.actions;

export default shoppingPhoneSlice.reducer