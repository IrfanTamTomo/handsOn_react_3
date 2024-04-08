import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Format from './Format'

const App = () => {
  const[products, setProducts] = useState([])
  const getProducts = () => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      setProducts(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return(
    <div className='App'>
      <h1 className='app'>App</h1>
        {
        products.map((item) => (
          <Format item={item}/>  
      ))
      }
    </div>
  )
}

export default App