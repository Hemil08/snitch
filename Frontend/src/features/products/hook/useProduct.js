import {setSellerProdcuts} from "../state/product.slice.js"
import { getSellerProducts, createProduct} from "../service/product.api.js"
import { useDispatch } from "react-redux"

export const useProduct = () => {

    const dispatch = useDispatch()

    async function handleCreateProduct(formdata){
        const data = await createProduct(formdata)

        return data.product
    }

    async function handleGetSellerProducts(){
        const data = await getSellerProducts()
        dispatch(setSellerProdcuts(data.products))
        return data.products
    }

    async function handleGetAllProducts(){
        const data = await getAllProducts() 
        dispatch(setSellerProdcuts(data.products))
    }

    return {handleCreateProduct, handleGetSellerProducts, handleGetAllProducts}
}