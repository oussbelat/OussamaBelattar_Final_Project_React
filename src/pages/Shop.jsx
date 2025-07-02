import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { CartContext } from "../context/card";
import Images from "../constant/image";

const productList = [
  {
    productId: 101,
    productName: "Boxy T-Shirt with Roll Sleeve Detail",
    price: 20.0,
    productCategory: "Women",
    color: "blue",
    availableSizes: ["S", "M", "L"],
    hasDiscount: false,
    productImage: Images.fr1,
  },
  {
    productId: 102,
    productName: "Boxy1 T-Shirt with Roll Sleeve",
    price: 20.0,
    productCategory: "Women",
    color: "yellow",
    availableSizes: ["S", "M", "L", "XL"],
    hasDiscount: false,
    productImage: Images.fr2,
  },
  {
    productId: 103,
    productName: "Boxy3 T-Shirt with Roll Sleeve",
    price: 30.0,
    productCategory: "Women",
    color: "grey",
    availableSizes: ["S", "M", "L", "XL"],
    hasDiscount: true,
    productImage: Images.fr3,
  },
  {
    productId: 104,
    productName: "Boxy4 T-Shirt with Roll Sleeve",
    price: 20.0,
    productCategory: "Women",
    color: "white",
    availableSizes: ["S", "M", "L", "XL"],
    hasDiscount: false,
    productImage: Images.fr4,
  },
  {
    productId: 105,
    productName: "Boxy5 T-Shirt with Roll Sleeve",
    price: 20.0,
    productCategory: "Women",
    color: "grey",
    availableSizes: ["S", "L", "XL"],
    hasDiscount: false,
    productImage: Images.fr5,
  },
  {
    productId: 106,
    productName: "Boxy6 T-Shirt with Roll Sleeve",
    price: 20.0,
    productCategory: "Women",
    color: "white",
    availableSizes: ["S", "M", "XL"],
    hasDiscount: false,
    productImage: Images.fr6,
  },
];

const Shop = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState("Features");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { addcart: addToCart } = useContext(CartContext);

  const availableColors = ["black", "grey", "blue", "white"];
  const availablePriceRanges = ["0-20", "20-40", "40-100"];
  const availableSizes = ["S", "M", "L", "XL"];

  const toggleFilter = (value, currentArray, setArray) => {
    if (currentArray.includes(value)) {
      setArray(currentArray.filter((item) => item !== value));
    } else {
      setArray([...currentArray, value]);
    }
    setCurrentPage(1);
  };

  const filteredProducts = productList.filter((item) => {
    const matchesSearch = item.productName
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    const priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.some((range) => {
        const [minPrice, maxPrice] = range.split("-").map(Number);
        return item.price >= minPrice && item.price <= maxPrice;
      });
    const sizeMatch =
      selectedSizes.length === 0 ||
      selectedSizes.some((size) => item.availableSizes.includes(size));

    return matchesSearch && colorMatch && priceMatch && sizeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "Features":
       
        if (a.hasDiscount && !b.hasDiscount) return -1;
        if (!a.hasDiscount && b.hasDiscount) return 1;
        return a.productName.localeCompare(b.productName); 
      case "Best Seller":
        return a.price - b.price;
      case "Alphabetically, A-Z":
        return a.productName.localeCompare(b.productName);
      case "Alphabetically, Z-A":
        return b.productName.localeCompare(a.productName);
      case "Price, low to high":
        return a.price - b.price;
      case "Price, high to low":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const displayedProducts = sortedProducts.slice(startIndex, lastIndex);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
         
          <aside className="w-full lg:w-64 bg-white p-6 rounded-lg h-fit">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter by</h3>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Color</h4>
              {availableColors.map((color) => (
                <label key={color} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleFilter(color, selectedColors, setSelectedColors)}
                  />
                  <span className="capitalize text-gray-600">{color}</span>
                </label>
              ))}
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Price</h4>
              {availablePriceRanges.map((range) => (
                <label key={range} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedPrices.includes(range)}
                    onChange={() => toggleFilter(range, selectedPrices, setSelectedPrices)}
                  />
                  <span className="text-gray-600">${range}</span>
                </label>
              ))}
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Size</h4>
              {availableSizes.map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
                  />
                  <span className="text-gray-600">{size}</span>
                </label>
              ))}
            </div>

            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </aside>

         
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black"
                >
                  <option>Features</option>
                  <option>Best Seller</option>
                  <option>Alphabetically, A-Z</option>
                  <option>Alphabetically, Z-A</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                </select>

                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black"
                >
                  <option value={6}>6</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>

              <p className="text-gray-600">
                Showing {startIndex + 1} to {Math.min(lastIndex, sortedProducts.length)} of {sortedProducts.length} items
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {displayedProducts.map((item) => {
                const addToCartHandler = () => addToCart(item.productId);
                return (
                  <div
                    key={item.productId}
                    className="relative w-[268px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
                  >
                    {item.hasDiscount && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                          Sale
                        </span>
                      </div>
                    )}
                    <div className="relative h-80 bg-gray-100 overflow-hidden">
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-[#00000081] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <button
                          onClick={addToCartHandler}
                          className="bg-[#0000002c] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 hover:text-black transition-colors duration-200"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                        {item.productName}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-semibold text-gray-900">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

           
            <div className="flex mt-8 gap-2 items-center justify-center flex-wrap">
              {Array(totalPages)
                .fill()
                .map((_, idx) => (
                  <button
                    key={idx + 1}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`rounded-full w-8 h-8 flex items-center justify-center ${
                      currentPage === idx + 1
                        ? "bg-black text-white"
                        : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
