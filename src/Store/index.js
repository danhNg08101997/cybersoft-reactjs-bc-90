import {configureStore} from '@reduxjs/toolkit'
import shoppingPhoneReducer from '../ShoppingPhoneRedux/slice.js';
import formValidationReducer from '../Form/slice.js';

const store = configureStore({
    reducer: {
        shoppingPhoneReducer,
        formValidationReducer,
    }
})
export default store;