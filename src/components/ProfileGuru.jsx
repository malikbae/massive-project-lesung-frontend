import React from "react";

const ProfileGuru = () => {
  return (
    <div className="bg-neutral-100 flex flex-col items-center">
      <div className="flex w-full max-w-[1200px] flex-col mt-5 px-5 max-md:max-w-full max-md:mt-10">
        <div className="bg-primary p-6 rounded-3xl w-full max-w-[1200px] flex flex-col">
          <h1 className="text-4xl font-bold leading-none text-white dark:text-white mb-4">Laporan</h1>
          <div className="bg-background p-6 rounded-3xl w-full max-w-[1200px]">
            <div className="flex flex-row grid grid-cols-2 items-right">
              <div class="justify-start ms-2 flex flex-row items-center">
                <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                  <img src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="justify-start ms-2 flex flex-col pl-5">
                  <h3 class="mb-1 text-3xl font-semibold text-heading dark:text-white">Sendy Prayoga</h3>
                  <p className="mb-1 text-l font-semibold text-gray-700 dark:text-white">Progress : 1/8</p>
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

export default ProfileGuru;
