import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductIdInfo from "../components/ProductId/ProductIdInfo"
import SliderImg from "../components/ProductId/SliderImgs"
import SimilarProducts from "../components/ProductId/SimilarProducts"


const ProductId = () => {

    const {id} = useParams()

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    const [ product, getProductById] = useFetch(url)

    useEffect(() => {
        getProductById()
    }, )

  return (
    <div>
        <SliderImg product = {product}/>
        <ProductIdInfo product ={product} />
        <SimilarProducts product = {product}/>
    </div>
  )
}

export default ProductId