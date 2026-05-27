import {createSlice} from "@reduxjs/toolkit"

export const productSlice = createSlice({

    name: "product",
    initialState:{
        sellerproducts:[],
        products: []
    },
    reducers:{
        setSellerProdcuts:(state,action) => {
            state.sellerproducts = action.payload
        },
        setProducts:(state,action) => {
            state.products = action.payload
        }
    }
})

export const {setSellerProdcuts, setProducts} = productSlice.actions
export default productSlice.reducer