import React from "react";
import { useNavigate } from "react-router-dom";

function Category({ categories }) {
  const Navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto p-5 flex  justify-center items-center gap-5 flex-wrap ">
        {categories?.map((item) => (
          <div
            key={item.id}
            className="w-60 h-32 cursor-pointer relative"
            onClick={() => Navigate(`category/${item.id}`)}
          >
            <img
              src={
                import.meta.env.VITE_APP_SERVER_BASE_URL +
                item.attributes.img.data.attributes.url
              }
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.9)]   top-0 right-0 flex justify-center items-center">
              <h1 className="relative z-10 text-xl text-white">
                {item.attributes.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
