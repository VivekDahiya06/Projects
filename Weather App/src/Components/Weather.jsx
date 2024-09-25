import { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import clear from "../assets/images/clear.png";
import clouds from '../assets/images/clouds.png';
import drizzle from '../assets/images/drizzle.png';
import rain from '../assets/images/rain.png';
import snow from '../assets/images/snow.png';
import lightning from '../assets/images/lightning.png';
import mist from '../assets/images/humidity.png';

const Weather = () => {

  const ref = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [weatherData1, setWeatherData1] = useState(false);
  const [weatherData2, setWeatherData2] = useState(false);
  const [weatherData3, setWeatherData3] = useState(false);
  const [weatherData4, setWeatherData4] = useState(false);
  const [time, setTime] = useState("");
  const parentRef = useRef(null);
  // const [parentWidth, setParentWidth] = useState(0);
  

  useEffect(() => {
    const showTime = () => {
      setTime(new Date().toLocaleTimeString());
    };
    const inter = setInterval(showTime, 1000);
    return () => clearInterval(inter);
  }, [time]);

  const input = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const api_key = "95c1eb1b9ce2040aa3def7f776c824a7";
      const api_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`;
      const response = await fetch(api_url);
      var data = await response.json();

      let icon_data = data.list[0].weather[0].icon;
      let icon_data1 = data.list[8].weather[0].icon;
      let icon_data2 = data.list[16].weather[0].icon;
      let icon_data3 = data.list[24].weather[0].icon;
      let icon_data4 = data.list[32].weather[0].icon;
      
        let icon;
        if (icon_data == "01d" || icon_data == "01n") {
          icon = clear;
        }
        else if (icon_data == "02d" || icon_data == "02n") {
          icon = clouds;
        }
        else if (icon_data == "03d" || icon_data == "03n") {
          icon = clouds;
        }
        else if (icon_data == "04d" || icon_data == "04n") {
          icon = clouds;
        }
        else if (icon_data == "09d" || icon_data == "09n") {
          icon = drizzle;
        }
        else if (icon_data == "10d" || icon_data == "10n") {
          icon = rain;
        }
        else if (icon_data == "11d" || icon_data == "11n") {
          icon = lightning;
        }
        else if (icon_data == "13d" || icon_data == "13n") {
          icon = snow;
        }
        else if (icon_data == "50d" || icon_data == "50n") {
          icon = mist;
        }
      
        let icon1;
        if (icon_data1 == "01d" || icon_data1 == "01n") {
          icon1 = clear;
        }
        else if (icon_data1 == "02d" || icon_data1== "02n") {
          icon1 = clouds;
        }
        else if (icon_data1 == "03d" || icon_data1 == "03n") {
          icon1 = clouds;
        }
        else if (icon_data1 == "04d" || icon_data1 == "04n") {
          icon1 = clouds;
        }
        else if (icon_data1 == "09d" || icon_data1 == "09n") {
          icon1 = drizzle;
        }
        else if (icon_data1 == "10d" || icon_data1 == "10n") {
          icon1 = rain;
        }
        else if (icon_data1 == "11d" || icon_data1 == "11n") {
          icon1 = lightning;
        }
        else if (icon_data1 == "13d" || icon_data1 == "13n") {
          icon1 = snow;
        }
        else if (icon_data1 == "50d" || icon_data1 == "50n") {
          icon1 = mist;
        }
      
        let icon2;
        if (icon_data2 == "01d" || icon_data2 == "01n") {
          icon2 = clear;
        }
        else if (icon_data2 == "02d" || icon_data2 == "02n") {
          icon2 = clouds;
        }
        else if (icon_data2 == "03d" || icon_data2 == "03n") {
          icon2 = clouds;
        }
        else if (icon_data2 == "04d" || icon_data2 == "04n") {
          icon2 = clouds;
        }
        else if (icon_data2 == "09d" || icon_data2 == "09n") {
          icon2 = drizzle;
        }
        else if (icon_data2 == "10d" || icon_data2 == "10n") {
          icon2 = rain;
        }
        else if (icon_data2 == "11d" || icon_data2 == "11n") {
          icon2 = lightning;
        }
        else if (icon_data2 == "13d" || icon_data2 == "13n") {
          icon2 = snow;
        }
        else if (icon_data2 == "50d" || icon_data2 == "50n") {
          icon2 = mist;
        }

        let icon3;
        if (icon_data3 == "01d" || icon_data3 == "01n") {
          icon3 = clear;
        }
        else if (icon_data3 == "02d" || icon_data3 == "02n") {
          icon3 = clouds;
        }
        else if (icon_data3 == "03d" || icon_data3 == "03n") {
          icon3 = clouds;
        }
        else if (icon_data3 == "04d" || icon_data3 == "04n") {
          icon3 = clouds;
        }
        else if (icon_data3 == "09d" || icon_data3 == "09n") {
          icon3 = drizzle;
        }
        else if (icon_data3 == "10d" || icon_data3 == "10n") {
          icon3 = rain;
        }
        else if (icon_data3 == "11d" || icon_data3 == "11n") {
          icon3 = lightning;
        }
        else if (icon_data3 == "13d" || icon_data3 == "13n") {
          icon3 = snow;
        }
        else if (icon_data3 == "50d" || icon_data3 == "50n") {
          icon3 = mist;
        }

        let icon4;
        if (icon_data4 == "01d" || icon_data4 == "01n") {
          icon4 = clear;
        }
        else if (icon_data4 == "02d" || icon_data4 == "02n") {
          icon4 = clouds;
        }
        else if (icon_data4 == "03d" || icon_data4 == "03n") {
          icon4 = clouds;
        }
        else if (icon_data4 == "04d" || icon_data4 == "04n") {
          icon4 = clouds;
        }
        else if (icon_data4 == "09d" || icon_data4 == "09n") {
          icon4 = drizzle;
        }
        else if (icon_data4 == "10d" || icon_data4 == "10n") {
          icon4 = rain;
        }
        else if (icon_data4 == "11d" || icon_data4 == "11n") {
          icon4 = lightning;
        }
        else if (icon_data4 == "13d" || icon_data4 == "13n") {
          icon4 = snow;
        }
        else if (icon_data4 == "50d" || icon_data4 == "50n") {
          icon4 = mist;
        }
      setWeatherData({
        TimeStamp: data.list[0].dt,
        Humidity: data.list[0].main.humidity,
        Temperature: Math.round(data.list[0].main.temp),
        Pressure: data.list[0].main.pressure,
        Weather: data.list[0].weather[0].description,
        Temp_Min: Math.round(data.list[0].main.temp_min),
        Temp_Max: Math.round(data.list[0].main.temp_max),
        Icon: icon,
        City: data.city.name,
        Country: data.city.country,
        Time: data.list[0].dt_txt,
        Wind_Speed: data.list[0].wind.speed,
        feels_like: Math.round(data.list[0].main.feels_like),
      });
      setWeatherData1({
        TimeStamp: data.list[8].dt,
        Temperature: Math.round(data.list[8].main.temp),
        Weather: data.list[8].weather[0].description,
        Temp_Min: Math.round(data.list[8].main.temp_min),
        Temp_Max: Math.round(data.list[8].main.temp_max),
        Icon: icon1,
      });
      setWeatherData2({
        TimeStamp: data.list[16].dt,
        Temperature: Math.round(data.list[16].main.temp),
        Weather: data.list[16].weather[0].description,
        Temp_Min: Math.round(data.list[16].main.temp_min),
        Temp_Max: Math.round(data.list[16].main.temp_max),
        Icon: icon2,
      });
      setWeatherData3({
        TimeStamp: data.list[24].dt,
        Temperature: Math.round(data.list[24].main.temp),
        Weather: data.list[24].weather[0].description,
        Temp_Min: Math.round(data.list[24].main.temp_min),
        Temp_Max: Math.round(data.list[24].main.temp_max),
        Icon: icon3,
      });
      setWeatherData4({
        TimeStamp: data.list[32].dt,
        Temperature: Math.round(data.list[32].main.temp),
        Weather: data.list[32].weather[0].description,
        Temp_Min: Math.round(data.list[32].main.temp_min),
        Temp_Max: Math.round(data.list[32].main.temp_max),
        Icon: icon4,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    input("Delhi")
  }, []);

  const day_data = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day_name1 = [
    { day1: day_data[new Date(weatherData.TimeStamp * 1000).getDay()] },
    { day2: day_data[new Date(weatherData1.TimeStamp * 1000).getDay()] },
    { day3: day_data[new Date(weatherData2.TimeStamp * 1000).getDay()] },
    { day4: day_data[new Date(weatherData3.TimeStamp * 1000).getDay()] },
    { day5: day_data[new Date(weatherData4.TimeStamp * 1000).getDay()] }
  ]

  const days = [{
      "id": 0,
      "day": "Today",
      "Max": weatherData.Temp_Max,
      "Min": weatherData.Temp_Min,
    "icon": weatherData.Icon,
    "desc": weatherData.Weather
      
  },
  {
    "id": 1,
      "day": day_name1[1].day2,
      "Max": weatherData1.Temp_Max,
      "Min": weatherData1.Temp_Min,
    "icon": weatherData1.Icon,
      "desc": weatherData1.Weather
  },
  {
      "id": 2,
      "day": day_name1[2].day3,
      "Max": weatherData2.Temp_Max,
      "Min": weatherData2.Temp_Min,
    "icon": weatherData2.Icon,
      "desc": weatherData2.Weather
  },
  {
      "id": 3,
      "day": day_name1[3].day4,
      "Max": weatherData3.Temp_Max,
      "Min": weatherData3.Temp_Min,
    "icon": weatherData3.Icon,
      "desc": weatherData3.Weather
  },
  {
      "id": 4,
      "day": day_name1[4].day5,
      "Max": weatherData4.Temp_Max,
      "Min": weatherData4.Temp_Min,
    "icon": weatherData4.Icon,
      "desc": weatherData4.Weather
  }
  ]

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>WeatherCast</h1>
        </div>
        <div className={weatherData ? "location" : "location hide"}>
          <IoLocation color="white" size="1.5rem" />
          &nbsp;
          <span>{weatherData.City} , {weatherData.Country}</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Enter any location..." ref={ref} />
          <a className="search_icon" onClick={() => input(ref.current.value)}>
            <BiSearchAlt size="1.6rem" color="#ffffff" />
          </a>
        </div>
      </div>
      {weatherData ? <>
        <div className="section">
        <div className="section_up">
          <div className="status">
          <p>Current Weather</p>
            <p>{time}</p>
          </div>
          <div className="Left">
            <div className="upper_left">
              <div className="temp_icon">
                <img
                  src={weatherData.Icon}
                  alt="icon"
                  width="130px"
                  height="120px"
                  className=""
                />
                <p>
                  <span className="temp_value">{weatherData.Temperature}</span>
                  <span className="temp_degree">°C</span>
                </p>
              </div>
              <div className="temp">
                <p>{weatherData.Weather}</p>
                <p>Feels like {weatherData.feels_like}°C</p>
              </div>
            </div>
            <hr className="left"/>
            <div className="lower_left" ref={parentRef}>
              <ul className="data">
                <li>
                  <span>Humidity</span>
                  {"-".repeat(35) + weatherData.Humidity}%
                </li>
                <li>
                  <span>Pressure</span>
                  {"-".repeat(36) + weatherData.Pressure}hPa
                </li>
                <li>
                  <span>Wind Speed</span>
                  {"-".repeat(32) + weatherData.Wind_Speed}m/s
                </li>
                <li>
                  <span>Max Temp</span>
                  {"-".repeat(34) + weatherData.Temp_Max}°C
                </li>
                <li>
                  <span>Min Temp</span>
                  {"-".repeat(34) + weatherData.Temp_Min}°C
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section_down">
          <div className="Middle"></div>
          <div className="Right">
            <h1>5 Day Forecast</h1>
            <div className="day">
              {days.map((day,index) => (
                <>
                  <p className="day_name" key={index}>
                    {day.day} &nbsp;<img src={day.icon} /> {day.desc} &nbsp;
                    Max: {day.Max}°C &nbsp;Min: {day.Min}°C
                  </p>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      </> : <>
        <div className="loading">
            <h1>Invalid Location</h1>
          </div>
      </>}
      
    </>
  );
};

export default Weather;
