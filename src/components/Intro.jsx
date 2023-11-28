import React from "react";

const Intro = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl flex flex-col lg:flex-row pt-12 pb-12">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="text-6xl font-semibold pb-5 leading-tight">
          <h1>Selamat Datang di LesUng.</h1>
          <h1>Tempat Belajarnya Tanpa Ribet!</h1>
        </div>
        <div className="max-w-2xl text-lg leading-loose pb-12">
          Dapatkan pengalaman bimbingan belajar atau les privat dengan guru les berkualitas yang sesuai dengan kebutuhan preferensi Anda. Kami menyediakan platform yang memudahkan Anda menemukan apa yang Anda butuhkan.
        </div>
        <div>
          <form className="relative flex items-center">
            <label htmlFor="default-search" className="sr-only dark:text-white">
              Search
            </label>
            <div className="relative flex items-center w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Cari..."
                required
              />
              <button
                type="submit"
                className="text-white bg-primary hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute right-0"
              >
                Cari Kelas
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto lg:w-1/2 lg:pl-8 mt-12">
        <img class="w-full h-auto max-w-md mx-auto lg:mx-0 rounded-lg shadow-xl" src="src/assets/download.jpg" alt="image description" />
      </div>
    </div>
  );
};

export default Intro;
