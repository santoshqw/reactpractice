import React from "react";
import flower from "../assets/react.svg"; // default fallback image

const BookCard = ({ name="physics", author="prakash", price=1000, image }) => {
  return (
    <div className="shadow-xl border border-gray-100 min-w-[280px] max-w-max p-2.5 rounded-xl flex flex-col space-y-2.5 relative">
      {/* Price Badge */}
      <div className="aspect-square w-[60px] h-[60px] rounded-full absolute right-2 top-5 flex items-center justify-center bg-gray-800 text-white font-semibold">
        Rs:{price}
      </div>

      {/* Book Image */}
      <div className="h-36 w-full border border-gray-400 rounded-xl overflow-hidden flex items-center justify-center">
        <img
          className="h-full w-full object-contain"
          src={image || flower}
          alt="book"
        />
      </div>

      {/* Book Info */}
      <p className="text-center text-xl font-light">Name: {name}</p>
      <p className="text-center">Author: {author}</p>

      {/* Buttons */}
      <div className="flex flex-row justify-around w-full gap-3.5">
        <button className="border bg-black text-white p-1.5 rounded w-24 hover:bg-blue-600 transition">
          See More
        </button>
        <button className="border flex-1 bg-black text-white font-bold p-1.5  rounded hover:bg-green-500 transition">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
