import { useEffect, useState } from "react";
import Button from "../components/elements/button";
import CardProduct from "../components/fragments/cardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCard from "../components/fragments/tableCard";
import Navbar from "../components/layouts/navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useLogin();

  useEffect(() => {
    getProducts((err, data) => {
      if (err) {
        console.error("Error fetching products:", err);
      } else {
        console.log(data);
        setProducts(data);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header path={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer id={product.id} price={product.price} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCard products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
