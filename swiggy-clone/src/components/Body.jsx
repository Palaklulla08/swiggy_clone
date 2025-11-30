import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Body() {
  const [data, setdata] = useState([]);
  const [value,setvalue] = useState(0)
  async function fetchData() {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data1.json();
    console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setdata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }
  useEffect(() => {
    fetchData();
  }, []);
  function handleNext(){
     value>=124?"":setvalue((prev)=> prev+31)
  }
  function handlePrev(){
    value <= 0 ?"":setvalue((prev)=>prev-31)
  }
  
  return (
    <>
      <div className="w-full ">
        
        <div className="w-[75%] mx-auto  mt-3 overflow-hidden">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">What's in your mind ?</h1>
            <div className="flex gap-2">
                <div  onClick={handlePrev} className={`  cursor-pointer items-center w-8 h-8 rounded-full flex justify-center `+(value <=0?"bg-gray-100":"bg-gray-200")}><FaArrowLeft className={`text-xl`+(value <=0?"text-gray-300":"text-gray-800")}/></div>
                <div  onClick={handleNext} className={`  cursor-pointer items-center w-8 h-8 rounded-full flex justify-center `+ (value >=124?"bg-gray-100":"bg-gray-200")}><FaArrowRight className={`text-xl`+(value <=124?"text-gray-300":"text-gray-800")} /></div>
            </div>
          </div>

          <div style={{translate :`-${value}%`}}className={`flex mt-3 duration-300`}>
            {data.map((item) => {
              return (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                  alt="img"
                  className="w-30"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
