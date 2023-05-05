import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CartProduct from "../Home/CartProduct"


const SimilarProducts = ({product}) => {

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`
    const [filterProduct, getProductByCategory] = useFetch(url)

    useEffect(() =>{
        if(product){
            getProductByCategory()
        }
    }, [product])

    console.log(filterProduct);

    return (
    <section>
        <h2>Discover similar products</h2>
        <div>
            {
                filterProduct?.map(prod => {
                    if(prod.id !== product.id){
                        return (
                            <CartProduct
                            key={prod.id}
                            product={prod} 
                            />
                        )
                    }
                })
            }
        </div>
    </section>
  )
}

export default SimilarProducts