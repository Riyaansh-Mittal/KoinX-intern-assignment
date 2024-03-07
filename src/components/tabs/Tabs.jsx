import React, { useState } from "react";
import Overview from "./Overview";
import Fundamentals from "./Fundamentals";
import NewInsights from "./NewInsights";
import Sentimentals from "./Sentimentals";
import Team from "./Team";
import Technicals from "./Technicals";
import Tokenomics from "./Tokenomics";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    { label: "Overview", content: <Overview /> },
    { label: "Fundamentals", content: <Fundamentals /> },
    { label: "New Insights", content: <NewInsights /> },
    { label: "Sentimentals", content: <Sentimentals /> },
    { label: "Team", content: <Team /> },
    { label: "Technicals", content: <Technicals /> },
    { label: "Tokenomics", content: <Tokenomics/> },
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
