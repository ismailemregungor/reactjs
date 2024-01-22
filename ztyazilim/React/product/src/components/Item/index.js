import { /*Link,*/ useNavigate } from "react-router-dom";
import "./index.scss";

const ProductItem = ({ data }) => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate(`/product/${data.id}`);
  };

  return (
    <div className="box">
      {/* <Link to={`/product/${data.id}`}> */}
      <img className="box-img" src={data.image} alt="" />
      {/* </Link> */}
      <a
        href="https://assiagroupe.tech/noonpost/html/assets/img/author/1.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.category}
      </a>
      <h5>
        <button onClick={onClickButton}>{data.title}</button>
      </h5>
      <p>{data.description}</p>
      <ul className="profile">
        <li>
          <img
            alt=""
            src="https://assiagroupe.tech/noonpost/html/assets/img/author/1.jpg"
          />
        </li>
        <li>
          <a
            href="https://assiagroupe.tech/noonpost/html/assets/img/author/1.jpg"
            rel="noopener noreferrer"
          >
            {data.price}
          </a>
        </li>
        <li className="dot"></li>
        <li>{data.rating.rate}</li>
      </ul>
    </div>
  );
};

export default ProductItem;
