import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";

const EventCard = () => {
  return (
    <div className="bg-blue-50 w-96 rounded-lg p-3 space-y-2 space-x-2 flex flex-row justify-between">
      <div className="p-5 mt-2 bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
        <span className="inline-flex">
          <HiOutlineNewspaper style={{ color: "white" }} className="text-3xl" />
        </span>
      </div>
      <div>
        <h2 className="text-xs font-medium">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </h2>
        <p className="text-xs text-slate-800 pb-4">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </div>
  );
};

export default EventCard;
