import React from "react";

const Layanan1 = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl pb-12">
      <div className="grid grid-cols-2 gap-4">
        <div className="max-w-xl bg-primary border border-primary rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="src/assets/Rectangle 66.png" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bimbingan MaLes</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bimbel tatap muka, belajar tanpa ribet tersedia sekarang sudah berada di sekitar Anda !</p>
            </div>
          </a>
          <div className="flex justify-end m-4">
            <a
              href="#"
              class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-primary bg-white rounded-sm hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Temukan Guru Terdekat
            </a>
          </div>
        </div>
        <div className="max-w-xl bg-primary border border-primary rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:ms-auto">
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="src/assets/Rectangle 67.png" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Konsultasi MaLes</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Masih bingung cari guru bimbel yang pas untuk anak? Yuk konsultasikan dulu kebutuhan Anda!</p>
            </div>
          </a>
          <div className="flex justify-end m-4">
            <a
              href="#"
              class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-primary bg-white rounded-sm hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Konsultasi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan1;
