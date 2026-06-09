import axios from "axios"

const productApiInstance = axios.create({
    baseURL: "/api/products",
    withCredentials: true,
})

export async function createProduct(formdata){

    const response = await productApiInstance.post("/", formdata)

    return response.data

}
 
export async function getSellerProducts(){
    
    const response = await productApiInstance.get("/seller")

    return response.data
}

export async function getAllProducts(){

    const response = await productApiInstance.get("/")
    
    return response.data
}

export async function getProductById(productId){

    const response = await productApiInstance.get(`/detail/${productId}`) 

    return response.data

}

export async function addProductVariant(productId, newProductVariant) {

    const formdata = new FormData()

    newProductVariant.images.forEach(image => {
        formdata.append("image", image, image.file)
    })

    formdata.append("stock", newProductVariant.stock)
    formdata.append("price", newProductVariant.price)
    formdata.append("currency", newProductVariant.currency)
    formdata.append("attributes", JSON.stringify(newProductVariant.attributes))


    const response = await productApiInstance.post(`/${productId}/variants`, formdata)

    return response.data
}