import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { cleanProduct } from "../redux/cartRedux";
import { publicRequest, userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await publicRequest.post("/orders", {
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
          email: data.billing_details.email,
          name: data.billing_details.name,
        });
        setOrderId(res.data._id);
        dispatch(
            cleanProduct()
        );
      } catch(err) {
          console.log(err)
      }
    };
    data && createOrder();
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/"><button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
    </div>
  );
};

export default Success;