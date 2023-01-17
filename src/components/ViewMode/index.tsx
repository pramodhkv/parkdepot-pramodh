import React, { ReactNode } from "react";
import { Tab } from "@headlessui/react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

type TViewMode = {
  mode: "grid" | "list";
  icon: ReactNode;
};

interface IViewMode {
  onToggleViewMode: () => void;
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const ViewMode = (props: IViewMode) => {
  const { onToggleViewMode } = props;

  const viewModes: TViewMode[] = [
    {
      mode: "grid",
      icon: <BsFillGridFill />,
    },
    {
      mode: "list",
      icon: <FaListUl />,
    },
  ];

  return (
    <div className="w-full px-3 sm:px-0">
      <Tab.Group onChange={onToggleViewMode}>
        <Tab.List className="flex space-x-1 rounded-md bg-body-400 p-1 ">
          {viewModes.map((view) => (
            <Tab
              key={view.mode}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-white flex justify-center",
                  "focus:outline-none",
                  selected
                    ? "bg-black/20 shadow"
                    : "text-gray-500 hover:text-white"
                )
              }
            >
              {view.icon}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default ViewMode;
