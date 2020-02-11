import React, { useContext } from "react";
import RessourceType from "./RessourceType";
import ProgressBar from "./ProgressBar";
import { DataContext } from "../context/DataContext";

const Ressources = () => {
  const dataCon = useContext(DataContext);
  const net_use = dataCon ? dataCon.net_use : 0;
  const net_max = dataCon ? dataCon.net_max : 0;
  const net_weight = dataCon ? dataCon.net_weight : (0).toFixed(4);
  const cpu_use = dataCon ? dataCon.cpu_use : 0;
  const cpu_max = dataCon ? dataCon.cpu_max : 0;
  const cpu_weight = dataCon ? dataCon.cpu_weight : (0).toFixed(4);
  const ram_use = dataCon ? dataCon.ram_use : 0;
  const ram_max = dataCon ? dataCon.ram_max : 0;

  function calcPercent(number1, number2) {
    const percent = Math.round((number1 / number2) * 100);

    if (percent >= 100) {
      return 100;
    } else if (percent >= 0) {
      return percent;
    } else {
      return 0;
    }
  }

  return (
    <div className="ressources">
      <div>
        <RessourceType
          type={"Net"}
          consumption={`${net_use}kb / ${net_max}kb`}
          staked={net_weight}
          withIcon={true}
        />
        <ProgressBar percent={calcPercent(net_use, net_max)} slug={"netBar"} />
      </div>

      <div>
        <RessourceType
          type={"Cpu"}
          consumption={`${cpu_use}kb / ${cpu_max}kb`}
          staked={cpu_weight}
          withIcon={true}
        />
        <ProgressBar percent={calcPercent(cpu_use, cpu_max)} slug={"cpuBar"} />
      </div>

      <div style={{ marginBottom: "60px" }}>
        <RessourceType
          type={"Ram"}
          consumption={`${ram_use}kb / ${ram_max}kb`}
          staked={""}
        />
        <ProgressBar percent={calcPercent(ram_use, ram_max)} slug={"ramBar"} />
      </div>
    </div>
  );
};

export default Ressources;
