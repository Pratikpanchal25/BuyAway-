import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(
          `Fetching from URL: http://localhost:5500/findById/${productId}`
        );
        const response = await axios.get(
          `http://localhost:5500/findById/${productId}`
        );
        console.log("Response received:", response);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  console.log(product);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!product) {
    return <h1>No product found</h1>;
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded-3xl"
              src={product.productImage}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.productName}
              </h1>

              <p className="leading-relaxed mt-2 w-[30rem]">{product.about}</p>

              <div className="flex">
                <span className="title-font mt-1 font-medium text-2xl text-gray-900">
                  Rs.{product.price}
                </span>
                <button
                  onClick={() => navigate(`/buynow/${productId}`)}
                  className="flex mt-5 ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:scale-110 transition duration-200 rounded"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
