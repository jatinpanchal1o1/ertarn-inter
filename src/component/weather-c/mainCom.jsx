import React from "react";
import { useEffect, useState } from "react";
import Menu from "./menu";
import WeatherIcons from "./weatherIcon";
import { CardActionArea } from "@mui/material";
import LineBar from "./lineBar";

const MainCom = () => {
  const [weatherData, setweatherData] = useState(null);

  //   useEffect(() => {
  //     return () => {
  //       featch(api);
  //     };
  //   }, []);

  const selectHandeler = () => {};

  return (
    <div className="bg-[#171717] text-[#a3a3a3] py-2 font-Poppins">
      <div className="flex justify-start mx-2">
        <WeatherIcons icon="01d" width="120px" />
        <div className="my-6 flex justify-start">
          <h1 className="mx-2 text-7xl text-white">43</h1>
          <h4 className="mx-2 text-lg my-1">
            <span className="text-white">&#8451;</span>
            <span className="text-xl">|</span>
            <span className="">&#8457;</span>
          </h4>
          <div className="mx-2 text-base">
            <h1>Precipiation: 0%</h1>
            <h1>Humidity: 16%</h1>
            <h1>Wind: 8Km/h</h1>
          </div>
        </div>
      </div>
      <div className="mx-2">
        <div>
          <Menu />
        </div>
        {/* <div>
          <LineBar />
        </div> */}
        <div className="py-2">
          <div className="flex ">
            <CardActionArea>
              <WeatherIcons
                day="Tue"
                icon="01d"
                cel="43&#176;"
                far="30&#176;"
                classes="mx-auto"
                width="100px"
              />
            </CardActionArea>
            <CardActionArea>
              <WeatherIcons
                day="Wed"
                icon="01d"
                cel="44&#176;"
                far="31&#176;"
                classes="mx-auto"
                width="100px"
              />
            </CardActionArea>
            <CardActionArea>
              <WeatherIcons
                day="Thu"
                icon="01d"
                cel="45&#176;"
                far="31&#176;"
                classes="mx-auto"
                width="100px"
              />
            </CardActionArea>
            <CardActionArea>
              <WeatherIcons
                day="Fri"
                icon="01d"
                cel="45&#176;"
                far="30&#176;"
                classes="mx-auto"
                width="100px"
              />
            </CardActionArea>
            <CardActionArea>
              <WeatherIcons
                day="Sat"
                icon="01d"
                cel="44&#176;"
                far="32&#176;"
                classes="mx-auto"
                width="100px"
              />
            </CardActionArea>
            <CardActionArea>
              <WeatherIcons
                day="Sun"
                icon="01d"
                cel="43&#176;"
                far="31&#176;"
                classes="mx-auto"
                width="100px"
              />
            </CardActionArea>
            <CardActionArea>
              <WeatherIcons
                day="Mon"
                icon="01d"
                cel="41&#176;"
                far="29&#176;"
                classes="mx-auto"
                width="100px"
              />
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCom;
