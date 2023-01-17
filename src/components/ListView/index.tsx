import { IViewProps } from "../../types/interfaces";
import ErrorMessage from "../../components/ErrorMessage";
import ShipListView from "../../components/ShipListView";
import { InView } from "react-intersection-observer";
import { useShipsManager } from "../../hooks";
import Loader from "../Loader";
import NoResultsFound from "../NoResultsFound";

const ListView = (props: IViewProps) => {
  const { shipType } = props;

  const { ships, loading, error, fetchMore } = useShipsManager(shipType);

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {ships.map((ship) => (
        <ShipListView key={ship.id} ship={ship} />
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

export default ListView;
