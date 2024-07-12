import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PorductUi from "../Components/PorductUi";
import { Link } from "react-router-dom";
function Coolers() {
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5500/getProducts")
      .then((data) => {
        return data.json();
      })
      .then((allProducts) => {
        setProducts(allProducts);
      });
  }, []);

  if (products.length === 0) {
    return (
      <h1 className="h-[30rem] w-full flex justify-center items-center text-[2rem]">
        No Products Found...
      </h1>
    );
  }

  return (
    <div>
      <section className="text-black body-font">
        <div className="container px-5   py-24 mx-auto flex flex-wrap justify-center sm:justify-start items-start ">
          {products?.map((product) => {
            if (product.category === "Cooler") {
              return (
                <Link
                  key={product.productId}
                  to={`/product/${product.productId}/`}
                >
                  <PorductUi
                    category={product.category}
                    productName={product.productName}
                    price={product.price}
                    productImage={product.productImage}
                  />
                </Link>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}

export default Coolers;
