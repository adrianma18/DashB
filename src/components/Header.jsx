import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-3xl font-extrabold tracking-tight text-slate-700">
        {title}
      </p>
    </div>
  );
};

export default Header;
