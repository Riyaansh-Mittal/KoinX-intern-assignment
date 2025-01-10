import React from "react";
import { useSelector } from "react-redux";
import StyleBox from "../StyleBox";
import Info from "../Info";
import Carousel from "../Carousel";
import { AiOutlineRise } from "react-icons/ai";
import EventCard from "../EventCard";

const Sentiments = () => {
  const strings = useSelector((state) => state.platformSettings.strings);
  return (
    <StyleBox>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold black">
          {strings.sentiments.sentiment}
        </h2>
        <div className="flex flex-row items-center space-x-2">
          <h2 className="text-lg font-semibold text-slate-700">
            {strings.sentiments.key_events}
          </h2>
          <Info />
        </div>
        <Carousel>
          <EventCard />
          <div className="bg-green-50 w-96 rounded-lg p-3 space-y-2 space-x-2 flex flex-row justify-between">
            <div className="p-5 mt-2 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="inline-flex">
                <AiOutlineRise
                  style={{ color: "white" }}
                  className="text-3xl"
                />
              </span>
            </div>
            <div>
              <h2 className="text-xs font-medium">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </h2>
              <p className="text-xs text-slate-800 pb-4">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Carousel>
      </div>
      <div className="space-y-2">
        <div className="flex flex-row items-center space-x-2">
          <h2 className="text-lg font-semibold text-slate-700">
            Analyst Estimates
          </h2>
          <Info />
        </div>
        <div className="flex flex-row items-center space-x-10 pb-3">
          <div className="p-2 bg-green-50 w-24 h-24 rounded-full flex items-center justify-center text-3xl pb-3 text-green-600 font-semibold">
            76<span className="text-sm pl-1">%</span>
          </div>
          <div
            className="grid grid-cols-2 w-3/5 gap-2.5"
            style={{ gridTemplateColumns: "auto 1fr" }}
          >
            <p className="w-max pr-7 text-sm text-slate-500">Buy</p>
            <section className=" flex flex-row items-center space-x-2">
              <div
                className="bg-green-500 h-2 rounded-sm"
                style={{ width: "76%" }}
              ></div>
              <p className="text-sm text-slate-500">76%</p>
            </section>
            <p className="w-max pr-7 text-sm text-slate-500">Hold</p>
            <section className="flex flex-row items-center space-x-2">
              <div
                className="bg-gray-400 h-2 rounded-sm"
                style={{ width: "8%" }}
              ></div>
              <p className="text-sm text-slate-500">8%</p>
            </section>
            <p className="w-max pr-7 text-sm text-slate-500">Sell</p>
            <section className=" flex flex-row items-center space-x-2">
              <div
                className="bg-red-500 h-2 rounded-sm"
                style={{ width: "16%" }}
              ></div>
              <p className="text-sm text-slate-500">16%</p>
            </section>
          </div>
        </div>
      </div>
    </StyleBox>
  );
};

export default Sentiments;
