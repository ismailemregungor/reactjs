import ProductItem from "../../components/Item";

const ProductsLayout = ({ products }) => {
  return (
    <div className="container">
      {products?.map((data) => (
        <ProductItem key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ProductsLayout;
