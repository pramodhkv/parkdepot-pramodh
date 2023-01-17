import React from "react";
import fallbackImg from "../../assets/ship-fallback.jpeg";
import { Link } from "react-router-dom";

interface IShipCardProps {
  ship: any;
}

const ShipCard = (props: IShipCardProps) => {
  const { ship } = props;

  return (
    <Link
      to={`/details/${ship.id}`}
      className="rounded-2xl p-1 border-2 border-thin-white w-[350px] h-auto my-3 mx-3 cursor-pointer"
    >
      <div className="flex flex-col p-1">
        <div className="image-wrapper w-full h-[294px] relative overflow-hidden">
          <img
            src={ship.image ?? fallbackImg}
            alt={ship.name}
            className="w-full h-full rounded-lg hover:scale-125 transition-all duration-300"
            loading="lazy"
          />
        </div>

        <span className="text-white/60 text-sm font-bold leading-4 mt-3">
          {ship.home_port}
        </span>

        <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold mt-2">
          {ship.name}
        </h3>

        <div className="bg-body-400 p-3 flex items-center justify-between mt-3 mb-1 rounded-lg">
          <div className="flex flex-col gap-3">
            <p className="text-white/60 text-sm font-bold leading-4">Type</p>
            <p className="text-white font-bold text-sm leading-4">
              {ship.type}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-white/60 text-sm font-bold leading-4">
              Year Built
            </p>
            <p className="text-white font-bold text-sm leading-4">
              {ship.year_built || "N/A"}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-white/60 text-sm font-bold leading-4">Status</p>
            <div className="flex justify-center w-full">
              <div
                className={`w-4 h-4 rounded-full ${
                  ship.active ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShipCard;
