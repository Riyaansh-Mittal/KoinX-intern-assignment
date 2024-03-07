import React, { useState } from "react";
import Overview from "./Overview";
import Fundamentals from "./Fundamentals";
import NewInsights from "./NewInsights";
import Sentimentals from "./Sentimentals";
import Team from "./Team";
import Technicals from "./Technicals";
import Tokenomics from "./Tokenomics";
import { useSelector } from "react-redux";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const strings = useSelector((state) => state.platformSettings.strings);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    { label: strings.tabs.overview, content: <Overview /> },
    { label: strings.tabs.fundamentals, content: <Fundamentals /> },
    { label: strings.tabs.newinsights, content: <NewInsights /> },
    { label: strings.tabs.sentimentals, content: <Sentimentals /> },
    { label: strings.tabs.team, content: <Team /> },
    { label: strings.tabs.technicals, content: <Technicals /> },
    { label: strings.tabs.tokenomics, content: <Tokenomics /> },
  ];

  return (
    <div>
      <div className="tab-buttons space-x-7 border-b border-solid border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
              index === activeTab
                ? "active text-blue-700 text-base font-medium pb-3 border-b-4 border-solid border-blue-700"
                : "text-base font-medium"
            }
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content pt-5">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
