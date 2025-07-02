import React, { useState, useEffect } from "react";
import Images from "../constant/image";
import { useContext } from "react";
import { CartContext } from "../context/card";

const Data = [
  {
    top: { title: "DRESSES", img: Images.dress, basis: "basis-[70%]" },
    bottom: { title: "SUNGLASS", img: Images.sunglass, basis: "basis-[40%]" },
  },
  {
    top: { title: "WATCHES", img: Images.watch, basis: "basis-[40%]" },
    bottom: { title: "FOOTWEAR", img: Images.footwear, basis: "basis-[70%]" },
  },
  {
    top: { title: "BAGS", img: Images.bags, basis: "basis-[70%]" },
    bottom: { title: "ASSECOIR", img: Images.assecoir, basis: "basis-[30%]" },
  },
];

export function Items() {
  return (
    <div className="flex gap-6 justify-center p-6 flex-wrap">
      {Data.map((all, index) => (
        <div
          key={index}
          className="w-[368px] h-[800px] flex flex-col gap-[15px]"
        >
          <div
            className={`relative ${all.top.basis} flex-grow-0 all overflow-hidden`}
          >
            <img
              src={all.top.img}
              alt={all.top.title}
              className="w-full h-full object-cover transition-transform duration-300 all-hover:scale-105"
            />
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 shadow-md hover:bg-gray-100 transition font-medium">
              {all.top.title}
            </button>
          </div>
          <div
            className={`relative ${all.bottom.basis} flex-grow-0 all overflow-hidden`}
          >
            <img
              src={all.bottom.img}
              alt={all.bottom.title}
              className="w-full h-full object-cover transition-transform duration-300 all-hover:scale-105"
            />
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 shadow-md hover:bg-gray-100 transition font-medium">
              {all.bottom.title}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const CARD_WIDTH = 268;
const GAP = 24;

const featuredProducts = [
  { id: 1, title: "Product 1", price: 20.0, isOnSale: true, img: Images.fr1 },
  { id: 2, title: "Product 2", price: 20.0, img: Images.fr2 },
  { id: 3, title: "Product 3", price: 20.0, img: Images.fr3 },
  { id: 4, title: "Product 4", price: 20.0, img: Images.fr4 },
  { id: 5, title: "Product 5", price: 25.0, img: Images.fr5 },
  { id: 6, title: "Product 6", price: 35.0, img: Images.fr6 },
  { id: 7, title: "Product 7", price: 40.0, img: Images.fr7 },
  { id: 8, title: "Product 8", price: 50.0, img: Images.fr8 },
];

function ProductCard({ id, title, price, isOnSale, img }) {
  const { addToCart } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, price, img });
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible) {
      const timer = setTimeout(() => setModalVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [modalVisible]);

  return (
    <>
      <div className="relative flex-shrink-0 w-[268px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
        {isOnSale && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-full">
              Sale
            </span>
          </div>
        )}
        <div className="relative h-80 bg-gray-100 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-[#0000004d] bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <button
              onClick={handleAddToCart}
              className="bg-[#000000] text-[#ffffff] px-6 py-2 rounded-full font-medium text-sm hover:bg-[#cf0f0f] transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-gray-900">
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pr-[1300px] pointer-events-none">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 text-center pointer-events-auto">
            <img src={Images.gif} className=" size-20 flex mx-auto bg-black" />
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="mb-6">Your product has been added to the cart!</p>
            <button
              onClick={() => setModalVisible(false)}
              className="px-6 py-2 bg-[#000000] text-white rounded hover:bg-[#cf0f0fa9] transition "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function HomePage() {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function updateItems() {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(1);
      else if (width < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    }
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const slideStep = itemsPerView;
  const totalSlides = Math.ceil(featuredProducts.length / slideStep);
  const maxIndex = totalSlides - 1;

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(0);
  }, [maxIndex, currentIndex]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const translateX = currentIndex * slideStep * (CARD_WIDTH + GAP);

  return (
    <div>
      <Items />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 font-montserrat uppercase tracking-wide">
            FEATURED PRODUCTS
          </h2>

          <div className="relative flex items-center justify-center">
            <button
              onClick={prevSlide}
              aria-label="Previous products"
              className="z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 absolute left-2 top-1/2 -translate-y-1/2"
            >
              <ArrowLeftIcon />
            </button>

            <div
              className="overflow-hidden"
              style={{
                width: itemsPerView * (CARD_WIDTH + GAP) - GAP,
              }}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${translateX}px)`,
                  width: featuredProducts.length * (CARD_WIDTH + GAP) - GAP,
                }}
              >
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next products"
              className="z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 absolute right-2 top-1/2 -translate-y-1/2"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-9 sm:py-15 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 px-4">
          <div className="relative aspect-square flex items-center justify-center overflow-hidden bg-white">
            <img
              src={Images.leftimg}
              alt="image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-white text-xl md:text-2xl font-montserrat font-semibold mb-1 sm:mb-2">
                The Beauty
              </span>
              <span className="text-white text-3xl md:text-5xl font-montserrat font-extrabold mb-2 sm:mb-4 tracking-wider">
                LOOKBOOK
              </span>
              <span className="text-white text-sm md:text-lg font-montserrat  mt-1 sm:mt-2">
                VIEW COLLECTION
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white aspect-square p-4 sm:p-8">
            <img
              src={Images.lunette}
              alt="Deal Product"
              className="w-[100%] h-2/3 object-cover mb-3 sm:mb-6 pt-18"
            />
            <div className="text-center">
              <div className="font-montserrat text-sm md:text-lg text-gray-700 mb-1 sm:mb-2">
                Boxy2 T-Shirt with Roll Sleeve
              </div>
              <div className="font-montserrat text-lg md:text-2xl font-bold text-gray-800 mb-3 sm:mb-6">
                $20.00
              </div>
              <div className="flex justify-center gap-2 sm:gap-3 mt-2 sm:mt-4">
                <div className="flex flex-col items-center bg-white border px-3 sm:px-6 py-1 sm:py-2">
                  <span className="text-lg font-bold text-gray-700">-2374</span>
                  <span className="text-gray-400 text-xs mt-1">days</span>
                </div>
                <div className="flex flex-col items-center bg-white border px-3 sm:px-6 py-1 sm:py-2">
                  <span className="text-lg font-bold text-gray-700">-12</span>
                  <span className="text-gray-400 text-xs mt-1">hrs</span>
                </div>
                <div className="flex flex-col items-center bg-white border px-3 sm:px-6 py-1 sm:py-2">
                  <span className="text-lg font-bold text-gray-700">-24</span>
                  <span className="text-gray-400 text-xs mt-1">mins</span>
                </div>
                <div className="flex flex-col items-center bg-white border px-3 sm:px-6 py-1 sm:py-2">
                  <span className="text-lg font-bold text-gray-700">-35</span>
                  <span className="text-gray-400 text-xs mt-1">secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-8 sm:py-16 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 font-montserrat uppercase tracking-wide">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10">
          <div className="bg-white flex flex-col items-start">
            <img
              src={Images.fblog}
              alt="Blog 1"
              className="w-full aspect-square object-cover mb-3 sm:mb-6"
            />
            <div className="font-montserrat text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
              Black Friday Guide: Best Sales & Discount Codes
            </div>
            <div className="text-gray-500 text-sm mb-2 sm:mb-4">
              by fashe-theme Admin on Dec 28,2017
            </div>
            <div className="text-gray-500 text-xs sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
            </div>
          </div>
          <div className="bg-white flex flex-col items-start">
            <img
              src={Images.sblog}
              alt="Blog 2"
              className="w-full aspect-square object-cover mb-3 sm:mb-6"
            />
            <div className="font-montserrat text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
              The White Sneakers Nearly Every Fashion Girls Own
            </div>
            <div className="text-gray-500 text-sm mb-2 sm:mb-4">
              by fashe-theme Admin on Dec 28,2017
            </div>
            <div className="text-gray-500 text-xs sm:text-base leading-relaxed">
              Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
              pellentesque mattis augue id euismod. Interdum et...
            </div>
          </div>
          <div className="bg-white flex flex-col items-start">
            <img
              src={Images.tblog}
              alt="Blog 3"
              className="w-full aspect-square object-cover mb-3 sm:mb-6"
            />
            <div className="font-montserrat text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
              New York SS 2018 Street Style: By Annina Mislin
            </div>
            <div className="text-gray-500 text-sm mb-2 sm:mb-4">
              by fashe-theme Admin on Dec 28,2017
            </div>
            <div className="text-gray-500 text-xs sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
            </div>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col   sm:gap-10 px-4">
        <h1 className="text-lg sm:text-4xl font-bold pb-10">@ FOLLOW US ON INSTAGRAM</h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          <div className="flex-col text-2xl text-[#7a7676] flex mr-20 border-e-2 border-[#979191]  p-4 sm:p-10">
            Free Delivery Worldwide
            <span className="font-extralight text-sm">
              Mirum est notare quam littera gothica
            </span>
          </div>
          <div className="flex-col flex text-2xl text-[#7a7676] mr-20 border-e-2 border-[#979191]  p-4 sm:p-10">
            30 Days Return
            <span className="font-extralight  mr-13 text-sm">
             Simply return it within 30 days for an exchange.
            </span>
          </div>
          <div className="flex-col text-2xl text-[#7a7676] flex p-4 sm:p-10">
            Store Opening
            <span className="font-extralight text-sm">
              Shop open from Monday to Sunday
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
