import {setProducts, setSellerProdcuts} from "../state/product.slice.js"
import { getSellerProducts, createProduct, getAllProducts, getProductById} from "../service/product.api.js"
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
        dispatch(setProducts(data.products))
    }

    async function handleGetProductById(productId){
        const data = await getProductById(productId)
        return data.product
    }

    return {handleCreateProduct, handleGetSellerProducts, handleGetAllProducts, handleGetProductById}
}