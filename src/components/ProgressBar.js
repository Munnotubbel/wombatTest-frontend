import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { DataContext } from "../context/DataContext";

const ProgressBar = props => {
  const dataCon = useContext(DataContext);
  const loading = dataCon ? dataCon.isLoading : true;
  const percent = props ? props.percent : 0;
  const slug = props ? props.slug : Math.random.toString;
  const bool = loading === true;
  useEffect(() => move(), [bool]);

  var i = 0;
  function move() {
    var elem = document.getElementById(slug);
    if (percent > 0) {
      if (i === 0) {
        i = 1;

        var width = 0;
        var id = setInterval(frame, 20);
        function frame() {
          if (width >= percent) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    } else {
      elem.style.width = percent + "%";
    }
  }

  return (
    <div className="progressbar">
      <div className="percent">
        <div>{isNaN(percent) ? "-" : percent} %</div>
      </div>
      <div className="barOuter">
        <div
          id={slug}
          style={{
            width: "0%",
            maxWidth: "100%",
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: "2px",
            height: "16px",
            borderStyle: "solid"
          }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  slug: PropTypes.string,
  percent: PropTypes.number
};

export default ProgressBar;
