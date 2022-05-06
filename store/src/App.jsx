import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import { Routes, Route } from 'react-router-dom'
import Success from "./pages/Success";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
};

export default App;