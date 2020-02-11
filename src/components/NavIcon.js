import React from "react";
import PropTypes from "prop-types";

const NavIcon = props => {
  const iconurl = props ? props.iconurl : "";
  const routename = props ? props.routename : "";

  return (
    <div className="navicon">
      <img alt="NavButton" src={iconurl} />
      <p>{routename}</p>
    </div>
  );
};

NavIcon.propTypes = {
  routename: PropTypes.string,
  iconurl: PropTypes.string
};

export default NavIcon;
