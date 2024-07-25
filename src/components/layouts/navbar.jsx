import { useSelector } from "react-redux";
import Button from "../elements/button";
import { useEffect, useState } from "react";
import { useTotalPrice } from "../../context/totalPrice";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between h-[50px] bg-blue-600 items-center px-10 text-white">
      <h1>
        Total Cart: {totalCart} | Total Price:{" "}
        {total.toLocaleString("us-US", {
          style: "currency",
          currency: "USD",
        })}
      </h1>
      <Button classname="bg-red-600" onClick={handleLogout} type="button">
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
