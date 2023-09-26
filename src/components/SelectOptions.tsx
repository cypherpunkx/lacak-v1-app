import { useEffect, useRef, useState } from "react";

import AsyncSelect from "react-select/async";
// import { ColourOption, colourOptions } from "../data";
import axiosClient from "../lib/axios";
import { colourStyles } from "../lib/colour";
import { ColourOption } from "../interfaces/color";

export default function SelectOptions({ setCourierOption }: any) {
  const [courier, setCourier] = useState([]);
  const courierRef = useRef<any>(null);

  useEffect(() => {
    getCourier();
    courierRef.current.focus();
  }, []);

  const getRandomColor = () => {
    const colors = [
      "#00B8D9",
      "#0052CC",
      "#5243AA",
      "#FF5630",
      "#FF8B00",
      "#FFC400",
      "#36B37E",
      "#00875A",
      "#253858",
      "#666666",
    ];

    const rand = Math.floor(Math.random() * colors.length);

    return colors[rand];
  };

  const getCourier = async () => {
    const data: any = await axiosClient.get("/v1/list_courier", {
      params: {
        id: 1,
      },
    });

    const courierOpt = data.map((c: any, i: number): ColourOption => {
      return {
        label: c.code.toUpperCase(),
        value: c.code,
        color: getRandomColor(),
      };
    });

    setCourier(courierOpt);
  };

  const filterColors = (inputValue: string) => {
    return courier.filter((i: any) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: any) => void
  ) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  return (
    <AsyncSelect
      ref={courierRef}
      cacheOptions
      styles={colourStyles}
      loadOptions={loadOptions}
      defaultOptions={courier}
      onChange={(e: any) => setCourierOption(e.value)}
      required
    />
  );
}
