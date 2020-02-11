import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = props => {
  useEffect(() => {
    getExchangeValue();
    getAccount();
  }, []);

  const [accountName, setAccountName] = useState("genialwombat");
  const [ballance, setBallance] = useState("0.0000");
  const [net_max, setNet_max] = useState(0);
  const [net_use, setNet_use] = useState(0);
  const [cpu_max, setCpu_max] = useState(0);
  const [cpu_use, setCpu_use] = useState(0);
  const [ram_max, setRam_max] = useState(0);
  const [ram_use, setRam_use] = useState(0);
  const [netWeight, setNetWeight] = useState((0).toFixed(4));
  const [cpuWeight, setCpuWeight] = useState((0).toFixed(4));
  const [staked, setStaked] = useState((0).toFixed(4));
  const [exchangeValue, setExchangeValue] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const sourceLink = "*";

  function getExchangeValue() {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://eos-station.herokuapp.com/api/fetch/price", requestOptions)
      .then(response => response.json())
      .then(res => setExchangeValue(res[0].price))

      .catch(error => console.log("error", error));
  }

  function changeAccountName(name) {
    setAccountName(name);
  }

  function getAccount() {
    // Request Header for direct API

    /*       var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = `{"account_name":"${accountName}"}`;

     var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };   */

    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", sourceLink);
    var requestOptions2 = {
      method: "GET",
      redirect: "follow",
      headers: { "Access-Control-Allow-Origin": sourceLink }
    };

    // https://api.eosdetroit.io:443/v1/chain/get_account direct API

    fetch(
      `https://eos-station.herokuapp.com/api/fetch/${accountName}`,
      requestOptions2
    )
      .then(response => response.json())
      .then(result => {
        const net_max = isNaN(result.net_limit.max) ? 0 : result.net_limit.max;
        const net_used = isNaN(result.net_limit.used)
          ? 0
          : result.net_limit.used;
        const cpu_max = isNaN(result.cpu_limit.max) ? 0 : result.cpu_limit.max;
        const cpu_used = isNaN(result.cpu_limit.used)
          ? 0
          : result.cpu_limit.used;
        const ram_max = isNaN(result.ram_quota) ? 0 : result.ram_quota;
        const ram_used = isNaN(result.ram_usage) ? 0 : result.ram_usage;
        const net_weight = isNaN(result.net_weight) ? 0 : result.net_weight;
        const cpu_weight = isNaN(result.cpu_weight) ? 0 : result.cpu_weight;
        const ballance =
          typeof result.core_liquid_balance === String
            ? " - "
            : result.core_liquid_balance;

        result.core_liquid_balance && setBallance(ballance.replace(" EOS", ""));
        setNet_max(round2(net_max / 1000));
        setNet_use(round2(net_used / 1000));
        setCpu_max(round2(cpu_max / 1000));
        setCpu_use(round2(cpu_used / 1000));
        setRam_max(round2(ram_max / 1000));
        setRam_use(round2(ram_used / 1000));
        setNetWeight(stakedFormat(net_weight, 0));
        setCpuWeight(stakedFormat(cpu_weight, 0));
        setStaked(stakedFormat(net_weight, cpu_weight));
        setIsLoading(false);
      })
      .catch(error => console.log("error", error));
  }

  function round2(number) {
    number = Math.round(number * 100) / 100;
    return number;
  }

  function stakedFormat(number1, number2) {
    return ((number1 + number2) / 10000).toFixed(4);
  }

  return (
    <DataContext.Provider
      value={{
        ballance: ballance,
        staked: staked,
        accountName: accountName,
        net_max: net_max,
        net_use: net_use,
        cpu_max: cpu_max,
        cpu_use: cpu_use,
        ram_max: ram_max,
        ram_use: ram_use,
        net_weight: netWeight,
        cpu_weight: cpuWeight,
        exchangeValue: exchangeValue,
        isLoading: isLoading,
        changeAccountName: changeAccountName
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
