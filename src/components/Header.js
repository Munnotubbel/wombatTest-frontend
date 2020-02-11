import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Header = () => {
  const dataCon = useContext(DataContext);
  const isLoading = dataCon ? dataCon.isLoading : true;
  const accountName = dataCon ? dataCon.accountName : "nobody";

  return (
    <div className="headtitle">
      {isLoading === true ? (
        <h1>loading</h1>
      ) : (
        <h1>{accountName !== null ? accountName : "nobody"}</h1>
      )}
    </div>
  );
};

export default Header;
