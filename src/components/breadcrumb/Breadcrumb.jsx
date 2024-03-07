import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ path }) => {
  const segments = path.split("/").filter((segment) => segment !== "");

  return (
    <div className="breadcrumb mb-1">
      {segments.map((segment, index) => (
        <span key={index} className="font-thin">
          <Link
            to={`/${segments.slice(0, index + 1).join("/")}`}
            className={index === segments.length - 1 ? "font-semibold" : ""}
          >
            {segment}
          </Link>
          {index < segments.length - 1 && <span className="mx-2">{'>>'}</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
