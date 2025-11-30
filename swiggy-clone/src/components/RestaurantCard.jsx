import React from "react";
import { MdStarRate } from "react-icons/md";
function RestaurantCard(item) {
  return (
    <>
      <div className="min-w-[295px] h-[182px] relative">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.info?.cloudinaryImageId}`}
          alt="img"
          className=" w-full h-full object-cover rounded-2xl"
        />
        <div className=" bg-gradient-to-t from-black from-1% to-transparent to-40% top-0 absolute w-full h-full rounded-2xl"></div>
        <p className="absolute bottom-0 text-white text-2xl ml-2 mb-1 font-bold">
          {item?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {item?.info?.aggregatedDiscountInfoV3?.subHeader}
        </p>
      </div>

      <div className="mt-3">
        <h2 className="text-lg font-semibold">{item?.info?.name}</h2>
        <p className="flex items-center gap-1 text-base font-semibold">
          <MdStarRate color="green" size={20} />
          {item?.info?.avgRating} .<span>{item?.info?.sla?.slaString}</span>
        </p>
        <p className="line-clamp-1 text-black/60 font-medium">
          {item?.info?.cuisines.join(", ")}
        </p>
        <p className="line-clamp-1 text-black/60 font-medium">
          {item?.info?.locality}
        </p> 
      </div>
    </>
  );
}

export default RestaurantCard;
