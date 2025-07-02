import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { CartContext } from "../context/card";
import Images from "../constant/image";

const itemsCollection = [
  {
    id: 1,
    title: "Boxy T-Shirt with Roll Sleeve Detail",
    cost: 20.0,
    category: "Women",
    shade: "blue",
    dimensions: ["S", "M", "L"],
    isDiscounted: false,
    img: Images.fr1,
  },
  {
    id: 2,
    title: "Boxy1 T-Shirt with Roll Sleeve",
    cost: 20.0,
    category: "Women",
    shade: "yellow",
    dimensions: ["S", "M", "L", "XL"],
    isDiscounted: false,
    img: Images.fr2,
  },
  {
    id: 3,
    title: "Boxy3 T-Shirt with Roll Sleeve",
    cost: 30.0,
    category: "Women",
    shade: "grey",
    dimensions: ["S", "M", "L", "XL"],
    isDiscounted: true,
    img: Images.fr3,
  },
  {
    id: 4,
    title: "Boxy4 T-Shirt with Roll Sleeve",
    cost: 20.0,
    category: "Women",
    shade: "white",
    dimensions: ["S", "M", "L", "XL"],
    isDiscounted: false,
    img: Images.fr4,
  },
  {
    id: 5,
    title: "Boxy5 T-Shirt with Roll Sleeve",
    cost: 20.0,
    category: "Women",
    shade: "grey",
    dimensions: ["S", "L", "XL"],
    isDiscounted: false,
    img: Images.fr5,
  },
  {
    id: 6,
    title: "Boxy6 T-Shirt with Roll Sleeve",
    cost: 20.0,
    category: "Women",
    shade: "white",
    dimensions: ["S", "M", "XL"],
    isDiscounted: false,
    img: Images.fr6,
  },
];

const ShopPage = () => {
  const [searchText, setSearchText] = useState("");
  const [ME, setSortingMethod] = useState("Alphabetically, A-Z");
  const [itemsLimit, setItemsLimit] = useState(6);
  const [colorFilters, setColorFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const { addcart: addItemToCart } = useContext(CartContext);

  const colorsAvailable = ["black", "grey", "blue", "white"];
  const priceRangesAvailable = ["0-20", "20-40", "40-100"];
  const sizesAvailable = ["S", "M", "L", "XL"];

  const updateFilter = (value, currentFilters, setFilters) => {
    if (currentFilters.includes(value)) {
      setFilters(currentFilters.filter((v) => v !== value));
    } else {
      setFilters([...currentFilters, value]);
    }
    setPageNumber(1);
  };

  const filteredProducts = itemsCollection.filter((product) => {
    const includesSearch = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const colorSelected =
      colorFilters.length === 0 || colorFilters.includes(product.shade);
    const priceSelected =
      priceFilters.length === 0 ||
      priceFilters.some((range) => {
        const [minPrice, maxPrice] = range.split("-").map(Number);
        return product.cost >= minPrice && product.cost <= maxPrice;
      });
    const sizeSelected =
      sizeFilters.length === 0 ||
      sizeFilters.some((size) => product.dimensions.includes(size));

    return includesSearch && colorSelected && priceSelected && sizeSelected;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (ME) {
      case "Best seller":
      return a.cost-b.cost;
      case "Alphabetically, A-Z":
        return a.title.localeCompare(b.title);
      case "Alphabetically, Z-A":
        return b.title.localeCompare(a.title);
      case "Price, low to high":
        return a.cost - b.cost;
      case "Price, high to low":
        return b.cost - a.cost;
      default:
        return 0;
    }
  });

  const index = (pageNumber - 1) * itemsLimit;
  const endIndex = index + itemsLimit;
  const a = sortedProducts.slice(index, endIndex);
  const pagesCount = Math.ceil(sortedProducts.length / itemsLimit);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 bg-white p-6 rounded-lg h-fit">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Filter by
            </h3>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Color</h4>
              {colorsAvailable.map((color) => (
                <label
                  key={color}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={colorFilters.includes(color)}
                    onChange={() =>
                      updateFilter(color, colorFilters, setColorFilters)
                    }
                  />
                  <span className="capitalize text-gray-600">{color}</span>
                </label>
              ))}
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Price</h4>
              {priceRangesAvailable.map((range) => (
                <label
                  key={range}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={priceFilters.includes(range)}
                    onChange={() =>
                      updateFilter(range, priceFilters, setPriceFilters)
                    }
                  />
                  <span className="text-gray-600">${range}</span>
                </label>
              ))}
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Size</h4>
              {sizesAvailable.map((size) => (
                <label
                  key={size}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={sizeFilters.includes(size)}
                    onChange={() =>
                      updateFilter(size, sizeFilters, setSizeFilters)
                    }
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
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <select
                  value={ME}
                  onChange={(e) => setSortingMethod(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black"
                >
                  <option>Alphabetically, A-Z</option>
                  <option>Alphabetically, Z-A</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                </select>

                <select
                  value={itemsLimit}
                  onChange={(e) => {
                    setItemsLimit(Number(e.target.value));
                    setPageNumber(1);
                  }}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black"
                >
                  <option value={6}>6</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>

              <p className="text-gray-600">
                Showing {index + 1} to{" "}
                {Math.min(endIndex, sortedProducts.length)} of{" "}
                {sortedProducts.length} items
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {a.map((product) => {
                const handleAddToCart = () => addItemToCart(product.id);
                return (
                  <div
                    key={product.id}
                    className="relative flex-shrink-0 w-[268px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
                  >
                    {product.isDiscounted && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                          Sale
                        </span>
                      </div>
                    )}
                    <div className="relative h-80 bg-gray-100 overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-[#00000081] bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <button
                          onClick={handleAddToCart}
                          className="bg-[#0000002c] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 hover:text-black transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-semibold text-gray-900">
                          ${product.cost.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex mt-8 gap-2 items-center justify-center flex-wrap">
              <button
                onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
                disabled={pageNumber === 1}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              {Array(pagesCount)
                .fill()
                .map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setPageNumber(index + 1)}
                    className={`rounded-full w-8 h-8 flex items-center justify-center ${
                      pageNumber === index + 1
                        ? "bg-black text-white"
                        : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              <button
                onClick={() =>
                  setPageNumber((prev) => Math.min(pagesCount, prev + 1))
                }
                disabled={pageNumber === pagesCount}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
