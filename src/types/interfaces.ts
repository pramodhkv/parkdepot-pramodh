export interface IMission {
  name: string;
}

export interface IShip {
  id: string;
  name: string;
  image: string;
  type: string;
  active: boolean;
  home_port: string;
  year_built: number;
  missions: IMission[];
  weight_kg: number;
}

export interface IViewProps {
  shipType: string;
}

export enum ShipType {
  ALL = "All",
  CRAFT = "High Speed Craft",
  CARGO = "Cargo",
  BARGE = "Barge",
  TUG = "Tug",
}
