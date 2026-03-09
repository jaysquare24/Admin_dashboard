import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Products } from './pages/products/Products'
import { Users } from './pages/users/Users'
import { Carts } from './pages/carts/Carts'

function App() {

  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="users" element={<Users />} />
            <Route path="carts" element={<Carts />} />
          </Route>
        </Routes>
      
    </BrowserRouter>    
    
  )
}

export default App
