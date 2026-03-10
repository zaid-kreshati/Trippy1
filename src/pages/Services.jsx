import React from "react";
import { Link, NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div>
        <Link to="/service/backend">backend </Link>
        <div>
          <Link to="/service/frontend">frontend </Link>
        </div>
        <Link to="/service/ui-ux">ui-ux </Link>
      </div>
    </>
  );
};

export default Services;
