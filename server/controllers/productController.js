import Product from "../models/Product.js";

const createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const farmerId = req.user.id;

  try {
    const product = await Product.create({
      name,
      description,
      price,
      quantity,
      farmerId,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: User, as: "farmer", attributes: ["name"] }],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { createProduct, getProducts };
