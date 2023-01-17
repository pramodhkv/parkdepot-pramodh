import React from "react";
import fallbackImg from "../../assets/ship-fallback.jpeg";
import { Link } from "react-router-dom";

interface IShipListViewProps {
  ship: any;
}

const ShipListView = (props: IShipListViewProps) => {
  const { ship } = props;

  return (
    <Link
      to={`/details/${ship.id}`}
      className="bg-body-400 w-full min-h-[6rem] rounded-xl cursor-pointer"
    >
      <div className="flex items-center py-4 px-1 md:px-8">
        <div className="image-wrapper w-20 h-20 md:w-24 md:h-24 relative overflow-hidden">
          <img
            src={ship.image ?? fallbackImg}
            alt={ship.name}
            className="w-full h-full rounded-lg"
            loading="lazy"
          />
        </div>

        <div className="flex-1 mx-3 md:mx-8 flex flex-col justify-center gap-1">
          <h3 className="text-sm text-white/60 font-bold">Name</h3>
          <h3 className="text-xs md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold mt-1">
            {ship.name}
          </h3>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-1">
          <h3 className="text-sm text-white/60 font-bold">Type</h3>
          <h3 className="text-xs md:text-lg text-white font-bold mt-1">
            {ship.type}
          </h3>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-1">
          <h3 className="text-sm text-white/60 font-bold">Year Built</h3>
          <h3 className="text-xs md:text-lg text-white font-bold mt-1">
            {ship.year_built || "N/A"}
          </h3>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-sm text-white/60 font-bold">Status</h3>
          <div className="flex justify-center">
            <span
              className={`w-4 h-4 mt-1 text-lg rounded-full ${
                ship.active ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShipListView;
