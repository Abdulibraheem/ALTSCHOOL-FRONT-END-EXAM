import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Product from './components/Product'
import Details from './components/Details'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default function App() {
  return (
    <div className="container mt-5 text-center">
      <BrowserRouter>
        <nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="dashboard">
            Dashboard
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="product" element={<Product />} />
            <Route path="details" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
