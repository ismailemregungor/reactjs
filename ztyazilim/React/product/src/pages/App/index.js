import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "../Products";
import "./index.scss";
import Product from "../Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {/* <Link to="/product">Product</Link> */}
        <Routes>
          <Route path="/" element={<ProductsPage />} exact />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
