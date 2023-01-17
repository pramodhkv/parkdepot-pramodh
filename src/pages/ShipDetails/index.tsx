import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import NoResultsFound from "../../components/NoResultsFound";
import { useFetchShipDetails } from "../../hooks";

const ShipDetails = () => {
  const { shipId } = useParams<{ shipId: string }>();

  const { ship, loading, error } = useFetchShipDetails(shipId || "");

  const calculateWeight = (weight: number) => {
    return weight / 1000;
  };

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (loading) {
    return <Loader />;
  }

  if (!ship) {
    return <NoResultsFound />;
  }

  return (
    <div className="container mx-auto my-8 p-3 flex flex-col md:flex-row items-start gap-8 h-full">
      <div className="flex-auto flex items-center md:h-3/4">
        <img
          src={ship.image}
          alt={ship.name}
          loading="lazy"
          className="w-full min-h-[30rem] md:h-full rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col">
          <p className="text-white/60 text-sm font-bold mt-3">Port:</p>
          <p className="text-lg text-white font-bold">{ship.home_port}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-white/60 text-sm font-bold mt-3">Name:</p>
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">
            {ship.name}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white/60 text-sm font-bold mt-3">Status:</p>
          <div
            className={`w-6 h-6 rounded-full ${
              ship.active ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
        </div>

        <div className="flex flex-col">
          <p className="text-white/60 text-sm font-bold mt-3">Type:</p>
          <p className="text-lg text-white font-bold">{ship.type}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-white/60 text-sm font-bold mt-3">Year Built:</p>
          <p className="text-lg text-white font-bold">{ship.year_built}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-white/60 text-sm font-bold mt-3">Weight:</p>
          <p className="text-lg text-white font-bold">
            {calculateWeight(ship.weight_kg)} Tons
          </p>
        </div>

        <hr className="border-thin-white/20 my-3" />

        <div className="flex flex-col gap-2">
          <p className="text-white/60 text-sm font-bold mt-3">Missions:</p>
          <div className="grid grid-cols-3 md:grid-cols-4 text-center gap-3">
            {ship.missions.map((mission: any) => (
              <div
                className="bg-searchbar-400 p-4 rounded-xl"
                key={mission.name}
              >
                <p className="text-white font-bold text-xs md:text-sm">
                  {mission.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipDetails;
