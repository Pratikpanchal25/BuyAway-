import { Order } from "../Models/order.model.js";
import ApiError from "../utils/ApiError.js";

const addOrder = async (req, res) => {
  const {
    orderId,
    username,
    mo_number,
    email,
    address,
    date,
    productName,
    productId,
    price,
    productImage,
  } = req.body;

  if (
    [
      orderId,
      username,
      mo_number,
      email,
      address,
      date,
      productName,
      productId,
      price,
      productImage,
    ].some((field) => field == null)
  ) {
    throw new ApiError(401, "Every Field Is Important...");
  }

  const order = await Order.create({
    orderId,
    username,
    mo_number,
    email,
    address,
    productName,
    date,
    productId,
    price,
    productImage,
  });

  if (!order) throw new ApiError(401, "Order Not Placed...");

  res.status(200).json(order);
};

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll({order: [
    ['createdAt', 'ASC'] 
  ]});
  if (!orders) throw new ApiError(401, "No Orders Found...");

  res.status(200).json(orders);
};

const deleteOrder = async (req, res)=>{
  await Order.destroy({
    where: {
      orderId: req.params.orderId
    }
  });

  res.status(200).json({message: "Order Deleted..."})
}

export const orderController = {
  addOrder,
  getAllOrders,
  deleteOrder
};
