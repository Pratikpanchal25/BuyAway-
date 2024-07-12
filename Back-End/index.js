import express from "express";
import "./src/config.js";
import { sequelize } from "./src/config.js";
import { upload } from "./src/Middlewares/multer.middleware.js";
import { productController } from "./src/Controllers/product.controller.js";
import bodyParser from "body-parser";
import cors from "cors";
import { orderController } from "./src/Controllers/orders.controller.js";

sequelize.sync({alter: true});
const app = express();
//sync


app.use(bodyParser.json());
app.use(cors({ origin: "*", credentials: true }));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// routes for Products

app.post(
  "/addProduct",
  upload.single("productImage"),
  productController.addProduct
);
app.get("/getProducts", productController.getProducts);
app.get("/findById/:id", productController.findById);

// router for orders

app.post("/addOrder", orderController.addOrder);
app.get("/getOrders", orderController.getAllOrders);
app.patch("/deleteOrder/:orderId", orderController.deleteOrder);

// App listen

app.listen(5500, () => console.log("App is Listening"));
