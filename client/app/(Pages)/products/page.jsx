import Image from "next/image";

const products = [
  {
    id: "1",
    name: "Fresh Organic Apples",
    description: "Crisp and juicy apples directly from the orchard.",
    image: "/apple.jpg",
    price: "$10 per kg",
    deliveryCharge: "$2",
    farmer: {
      name: "Farmer John",
      distance: "5 km",
      rating: 4.5,
    },
  },
  {
    id: "2",
    name: "Natural Honey",
    description: "Pure and natural honey sourced from local beekeepers.",
    image: "/honey.jpg",
    price: "$15 per jar",
    deliveryCharge: "$3",
    farmer: {
      name: "Farmer Emily",
      distance: "10 km",
      rating: 4.7,
    },
  },
  {
    id: "3",
    name: "Farm Fresh Eggs",
    description: "Organic eggs from free-range chickens.",
    image: "/egg.jpg",
    price: "$5 per dozen",
    deliveryCharge: "$1",
    farmer: {
      name: "Farmer Mike",
      distance: "8 km",
      rating: 4.6,
    },
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                height={500}
                width={500}
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-600 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  Market Price: {product.price}
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  Delivery Charge: {product.deliveryCharge}
                </p>
                <div className="flex items-center mb-4">
                  <p className="text-lg font-semibold text-gray-800 mr-2">
                    Farmer: {product.farmer.name}
                  </p>
                  <span className="text-sm text-gray-500">
                    ({product.farmer.distance} away)
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-800 mr-2">
                    Rating:
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((star, index) => {
                      return (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${
                            index < Math.floor(product.farmer.rating)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.684a1 1 0 00.95.69h4.908c.969 0 1.372 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.52 4.683c.3.922-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.978 2.89c-.784.57-1.838-.196-1.54-1.118l1.52-4.683a1 1 0 00-.364-1.118L2.632 9.11c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.52-4.684z"></path>
                        </svg>
                      );
                    })}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {product.farmer.rating} stars
                  </span>
                </div>
                <a
                  href={`/products/${product.id}`}
                  className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
