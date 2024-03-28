import React, { useContext, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Share } from "lucide-react";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/Context";

function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const { handleAddToCart } = useContext(Context);
  const increment = () => {
    setQuantity((prestate) => prestate + 1);
  };
  const decrement = () => {
    setQuantity((prestate) => {
      if (prestate === 1) return 1;
      return prestate - 1;
    });
  };

  // console.log(data);

  if (!data) return;
  const product = data[0].attributes;
  console.log(product);
  return (
    <>
      <div className="sp mx-auto     max-w-7xl px-2 py-10 lg:px-0">
        <div className="overflow-hidden">
          <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
            <div className="items-start justify-between lg:flex lg:space-x-8">
              <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                <div className="w-full">
                  <div className="mb-2.5 w-full shrink-0 overflow-hidden rounded-md border  ">
                    <div className=" w-80 h-80 ">
                      <img
                        alt="Product gallery 1"
                        src={
                          import.meta.env.VITE_APP_SERVER_BASE_URL +
                          product.img.data[0].attributes.url
                        }
                        className="rounded-lg w-full object-cover h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                <div className="pb-5">
                  <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
                    {product.title}
                  </h2>
                  <p className="mt-4 font-semibold">₹ {product.price} </p>
                </div>
                <div className="mb-2 pt-0.5">
                  <div className="my-5">
                    <span
                      onClick={decrement}
                      className="w-16 select-none  cursor-pointer bg-zinc-700 p-4 mx-1"
                    >
                      -
                    </span>
                    <span className="mx-5"> {quantity} </span>
                    <span
                      onClick={increment}
                      className="w-16 select-none  cursor-pointer  bg-zinc-700 p-4 mx-1"
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className="pb-2" />
                <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                  <button
                    onClick={() => {
                      handleAddToCart(data[0].quantity);
                      setQuantity(1);
                    }}
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add To Cart
                  </button>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <Heart size={16} className="mr-3" />
                      <span className="block">Wishlist</span>
                    </button>
                    <div className="relative">
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <Share size={16} className="mr-3" />
                        <span className="block">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-6 xl:pt-8">
                  <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                    Product Details:
                  </h3>
                  <p className="text-sm">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* related  */}
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
        <h1>Related Product</h1>
        <RelatedProduct
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </>
  );
}

export default SingleProduct;
