import { IViewProps } from "../../types/interfaces";
import ErrorMessage from "../../components/ErrorMessage";
import ShipListView from "../../components/ShipListView";
import { InView } from "react-intersection-observer";
import { useShipsManager } from "../../hooks";

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

      {loading && (
        <div className="w-full flex justify-center">
          <p className="text-white text-2xl font-bold py-2">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ListView;
