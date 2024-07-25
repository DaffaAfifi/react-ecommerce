import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/totalPrice";

const TableCard = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      let total = 0;
      cart.forEach((item) => {
        total +=
          item.qty * products.find((product) => product.id === item.id).price;
      });
      dispatch({ type: "UPDATE", payload: { total } });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  return (
    <table className="text-left table-auto border-separate border-spacing-x-5">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 20) + "..."}</td>
                <td>
                  {product.price.toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  {(product.price * item.qty).toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>
              ${" "}
              {total.toLocaleString("us-US", {
                style: "currency",
                currency: "USD",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCard;
