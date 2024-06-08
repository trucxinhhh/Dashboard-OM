import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function App() {
  const [data1, setData] = useState([]);
  const [data_CO2, setData1] = useState([]);
  const location = useLocation();
  const { username, role } = location.state || {};

  const chart_CO2 = data_CO2.slice(-30);
  const recentData = data1.slice(-1);
  const now = new Date();
  //   const currentTime = now.toLocaleTimeString();
  let today = new Date().toLocaleDateString();
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://665969b8de346625136c4474.mockapi.io/api/v1/test"
      );
      const data1 = await response.json();
      // console.log(data1);
      setData(data1);
      // console.log([data1]);
    }
    loadData();
  }, []);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://665969b8de346625136c4474.mockapi.io/api/v1/CO2"
      );
      const data_CO2 = await response.json();
      // console.log(data_CO2);
      setData1(data_CO2);
    }
    loadData();
  }, []);
  const chartData = (lineColor) => ({
    labels: chart_CO2.map((_, index) => `Point ${index + 1}`), // Assuming data_CO2 has a date field
    datasets: [
      {
        label: "",
        data: chart_CO2.map((item) => item.avatar), // Assuming data_CO2 has a co2 field
        borderColor: lineColor,
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  });
  const options = (title) => ({
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  });

  const stt_Project = Math.floor(Math.random() * 100);

  const isHappy = stt_Project < 35;
  const isSad = 35 < stt_Project && stt_Project < 80;
  const isWarning = stt_Project > 80;

  const randomValue = Math.floor(Math.random() * 100);
  const imagePath = new URL(`/src/assets/user/${role}.jpg`, import.meta.url)
    .href;

  console.log("CIUPE", data_CO2);

  return (
    <div className="p-10 h-screen w-screen max-h-fit max-ww-fit gradient-background ">
      <div className=" flex  bg-white bg-opacity-50 h-full rounded-l-3xl rounded-r-3xl">
        {/* ------------------------------List Box-----------------------------*/}
        <div className=" p-0 w-1/5 hidden md:block">
          <div className="p-4 w-46 rounded-r-xl rounded-l-xl bg-white   Green_screen">
            <div className="flex items-center h-3/5 w-3/5">
              <img
                class="block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:flex-shrink-0"
                src={imagePath}
                alt={`${role}`}
              />

              <div style={{ marginLeft: 10 }}>
                <p>
                  <strong>{username}</strong>
                </p>
                <span>{role}</span>
              </div>
            </div>
            <br></br>
            <ul className="fmt-6 leading-10">
              <a
                className="inline-flex items-center w-full text-lg text-green-500 font-bold transition-colors duration-150 cursor-pointer hover:text-teal-600"
                href=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <span className="ml-4">Dashboard</span>
              </a>
              {role === "Admin" && (
                <li className="flex relative px-2 py-1 ">
                  <a
                    className="inline-flex items-center w-full text-lg text-green-500 font-bold transition-colors duration-150 cursor-pointer hover:text-teal-600"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-users"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                    <span className="ml-4">Users</span>
                  </a>
                </li>
              )}
              {/* <li className="flex relative px-2 py-1 ">
                <a
                  className="inline-flex items-center w-full text-lg text-green-500 font-bold transition-colors duration-150 cursor-pointer hover:text-teal-600"
                  href=" #"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-users"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                  <span className="ml-4">Users</span>
                </a>
              </li>
              <li className="flex relative px-2 py-1 ">
                <a
                  className="inline-flex items-center w-full text-lg text-green-500 font-bold transition-colors duration-150 cursor-pointer hover:text-teal-600"
                  href=" #"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-users"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                  <span className="ml-4">Users</span>
                </a>
              </li>
              <li className="flex relative px-2 py-1 ">
                <a
                  className="inline-flex items-center w-full text-lg text-green-500 font-bold transition-colors duration-150 cursor-pointer hover:text-teal-600"
                  href=" #"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-users"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                  <span className="ml-4">Users</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* -------------------------- End List Box----------------------------- */}

        {/*------------------------------Status Box------------------------------*/}
        <div className="p-4 w-1/2 md:w-2/5">
          {/*----------Status Project ----------*/}
          <div className="flex left-1">
            <div className=" flex flex-col  items-center  w-4/6 p-2 shadow-xl bg-cyan-900 text-white rounded-md mr-2 ">
              <h3 className="mt-2 text-2xl font-bold">{today}</h3>
              <h3 className="mt-2 text-2xl font-bold">{currentTime}</h3>
            </div>
            <div className="flex flex-col items-center  w-4/6 p-2  shadow-xl bg-cyan-900 text-white rounded-md">
              <h3 className="mt-2 text-2xl font-bold">Status Project</h3>
              <div className="flex flex-nowrap">
                {isHappy ? (
                  <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-green-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-mood-wink-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
                      <path d="M9 10h-.01" />
                      <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
                      <path d="M15.5 8.5l-1.5 1.5l1.5 1.5" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-mood-wink-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
                      <path d="M9 10h-.01" />
                      <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
                      <path d="M15.5 8.5l-1.5 1.5l1.5 1.5" />
                    </svg>
                  </div>
                )}
                {isSad ? (
                  <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-mood-sad"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M9 10l.01 0" />
                      <path d="M15 10l.01 0" />
                      <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-mood-sad"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M9 10l.01 0" />
                      <path d="M15 10l.01 0" />
                      <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
                    </svg>
                  </div>
                )}
                {isWarning ? (
                  <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-mood-sad-dizzy"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
                      <path d="M8 9l2 2" />
                      <path d="M10 9l-2 2" />
                      <path d="M14 9l2 2" />
                      <path d="M16 9l-2 2" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-mood-sad-dizzy"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
                      <path d="M8 9l2 2" />
                      <path d="M10 9l-2 2" />
                      <path d="M14 9l2 2" />
                      <path d="M16 9l-2 2" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/*--------End Status Project --------*/}

          {/* ---------- Sensor Table ----------*/}
          <div className="flex flex-col sensor_table h-3/4  w-full  rounded-r-2xl rounded-l-2xl">
            <div className="flex h-1/4 ">
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold ">CO2</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold">Humidity</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold">Temperature</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
            </div>
            <div className="flex h-1/4 sensor_table">
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold">Pressure</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold">Flowmeters</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold">EC</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
            </div>
            <div className="flex h-1/4 sensor_table">
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold">Pressure</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold">Flowmeters</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
              <div className=" flex flex-col  items-center  w-4/6 p-2  bg-white text-black rounded-md mr-2 ">
                <h3 className="mt-2 text-2xl font-bold">EC</h3>
                <h3 className="mt-2 text-xl ">Value: {randomValue}</h3>
                <h3 className="mt-2 text-xl ">Status: {randomValue}</h3>
              </div>
            </div>
          </div>
          {/*--------End Sensor Project --------*/}
        </div>
        {/*--------------------------End Status Box--------------------------*/}

        {/*--------------------------------Chart + Time ---------------------------------*/}
        <div className=" p-4 w-1/2 md:w-2/5 rounded-r-3xl ">
          {/* ----------Chart ----------*/}
          <div className="overflow-y-auto h-full bg- bg-white">
            <ul>
              <li className="text-2xl font-bold">
                <div className="p-2">
                  <Line data={chartData("#f15bb5")} options={options("CO2")} />
                </div>
                <div className="p-2">
                  <Line
                    data={chartData("#fb8500")}
                    options={options("Humidity")}
                  />
                </div>
                <div className="p-2">
                  <Line
                    data={chartData("#bc6c25")}
                    options={options("Temperature")}
                  />
                </div>
                <div className="p-2">
                  <Line
                    data={chartData("#0077b6")}
                    options={options("Flowmeters")}
                  />
                </div>
                <div className="p-2">
                  <Line
                    data={chartData("#8338ec")}
                    options={options("Pressure")}
                  />
                </div>
                <div className="p-2 ">
                  <Line data={chartData("#84a98c")} options={options("EC")} />
                </div>
              </li>
            </ul>
          </div>
          {/*--------End Chart ---------*/}
        </div>
        {/*--------------------------------End ChartTime ---------------------------------*/}
      </div>
    </div>
  );
}

export default App;
