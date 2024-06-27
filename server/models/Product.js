import { DataTypes } from "sequelize";
import { sequelize } from "../DB/db.js";
import User from "./User.js";

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

Product.belongsTo(User, { as: "farmer", foreignKey: "farmerId" });
User.hasMany(Product, { foreignKey: "farmerId" });

export default Product;
