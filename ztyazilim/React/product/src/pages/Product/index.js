import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return id;
};

export default Product;
