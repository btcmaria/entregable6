import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <h1><Link to={'/'}>e-comerce</Link></h1>
        <nav>
            <ul>
                <li><Link to={'/login'}>Ligin</Link></li>
                <li><Link to={'/register'}>Purchases</Link></li>
                <li><Link to={'/'}>Cart</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header