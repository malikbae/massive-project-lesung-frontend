import React from "react";

const Daftar = () => {
  return (
    <div className="bg-neutral-100 flex flex-col items-center">
      <div className="flex w-full max-w-[1200px] flex-col items-center mt-5 px-5 max-md:max-w-full max-md:mt-10">
        <div className="text-neutral-900 text-5xl font-extrabold leading-[72px] whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[67px] mb-4">
          DAFTAR MENJADI GURU
        </div>
        <form action="" className="w-full max-w-[1200px]">
          <div className="bg-primary p-6 rounded-3xl">
            <label
              class="block mb-4 mt-4text-sm font-medium text-white dark:text-white align-start"
              for="file_input"
            >
              Pendidikan Terakhir
            </label>
            <input
              class="block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
            <label
              class="block mb-4 mt-4 text-sm font-medium text-white dark:text-white align-start"
              for="file_input"
            >
              Kualifikasi
            </label>
            <input
              class="block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
            <label
              class="block mb-4 mt-4 text-sm font-medium text-white dark:text-white align-start"
              for="file_input"
            >
              Pengalaman Mengajar/Intern
            </label>
            <input
              class="block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
            <label
              class="block mb-4 mt-4 text-sm font-medium text-white dark:text-white align-start"
              for="file_input"
            >
              Surat Aktif Kuliah (Mahasiswa)
            </label>
            <input
              class="block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
            <label
              class="block mb-4 mt-4 text-sm font-medium text-white dark:text-white align-start"
              for="file_input"
            >
              Personal Branding Persentation (2-5 Menit)
            </label>
            <input
              class="block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
            <button
              type="button"
              className="text-Dark bg-secondary hover:bg-white font-medium rounded-full text-lg px-20 py-2 text-center mt-4"
            >
              DAFTAR
            </button>
          </div>
        </form>
        <div className="flex w-[228px] max-w-full items-stretch gap-3.5 mr-14 mt-14 self-end max-md:mr-2.5 max-md:mt-10 mb-5">
          <svg
            className="w-[50px] h-[50px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
            <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
          </svg>
          <div className="text-black text-2xl font-bold leading-9 grow whitespace-nowrap mt-1.5 self-start hover:text-primary">
            <a href="">Pusat Bantuan</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
