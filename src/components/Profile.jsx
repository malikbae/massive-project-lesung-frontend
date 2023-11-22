import React from "react";

const Profile = () => {
  return (
    <div className="bg-neutral-100 flex flex-col items-center">
      <div className="flex w-full max-w-[1200px] flex-col mt-5 px-5 max-md:max-w-full max-md:mt-10">
        <div className="bg-primary p-6 rounded-3xl w-full max-w-[1200px] flex flex-row">
          <div class="justify-start ms-2">
            <img
              class="w-32 h-32 mb-3 rounded-full shadow-lg"
              src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
              alt="Bonnie image"
            />
            <h3 class="mb-1 text-3xl font-medium text-white dark:text-white">
              Muhammad Abidin
            </h3>
            <div class="flex mt-4 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-body bg-secondary rounded-full hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit Profile
              </a>
            </div>
          </div>
          <div class="justify-start basis-1/2 ms-20 mt-5">
            <table>
              <th className="border-none mt-4">
                <tr class="flex items-center">
                  <td className="top-0">
                    <svg
                      class="w-[35px] h-[35px] text-white dark:text-white "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                      />
                    </svg>
                  </td>
                  <td>
                    <h3 class="text-left ml-5">
                      Graha Satria, Jalan RS. Fatmawati Raya.5 2 9 2, RT.2/RW.9,
                      Cilandak Bar., Kota Jakarta Selatan, Daerah Khusus Ibukota
                      Jakarta 40132
                    </h3>
                  </td>
                </tr>
                <tr class="flex items-center mt-8">
                  <td className="top-0">
                    <svg
                      class="w-[35px] h-[35px] text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                      />
                    </svg>
                  </td>
                  <td>
                    <h3 class="text-left ml-5">0813111333444</h3>
                  </td>
                </tr>
              </th>
            </table>

            <div className="ms-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
