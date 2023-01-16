import { useEffect, useState } from "react";
import { IShip } from "../types/interfaces";
import { useQuery } from "@apollo/client";
import { GET_SHIP, GET_SHIPS } from "../services/queries";
import { ShipType } from "../types/interfaces";

export const useShipsManager = (shipType: string) => {
  const [ships, setShips] = useState<IShip[]>([]);

  const { data, loading, error, fetchMore, refetch } = useQuery(GET_SHIPS, {
    variables: {
      offset: 0,
      limit: 12,
      find: { type: shipType === ShipType.ALL ? "" : shipType },
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    setShips(data?.ships || []);
  }, [data]);

  useEffect(() => {
    setShips([]);
    refetch().then((res) => {
      setShips(res.data.ships);
    });
  }, [shipType, refetch]);

  return {
    ships,
    loading,
    error,
    fetchMore,
  };
};

export const useFetchShipDetails = (id: string) => {
  const [ship, setShip] = useState<IShip | null>(null);

  const { data, loading, error } = useQuery(GET_SHIP, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    setShip(data?.ship || null);
  }, [data]);

  return {
    ship,
    loading,
    error,
  };
};
