import { useNavigate } from "react-router-dom"
import './styles/cartProduct.css'

const CartProduct = ({product}) => {

    const navigate = useNavigate()

    const handleSlectProduct = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        e.stopPropagation()
    }
  return (
    <article className="product" onClick={handleSlectProduct}>
        <header className="product__header">
            <img className="product__img product__img-1" src={product.images[0].url} alt="" />
            <img className="product__img product__img-2" src={product.images[1].url} alt="" />
        </header>
        <div className="product__body">
            <section>
            <h4 className="product__subtitle">{product.brand}</h4>
            <h3 className="product__title">{product.title}</h3>
            </section>
        </div>
        <div className="product__price">
            <span className="product__price-label">Price</span>
            <span className="product__price-value">{product.price}</span>
        </div>
        <button onClick={handleBtnClick} className="product__btn">
        <i className='bx bxs-cart product__btn-icon' ></i>
        </button>
    </article>
  )
}

export default CartProduct