import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductsLayout from "../../layouts/Products";
import { getProducts } from "../../services/product";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response);
      setProducts(response);
    });
    
    const name = searchParams.get("name");
    console.log(name);
  }, []);

  return <ProductsLayout products={products} />;
};

export default ProductsPage;
