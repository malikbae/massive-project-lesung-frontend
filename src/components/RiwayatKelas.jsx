import React from "react";

const Riwayat = () => {
  return (
    <div className="bg-neutral-100 flex flex-col items-center">
      <div className="flex w-full max-w-[1200px] flex-col items-center mt-5 px-5 max-md:max-w-full max-md:mt-10">
        <div className="bg-primary p-6 rounded-3xl w-full max-w-[1200px]">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-4xl font-bold leading-none text-white dark:text-white">
              Riwayat Kelas
            </h5>
          </div>
          <div class="w-full  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Muhammad Abidin
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Matematika
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <p className="text-body text-sm">Sedang Berlangsung</p>
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center ">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                        alt="Bonnie image"
                      />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Muhammad Abidin
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Matematika
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <p className="text-body text-sm">Sedang Berlangsung</p>
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                        alt="Michael image"
                      />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Muhammad Abidin
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Matematika
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <p className="text-body text-sm">Sedang Berlangsung</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
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

export default Riwayat;
