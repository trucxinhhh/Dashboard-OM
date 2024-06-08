import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
function App() {
  const [data1, setData] = useState([]);
  const [data_CO2, setData1] = useState([]);



  useEffect(() => {
    async function loadData() {
      const response = await fetch("https://665969b8de346625136c4474.mockapi.io/api/v1/test");
      const data1 = await response.json();
      // console.log(data1);
      setData(data1);
      // console.log([data1]);

    }
    loadData();
  }, []);
  useEffect(() => {
    async function loadData() {
      const response = await fetch("https://665969b8de346625136c4474.mockapi.io/api/v1/CO2");
      const data_CO2 = await response.json();
      // console.log(data_CO2);
      setData1(data_CO2);
    }
    loadData();
  }, []);
  console.log("CIUPE", data_CO2)
  const chart_CO2 = data_CO2.slice(-30)
  const recentData = data1.slice(-8);
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  let today = new Date().toLocaleDateString();
  console.log(today);
  console.log(currentTime);
  const chartData = {
    labels: chart_CO2.map((_, index) => `Point ${index + 1}`), // Assuming data_CO2 has a date field
    datasets: [
      {
        label: 'CO2 Levels',
        data: chart_CO2.map(item => item.avatar), // Assuming data_CO2 has a co2 field
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'CO2 Levels Over Time',
      },
    },
  };

  return (
    <body>
      <div className="p-10 h-screen w-screen max-h-fit max-ww-fit gradient-background ">
        <div className=" flex bg-white rounded-r-3xl rounded-l-3xl">
          {/* ------------------------------List Box------------------------------ */}

          <div className=" p-0 ">
            <div className="p-4 w-46 rounded-r-xl rounded-l-xl bg-green-200 Green_screen">
              <div
                className="flex items-center h-3/5 w-3/5"

              >
                <img
                  className="h-8 w-8 object-cover rounded-full "
                  src="/src/assets/user/cow.jpg"
                />
                <div style={{ marginLeft: 10 }}>
                  <p>
                    <strong>Name</strong>
                  </p>
                  <span>Administration</span>
                </div>
              </div>
              <br></br>
              <ul className="fmt-6 leading-10">
                <li className=" flex relative px-2 py-1 ">
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
                </li>
              </ul>
            </div>
          </div>
          {/* ------------------------------Status Box------------------------------*/}
          <div className="bg-white p-4 ">
            {/* ----------Status Project ----------*/}

            <div className="flex status_box  ">
              <h2>
                <b>Status Project</b>
              </h2>
              <br></br>
              <div className="flex flex-nowrap">
                <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500">
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
                <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-yellow-500">
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
                <div className="flex relative px-2 py-1 w-14 text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-red-500">
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
                <p>cfgh</p>
              </div>
            </div>

            {/* ---------- Sensor Table ----------*/}

            <div class="mt-4 shadow-lg shadow-[#7AB2B2]">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto">
                  <div class="py-2 align-middle inline-block min-w-full">
                    <div
                      class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white text-center">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th class="px-6 py-3 bg-green-400 text-xs leading-4 font-medium text-black uppercase tracking-wider">
                              <div class="flex justify-center items-center cursor-pointer">
                                <span class="mr-2 text">STATUS</span>
                              </div>
                            </th>
                            <th class="px-6 py-3 bg-green-400 text-xs leading-4 font-medium text-black uppercase tracking-wider">
                              <div class="flex justify-center items-center cursor-pointer">
                                <span class="mr-2 text">Co2</span>
                              </div>
                            </th>
                            <th class="px-6 py-3 bg-green-400 text-xs leading-4 font-medium text-black uppercase tracking-wider">
                              <div class="flex justify-center items-center cursor-pointer">
                                <span class="mr-2 text">Humidity</span>
                              </div>
                            </th>
                            <th class="px-6 py-3 bg-green-400 text-xs leading-4 font-medium text-black uppercase tracking-wider">
                              <div class="flex justify-center items-center cursor-pointer">
                                <span class="mr-2 text">Temperature</span>
                              </div>
                            </th>
                            <th class="px-6 py-3 bg-green-400 text-xs leading-4 font-medium text-black uppercase tracking-wider">
                              <div class="flex justify-center items-center cursor-pointer">
                                <span class="mr-2 text">Pressure</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          {recentData.map((item, index) => (
                            <tr key={index} className="text-center">
                              <td class="px-6 py-4 whitespace-no-wrap text-center leading-5">
                                <div class="flex justify-center items-center text-red-700">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <p>Deactive</p>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center leading-5">{item.Co2}</td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center leading-5">{item.Humidity}</td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center leading-5">{item.Temperature}</td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center leading-5">{item.Pressure}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------Chart------------------------------*/}
          <div className=" p-2 h-full">
            <div className="p-2">
              <Line data={chartData} options={options} />
            </div>
            <div className="p-2 bg-green-100">
              <Line data={chartData} options={options} />
            </div>
            <div className="p-2 bg-green-100">
              <Line data={chartData} options={options} />
            </div>

          </div>
        </div>
      </div>
    </body>

  );
}

export default App;
