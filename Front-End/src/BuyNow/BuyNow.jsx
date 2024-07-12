import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function BuyNow() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  const [username, setUsername] = useState("");
  const [mo_number, setMoNumber] = useState();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(
          `Fetching from URL: http://localhost:5500/findById/${productId}`
        );
        const response = await axios.get(
          `http://localhost:5500/findById/${productId}`
        );
        // console.log("Response received:", response);
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

  const handlePlaceOrder = async () => {
    alert("Place Order?...");
    try {
      const currentDate = new Date();

      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();

      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const seconds = String(currentDate.getSeconds()).padStart(2, "0");

      const dateTimeString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

      console.log(dateTimeString);

      const res = await axios.post(" http://localhost:5500/addOrder", {
        orderId: parseInt(Math.random() * 100000),
        username,
        mo_number,
        email,
        address,
        productName: product.productName,
        productId: product.productId,
        price: product.price,
        productImage: product.productImage,
        date: dateTimeString,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // console.log(product);

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
      <form
        action=""
        className="min-h-screen w-screen flex flex-col justify-center items-center p-5 poppins-bold-italic"
      >
        <div className="bg-[#cfd3d7] shadow-md shadow-black h-[36rem] sm:w-[30rem] gap-5 flex flex-col justify-center items-start sm:pl-[4rem] pl-[2rem] rounded-lg sm:pr-0 mt-1 pr-3">
          <div className="">
            <h1>Full Name:</h1>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-black border-[1px] border-black p-1 rounded-sm w-[15rem]"
              type="text"
              required
            />
          </div>
          <div className="">
            <h1>Mobile Number:</h1>
            <input
              value={mo_number}
              onChange={(e) => setMoNumber(e.target.value)}
              className="text-black border-[1px] border-black p-1 rounded-sm"
              type="number"
              required
            />
          </div>

          <div>
            <h1>Email:</h1>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black p-1 border-[1px] border-black rounded-sm "
              type="email"
              required
            />
          </div>
          <div>
            <h1>Address:</h1>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="text-black p-2 border-[1px] w-[18rem] sm:w-[20rem] h-[10rem] rounded-sm border-black"
              required
            ></textarea>
          </div>

          <div>
            <button
              onClick={handlePlaceOrder}
              className="bg-black text-xl hover:scale-[1.1] transition duration-[0.3s] p-3 w-[15rem] rounded-2xl text-white"
            >
              Place Order...
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BuyNow;
