import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import ViewMode from "../../components/ViewMode";
import { ShipType } from "../../types/interfaces";
import GalleryView from "../../components/GalleryView";
import ListView from "../../components/ListView";

const Home = () => {
  const [viewMode, setViewMode] = useState<string>("grid");
  const [shipType, setShipType] = useState<ShipType>(ShipType.ALL);

  const dropdownMenus: ShipType[] = Object.values(ShipType).map((type) => type);

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
  };

  const toggleShipType = (type: ShipType) => {
    setShipType(type);
  };

  return (
    <div className="container mx-auto mb-4 h-full">
      <div className="flex items-center gap-5 w-full my-8">
        <div className="w-56">
          <Dropdown menus={dropdownMenus} onMenuChange={toggleShipType} />
        </div>
        <div className="w-56">
          <ViewMode onToggleViewMode={toggleViewMode} />
        </div>
      </div>

      {viewMode === "grid" ? (
        <GalleryView shipType={shipType} />
      ) : (
        <ListView shipType={shipType} />
      )}
    </div>
  );
};

export default Home;
