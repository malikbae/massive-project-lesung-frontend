import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Murid2 from "../assets/img/murid-2.jpg";
import Murid3 from "../assets/img/murid-3.jpg";
import Murid4 from "../assets/img/murid-4.jpg";
import Murid5 from "../assets/img/murid-5.jpg";
import { IoMdNotifications } from "react-icons/io";

function HomepageGuru() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "guru";
  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="px-4 lg:px-24 xl:px-32 mb-4">
            <h1 className="text-2xl lg:text-4xl font-bold text-heading">Kelas Berlangsung</h1>
          </div>
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[30%] self-center">
                    <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                      <img src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Sendy Prayoga</h3>
                    <p className="text-base text-background font-normal truncate overflow-hidden mt-2 lg:mt-4">
                      Graha Satria, Jalan RS. Fatmawati Raya.5 2 9 2, RT.2/RW.9, Cilandak Bar., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 40132
                    </p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">Progress : 1/8</p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">Due Time : November 29, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[30%] self-center">
                    <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                      <img src={Murid2} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Dinda Nurdiyanti</h3>
                    <p className="text-base text-background font-normal truncate overflow-hidden mt-2 lg:mt-4">Jl Malaka 29 CDRoa Malaka, Jakarta, Tambora, Indonesia</p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">Progres : 7/8</p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">November 25, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[30%] self-center">
                    <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                      <img src={Murid3} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Surya Wahyudin</h3>
                    <p className="text-base text-background font-normal truncate overflow-hidden mt-2 lg:mt-4">Pakuwon Citysorento h2 no.19 Jawa Timur, Surabaya, Jawa Timur, 60112, Indonesia</p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">Progres : 3/8</p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">Due Time : December 3, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[30%] self-center">
                    <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                      <img src={Murid4} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Danu Hakim</h3>
                    <p className="text-base text-background font-normal truncate overflow-hidden mt-2 lg:mt-4">Cengkareng Jakarta Barat Jakarta Barat, Jakarta, Jakarta Barat, 11370, Indonesia</p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">Progres : 5/8</p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">Due Time : December 5, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container">
          <div className="px-4 lg:px-24 xl:px-32 mb-4">
            <h1 className="text-2xl lg:text-4xl font-bold text-heading">Selesai</h1>
          </div>
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[30%] self-center">
                    <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                      <img src={Murid5} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Wira Mahendra</h3>
                    <p className="text-base text-background font-normal truncate overflow-hidden mt-2 lg:mt-4">Jalan Penggilingan Raya no.579 Cakung-Jakarta Timur, Java, Jakarta, Indonesia</p>
                    <p className="text-base text-background font-normal mt-2 lg:mt-4">Progress: 8/8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-alt1">
        <div className="container">
          <div className="px-4 lg:px-24 xl:px-32 mb-4">
            <h1 className="text-2xl lg:text-4xl font-bold text-heading">Notifikasi</h1>
          </div>

          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-background shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[10%] lg:w-[5%] self-center">
                    <div className="h-10 w-10 overflow-hidden">
                      <IoMdNotifications className="h-full w-full object-cover text-body" />
                    </div>
                  </div>
                  <div className="p-6 w-[90%] lg:w-[95%] self-center">
                    <p className="text-base text-body font-normal">Anda mendapat tawaran baru untuk mengajar, segera lakukan konfirmasi untuk memulai sesi mengajar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-background shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[10%] lg:w-[5%] self-center">
                    <div className="h-10 w-10 overflow-hidden">
                      <IoMdNotifications className="h-full w-full object-cover text-body" />
                    </div>
                  </div>
                  <div className="p-6 w-[90%] lg:w-[95%] self-center">
                    <p className="text-base text-body font-normal">Anda mendapat tawaran baru untuk mengajar, segera lakukan konfirmasi untuk memulai sesi mengajar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-background shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[10%] lg:w-[5%] self-center">
                    <div className="h-10 w-10 overflow-hidden">
                      <IoMdNotifications className="h-full w-full object-cover text-body" />
                    </div>
                  </div>
                  <div className="p-6 w-[90%] lg:w-[95%] self-center">
                    <p className="text-base text-body font-normal">Anda mendapat tawaran baru untuk mengajar, segera lakukan konfirmasi untuk memulai sesi mengajar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomepageGuru;
