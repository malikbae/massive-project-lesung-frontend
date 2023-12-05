import React from "react";

const ProfileOrtu = () => {
  return (
    <div className="bg-neutral-100 flex flex-col items-center">
      <div className="flex w-full max-w-[1200px] flex-col mt-5 px-5 max-md:max-w-full max-md:mt-10">
        <div className="bg-primary p-6 rounded-3xl w-full max-w-[1200px] flex flex-col">
          <h1 className="text-4xl font-bold leading-none text-white dark:text-white mb-4">
            Laporan
          </h1>
          <div className="bg-background p-6 rounded-3xl w-full max-w-[1200px]">
            <div className="flex flex-row grid grid-cols-2 items-right">
              <div class="justify-start ms-2 flex flex-row items-center">
                <img
                  class="w-32 h-32 rounded-full shadow-lg"
                  src="src/assets/img/guru-1.jpg"
                  alt=""
                />
                <div className="justify-start ms-2 flex flex-col pl-5">
                  <h3 class="mb-1 text-3xl font-semibold text-heading dark:text-white">
                    Muhammad Akmal
                  </h3>
                  <p className="mb-1 text-l font-semibold text-gray-700 dark:text-white">
                    Ilmu Pendidikan Alam
                  </p>
                </div>
              </div>
              <div class="inline-flex justify-end items-top text-base font-semibold text-gray-900 dark:text-white">
                <p className="text-body text-sm">Sedang Berlangsung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrtu;
