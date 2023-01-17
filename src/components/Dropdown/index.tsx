import { Menu } from "@headlessui/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { ShipType } from "../../types/interfaces";

interface IDropdownProps {
  menus: ShipType[];
  onMenuChange: (menu: ShipType) => unknown;
}

const Dropdown = (props: IDropdownProps) => {
  const { menus, onMenuChange } = props;

  const [selectedMenu, setSelectedMenu] = useState<ShipType>(menus[0]);

  const handleMenuChange = (menu: ShipType) => {
    setSelectedMenu(menu);
    onMenuChange(menu);
  };

  return (
    <Menu as="div" className="w-full relative">
      <Menu.Button className="inline-flex w-full min-h-[3rem] justify-center rounded-md bg-searchbar-400 p-3 text-white font-bold text-sm md:text-lg ">
        {selectedMenu}
        <FiChevronDown className="ml-2 mt-1" aria-hidden="true" />
      </Menu.Button>

      <Menu.Items className="absolute mt-3 w-56 rounded-lg bg-searchbar-400 z-10 backdrop-blur-2xl text-sm md:text-lg text-white font-bold">
        <div className="px-1 py-1 ">
          {menus.map((menu) => (
            <Menu.Item key={menu}>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-black bg-opacity-20" : ""
                  } group flex w-full items-center rounded-md p-3`}
                  onClick={() => handleMenuChange(menu)}
                >
                  {menu}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
