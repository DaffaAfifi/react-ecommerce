import { Link } from "react-router-dom";
import Button from "../elements/button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-white border-slate-500 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { path, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={path}
        alt="products"
        className="p-8 rounded-t-lg h-96 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight">
          {title.substring(0, 20) + "..."}
        </h5>
        <p className="text-m">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { id, price, handleAddToCart } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold">
        {price.toLocaleString("us-US", { style: "currency", currency: "USD" })}
      </span>
      <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
