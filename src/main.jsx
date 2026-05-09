import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import App from './App.jsx'
import Hello from './Hello.jsx' //se não colocar ./ o Hello vai ser procurado dentro do node_modules
import { Product } from './Product.jsx' //Product está entre chaves pq usei só o 'export' e não o 'export default'

const DATA = [
  { title: "Iphone", price: 10000 },
  { title: "XBox", price: 5000 },
  { title: "Mesa", price: 200 },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello name="Rafa" /> 
    <Hello name="Cris" />

    {DATA.map((product) => <Product title={product.title} price={product.price} />)}

    
  </StrictMode>,
)
