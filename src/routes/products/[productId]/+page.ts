
export const load = ({ fetch, params } : any) => {
    console.log('params: ', params);
    const productId = params.productId;

    const fetchProducts = async (id: string) => {
        const res = await fetch(`https://ecommerce-task-api-v1.onrender.com/products/${id}`)
        const data = await res.json();
        return data;
    }
    const product = fetchProducts(productId)
    // console.log(product);
    
    return product
}