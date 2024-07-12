import { Product } from "../Models/product.model.js";
import ApiError from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addProduct = async (req, res) => {
  const { productId, productName, price, about, category } = req.body;
  console.log(productName);

  if (
    [productId, productName, price, about, category].some(
      (field) => field == ""
    )
  ) {
    throw new ApiError(400, "All Fields Are Required");
  }
  console.log("Req files", req.file);
  const productImageLocalPath = req.file.path;
  console.log("Local Path", productImageLocalPath);
  if (!productImageLocalPath) throw new ApiError(401, "Problem In Multer");

  const productImageCloudinary = await uploadOnCloudinary(
    productImageLocalPath
  );
  if (!productImageCloudinary)
    throw new ApiError(401, "Error Occured In Cloudinary");

  const createdProduct = await Product.create({
    productId,
    productName,
    price,
    about,
    category,
    productImage: productImageCloudinary.url,
  });

  res
    .status(200)
    .json({ message: "Product Created Succesfully", createdProduct });
};

const getProducts = async (req, res) => {
  const products = await Product.findAll();
  if (!products) throw new ApiError(401, "Problem In Finding All Products...");
  res.status(200).json(products);
};

const findById = async (req, res) => {
  const id = req.params.id;
  if (!id) throw new ApiError(401, "No id Found");

  const product = await Product.findOne({
    where: {
      productId: id,
    },
  });
  if (!product) throw new ApiError(401, "No Product Found");

  res.status(200).json(product);
};
export const productController = {
  addProduct,
  getProducts,
  findById,
};
