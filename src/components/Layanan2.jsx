import React from "react";

const Layanan2 = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl pb-12 bg-primary border border-blue-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-12">
      <h1 className="font-semibold text-3xl text-center text-white m-6">Layanan Bimbingan Private Tersedia Berbagai Jenjang</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
        <div className="relative">
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex flex-col justify-between p-4 leading-normal pb-12">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">1-28 Juli 2022</p>
              <div className="grid grid-cols-2">
                <div className="mt-4">
                  <h5 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">SD</h5>
                  <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">+++ 40 Pelajar</p>
                </div>
                <img class="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mr-4" src="src/assets/bimbel-4-champ-sd.png" alt="" />
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Belajar dengan metode menyenangkan.</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mulai dari:</p>
              <p class="mb-3 text-lg font-bold text-blue-500 dark:text-gray-400">40.000-85.000/Sesi</p>
            </div>
            <div className="absolute bottom-0 right-0 m-4">
              <a
                href="#"
                className="border border-blue-500 inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-blue-500 bg-white rounded-sm hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Pelajari Selengkapnya
              </a>
            </div>
          </a>
        </div>
        <div className="relative">
          <a href="#" class="flex flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl dark:border-gray-700 dark:bg-gray-800">
            <div class="flex flex-col justify-between p-4 leading-normal pb-12">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Akan Datang</p>
              <div className="grid grid-cols-2">
                <div className="mt-4">
                  <h5 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">SMP</h5>
                  <p class="mb-6 font-normal text-gray-200 dark:text-gray-400">+++ 40 Pelajar</p>
                </div>
                <img class="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mr-4" src="src/assets/th.jpeg" alt="" />
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Belajar dengan metode menyenangkan akan segera datang.</p>
              <p class="mb-3 font-normal text-gray-200 dark:text-gray-400"></p>
              <p class="mb-3 text-lg font-bold text-gray-200 dark:text-gray-400">40.000-85.000/Sesi</p>
            </div>
            <div className="absolute bottom-0 right-0 m-4">
              <a href="#" className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-gray-400 rounded-sm focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800">
                Nantikan Segera
              </a>
            </div>
          </a>
        </div>
        <div className="relative">
          <a href="#" class="flex flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl dark:border-gray-700 dark:bg-gray-800">
            <div class="flex flex-col justify-between p-4 leading-normal pb-12">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Akan Datang</p>
              <div className="grid grid-cols-2">
                <div className="mt-4">
                  <h5 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">SMP</h5>
                  <p class="mb-6 font-normal text-gray-200 dark:text-gray-400">+++ 40 Pelajar</p>
                </div>
                <img class="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mr-4" src="src/assets/th.jpeg" alt="" />
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Belajar dengan metode menyenangkan akan segera datang.</p>
              <p class="mb-3 font-normal text-gray-200 dark:text-gray-400"></p>
              <p class="mb-3 text-lg font-bold text-gray-200 dark:text-gray-400">40.000-85.000/Sesi</p>
            </div>
            <div className="absolute bottom-0 right-0 m-4">
              <a href="#" className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-gray-400 rounded-sm focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800">
                Nantikan Segera
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layanan2;
