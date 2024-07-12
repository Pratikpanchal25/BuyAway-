import { sequelize } from "../config.js";
import { DataTypes } from "sequelize";

export const Order = sequelize.define("orders", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mo_number: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      isMobileValid(value) {
        const mobileNumberPattern = /^[1-9]\d{9}$/; 
        if (!mobileNumberPattern.test(value)) {
          throw new Error("Mobile number must be a valid 10-digit number");
        }
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
