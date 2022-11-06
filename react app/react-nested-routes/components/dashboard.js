import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
      <h2>React Nested Routes Example</h2>
      <div className="product-nav mb-5">
        <Link to="/dashboard/product">Product</Link>
        <Link to="/dashboard/details">Product Details</Link>
      </div>
      <Outlet />
    </div>
  )
}
export default Dashboard