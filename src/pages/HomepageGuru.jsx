import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Guru1 from "../assets/img/guru-1.jpg";
import Guru2 from "../assets/img/guru-2.jpg";
import Guru3 from "../assets/img/guru-3.jpg";
import Guru4 from "../assets/img/guru-4.jpg";
import { MdVerified } from "react-icons/md";
import { FaClipboardList, FaHourglassHalf, FaClipboardCheck } from "react-icons/fa";

function HomepageGuru() {
  const isUserLoggedIn = true;
  return (
    <>
      <NavBar is_login={isUserLoggedIn} />

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
                      <img src={Guru1} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Muhammad Abidin</h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background mt-2 lg:mt-4">Agama Islam</h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background mt-2 lg:mt-4">Progress: 1/8</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[30%] self-center">
                    <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                      <img src={Guru2} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Amelia Puspita Sari</h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background mt-2 lg:mt-4">Bahasa Indonesia</h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background mt-2 lg:mt-4">Progres : 7/8</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[30%] self-center">
                    <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                      <img src={Guru4} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Angelina Putri</h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background mt-2 lg:mt-4">Bahasa Jepang</h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background mt-2 lg:mt-4">Progres : 3/8</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
              <div className="mt-2 lg:mr-4 gap-10 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="p-6 w-[30%] self-center">
                    <div className="h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                      <img src={Guru3} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 w-[70%]">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background">Khoirul Anam</h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background mt-2 lg:mt-4">Matematika</h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-background mt-2 lg:mt-4">Progres : 5/8</h3>
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
                      <MdVerified className="h-full w-full object-cover text-body" />
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
                      <MdVerified className="h-full w-full object-cover text-body" />
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
                      <MdVerified className="h-full w-full object-cover text-body" />
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
