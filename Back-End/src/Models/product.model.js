import { sequelize } from "../config.js";
import { DataTypes } from "sequelize";

export const Product = sequelize.define("Product", {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  about:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  category:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  productImage:{
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  timestamps: true
});
