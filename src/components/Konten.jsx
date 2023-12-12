import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApexCharts from "apexcharts";

const Konten = () => {
  const [options, setOptions] = useState({
    colors: ["#5375E2"],
    series: [
      {
        name: "Transaction(Rupiah)",
        color: "#5375E2",
        data: [
          { x: "Jan", y: 200000 },
          { x: "Feb", y: 250000 },
          { x: "Mar", y: 300000 },
          { x: "Apr", y: 250000 },
          { x: "May", y: 150000 },
          { x: "Jun", y: 250000 },
          { x: "Jul", y: 300000 },
          { x: "Aug", y: 400000 },
          { x: "Sep", y: 350000 },
          { x: "Oct", y: 450000 },
          { x: "Nov", y: 500000 },
          { x: "Des", y: 500000 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "420px",
      width: "1000px",
      fontFamily: "Poppins, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        borderRadiusApplication: "end",
        borderRadius: 3,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Poppins, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Poppins, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Poppins, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
  });

  const [chartRendered, setChartRendered] = useState(false);

  useEffect(() => {
    if (
      document.getElementById("column-chart") &&
      typeof ApexCharts !== "undefined" &&
      !chartRendered
    ) {
      const chart = new ApexCharts(
        document.getElementById("column-chart"),
        options
      );
      chart.render();
      setChartRendered(true);
    }
  }, [options, chartRendered]);

  const iconStyle = {
    color: "white",
    fontSize: "50px",
    display: "flex",
    justify: "center",
  };

  return (
    <div>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="flex grid grid-cols-3 gap-4 mb-4">
            <Link to="/user">
              <div class="flex flex-rows grid grid-rows-2 items-center justify-center h-48 rounded bg-primary dark:bg-gray-800">
                <div className="mt-10">
                  <p class="flex text-xl text-background dark:text-gray-500">
                    <span className="material-icons" style={iconStyle}>
                      person_add
                    </span>
                  </p>
                  <p class="ms-2 text-xl text-background dark:text-gray-500">
                    <span class="d-flex align-items-center justify-content-center font-semibold">
                      User
                    </span>
                  </p>
                </div>
                <p class="flex items-center justify-center text-md font-semibold text-background dark:bg-blue-900 dark:text-blue-300">
                  100
                </p>
              </div>
            </Link>
            <Link to="/guru">
              <div class="flex flex-rows grid grid-rows-2 items-center justify-center h-48 rounded bg-primary dark:bg-gray-800">
                <div className="mt-10">
                  <p class="flex text-xl text-background dark:text-gray-500">
                    <span className="material-icons" style={iconStyle}>
                      person_add
                    </span>
                  </p>
                  <p class="ms-2 text-xl text-background dark:text-gray-500">
                    <span class="d-flex align-items-center justify-content-center font-semibold">
                      Guru
                    </span>
                  </p>
                </div>
                <p class="flex items-center justify-center text-md font-semibold text-background dark:bg-blue-900 dark:text-blue-300">
                  45
                </p>
              </div>
            </Link>
            <Link to="/kelas-berlangsung">
              <div class="flex flex-rows grid grid-rows-2 items-center justify-center h-48 rounded bg-primary dark:bg-gray-800">
                <div className="mt-10">
                  <p class="flex text-xl text-background dark:text-gray-500">
                    <span className="material-icons" style={iconStyle}>
                      person_add
                    </span>
                  </p>
                  <p class="ms-2 text-xl text-background dark:text-gray-500">
                    <span class="d-flex align-items-center justify-content-center font-semibold">
                      Siswa
                    </span>
                  </p>
                </div>
                <p class="flex items-center justify-center text-md font-semibold text-background dark:bg-blue-900 dark:text-blue-300">
                  55
                </p>
              </div>
            </Link>
          </div>

          <div class="flex items-center justify-left h-36 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex grid grid-rows-2 m-8">
              <p class="text-2xl font-medium text-black dark:text-gray-500">
                Transaction Graph
              </p>
              <p class="text-l font-thin text-gray-600 dark:text-gray-500">
                Summary and current transaction activity.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div class="flex items-center justify-start rounded h-28 dark:bg-gray-800">
              <div class="flex items-center justify-start grid grid-cols-2 gap-4">
                <div className="flex grid grid-row-2 m-8 ">
                  <p class="text-l font-thin text-gray-600 dark:text-gray-500">
                    Cash
                  </p>
                  <div className="flex grid grid-cols-2">
                    <p class="text-2xl font-medium text-black dark:text-gray-500">
                      30%
                    </p>
                    <p class="text-l font-medium text-green-600 dark:text-gray-500 mt-1 ml-2">
                      5.90%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-end rounded h-28 dark:bg-gray-800">
              <div className="inline-flex justify-end">
                <form className="relative flex items-center">
                  <label
                    htmlFor="default-search"
                    className="sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative flex items-center w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="Cari..."
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="block flex items-center justify-center w-full justify-center">
            <div id="column-chart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konten;
