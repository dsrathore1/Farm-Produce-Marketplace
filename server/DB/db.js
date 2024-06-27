import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: "postgres",
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected to :", sequelize.getDatabaseName());
  } catch (error) {
    console.error("PostgreSQL connection failed:", error);
    process.exit(1);
  }
};

export { sequelize, connectDB };
