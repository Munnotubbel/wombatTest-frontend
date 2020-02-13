import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const TradeButtons = () => {
  const dataCon = useContext(DataContext);
  const isLoading = dataCon ? dataCon.isLoading : true;
  return (
    <div>
      {isLoading === true ? (
        <div className="tradebuttons"> </div>
      ) : (
        <div className="tradebuttons">
          <div>
            <button className="tradebutton">buy</button>
          </div>
          <div>
            <button className="tradebutton">send</button>
          </div>
          <div>
            <button className="tradebutton">sell</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeButtons;
