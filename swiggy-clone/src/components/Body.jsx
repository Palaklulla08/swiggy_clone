import React, { useState ,useEffect}  from "react";
import WhatsonyourMind from "./Whats_On_Your_Mind"
import TopRestaurents from "./TopRestaurents";
function Body() {
const [topRestaurentsData,setTopRestaurentsData]=useState([])
  const [onYourMindData,setOnYourMindData]=useState([])
   async function fetchData() {
          const data1 = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          const result = await data1.json();
          console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setTopRestaurentsData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        }
        useEffect(() => {
          fetchData();
        }, []);
  return (
    <>
      <div className="w-full ">
        <div className="w-[75%] mx-auto  mt-3 overflow-hidden">
          < WhatsonyourMind data={onYourMindData}/>
          <TopRestaurents data={topRestaurentsData}/>
        </div>
      </div>
    </>
  );
}

export default Body;
