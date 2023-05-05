import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  const dispatch =useDispatch()

  useEffect(() =>{
    dispatch(getAllProductsThunk())
  },[dispatch])

  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:id' element={<ProductId/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
    </div>
  )
}

export default App
