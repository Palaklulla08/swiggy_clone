import React from 'react';
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function TopRestaurents() {
      const [data, setdata] = useState([]);
      const [value, setvalue] = useState(0);
      async function fetchData() {
        const data1 = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const result = await data1.json();
        console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setdata(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      useEffect(() => {
        fetchData();
      }, []);
      function handleNext() {
        value >= 124 ? "" : setvalue((prev) => prev + 50);
      }
      function handlePrev() {
        value <= 0 ? "" : setvalue((prev) => prev - 50);
      }
    return (<><div className="mt-14 w-full">
        <div className="flex justify-between mt-5">
            <h1 className="font-bold text-3xl">Top Restaurants  chains in Delhi</h1>
            <div className="flex gap-2">
              <div
                onClick={handlePrev}
                className={
                  `  cursor-pointer items-center w-8 h-8 rounded-full flex justify-center ` +
                  (value <= 0 ? "bg-gray-100" : "bg-gray-200")
                }
              >
                <FaArrowLeft
                  className={
                    `text-xl` + (value <= 0 ? "text-gray-300" : "text-gray-800")
                  }
                />
              </div>
              <div
                onClick={handleNext}
                className={
                  `  cursor-pointer items-center w-8 h-8 rounded-full flex justify-center ` +
                  (value >= 124 ? "bg-gray-100" : "bg-gray-200")
                }
              >
                <FaArrowRight
                  className={
                    `text-xl` + (value <= 124 ? "text-gray-300" : "text-gray-800")
                  }
                />
              </div>
            </div>
          </div>
          <div style={{ translate: `-${value}%` }} className={`flex mt-4 duration-300 gap-5 w-full`}>

            {
            data.map((item) => {
              return (
                <div className='min-w-[295px] h-[182px] relative'>
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.info?.cloudinaryImageId}`}
                  alt="img"
                  className=" w-full h-full object-cover rounded-2xl"
                />
                <div className=' bg-gradient-to-t from-black from-1% to-transparent to-40% top-0 absolute w-full h-full rounded-2xl'></div>
                </div>
              );
            })}
          </div>
          <hr className="border-gray-300" />
    </div>
          
          
        </>
    );
}

export default TopRestaurents;