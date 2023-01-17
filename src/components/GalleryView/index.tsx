import { IViewProps } from "../../types/interfaces";
import ErrorMessage from "../../components/ErrorMessage";
import { InView } from "react-intersection-observer";
import ShipCard from "../../components/ShipCard";
import { useShipsManager } from "../../hooks";
import Loader from "../Loader";
import NoResultsFound from "../NoResultsFound";

const GalleryView = (props: IViewProps) => {
  const { shipType } = props;

  const { ships, loading, error, fetchMore } = useShipsManager(shipType);

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <div className="flex items-center flex-wrap gap-4">
      {ships.map((ship) => (
        <ShipCard key={ship.id} ship={ship} />
      ))}

      {!!ships.length && (
        <InView
          onChange={async (inView) => {
            const currentLength = ships.length || 0;
            if (inView) {
              await fetchMore({
                variables: {
                  offset: currentLength,
                  limit: 12,
                },
              });
            }
          }}
        />
      )}

      {loading && <Loader />}
      {!loading && !ships.length && <NoResultsFound />}
    </div>
  );
};

export default GalleryView;
