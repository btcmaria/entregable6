import { useSelector } from "react-redux"
import CartProduct from "../components/Home/CartProduct"

const Home = () => {

    const  { productsGlobal} = useSelector(state => state)


  return (
    <div>
        {
            productsGlobal?.map(prod => (
                <CartProduct
                key={prod.id}
                product={prod}
                />
            ))
        }
    </div>
  )
}

export default Home