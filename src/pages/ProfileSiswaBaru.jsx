import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { GoHome } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import Guru3 from "../assets/img/guru-3.jpg";
import Guru4 from "../assets/img/guru-4.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function ProfileSiswaBaru() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "siswa";
  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />

      <section className="py-24">
        <div className="container">
          <div className="flex flex-wrap mx-4 lg:mx-24 xl:mx-32">
            <div className="w-full h-48 rounded-t-lg self-center lg:self-start bg-alt1"></div>

            <div className="flex flex-wrap bg-primary w-full rounded-b-lg lg:px-24 xl:px-32">
              <div className="w-full lg:w-1/2 self-center lg:self-start lg:pb-12">
                <div className="h-24 w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden -mt-12 lg:-mt-14 xl:-mt-16">
                  <img src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="" className="h-full w-full object-cover" />
                </div>
                <h1 className="text-2xl lg:text-4xl font-semibold text-background mt-2 lg:mt-4">Sendy Prayoga</h1>
                <Link to="/edit-profile-siswa">
                  <button className="mt-2 lg:mt-4 rounded-full text-base font-semibold px-8 py-2 bg-secondary hover:bg-opacity-80 duration-300 transition ease-in-out">Edit Profile</button>
                </Link>
              </div>

              <div className="w-full lg:w-1/2 self-center lg:self-start py-12">
                <div className="flex">
                  <span className="mr-4">
                    <GoHome className="text-2xl text-background" />
                  </span>
                  <span>
                    <p className="text-base text-background font-normal">Graha Satria, Jalan RS. Fatmawati Raya.5 2 9 2, RT.2/RW.9, Cilandak Bar., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 40132</p>
                  </span>
                </div>

                <div className="flex mt-2 lg:mt-4">
                  <span className="mr-4">
                    <BsTelephone className="text-2xl text-background" />
                  </span>
                  <span>
                    <p className="text-base text-background font-normal">0813111333444</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="mx-4 lg:mx-24 xl:mx-32 bg-primary rounded-lg py-12">
            <div className="px-4 lg:px-24 xl:px-32 mb-4 ">
              <h1 className="text-2xl lg:text-4xl font-bold text-background">Riwayat Kelas</h1>
            </div>

            <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
              <div className="w-full self-center lg:self-start mb-2">
                <div className="mt-2 lg:mr-4 gap-10 bg-background shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
                      <div className="flex">
                        <div className="p-6 w-[20%] lg:w-[25%] self-center">
                          <div className="h-16 w-16 lg:h-24 lg:w-24 xl:h-30 xl:w-30 rounded-full overflow-hidden">
                            <img src={Guru3} alt="" className="h-full w-full object-cover" />
                          </div>
                        </div>
                        <div className="p-6 w-[80%] lg:w-[75%] self-center">
                          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-heading">Syarifuddin</h3>
                          <p className="text-base text-heading font-normal mt-2">Pendidikan Kewarganegaraan</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 self-center flex justify-start lg:justify-end mb-2">
                      <div className="p-6">
                        <p className="text-base text-heading font-normal text-end">Sedang Berlangsung</p>
                        <button className="mt-2 flex items-center lg:mt-4 rounded-full text-base font-semibold px-8 py-2 bg-secondary hover:bg-opacity-80 duration-300 transition ease-in-out">
                          Lihat Laporan <MdOutlineKeyboardDoubleArrowRight className="text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full self-center lg:self-start mb-2">
                <div className="mt-2 lg:mr-4 gap-10 bg-background shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 self-center lg:self-start mb-2">
                      <div className="flex">
                        <div className="p-6 w-[20%] lg:w-[25%] self-center">
                          <div className="h-16 w-16 lg:h-24 lg:w-24 xl:h-30 xl:w-30 rounded-full overflow-hidden">
                            <img src={Guru4} alt="" className="h-full w-full object-cover" />
                          </div>
                        </div>
                        <div className="p-6 w-[80%] lg:w-[75%] self-center">
                          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-heading">Angelina Putri</h3>
                          <p className="text-base text-heading font-normal mt-2">Bahasa Jepang</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 self-center flex justify-start lg:justify-end mb-2">
                      <div className="p-6">
                        <p className="text-base text-heading font-normal text-end">Selesai</p>
                        <button className="mt-2 flex items-center lg:mt-4 rounded-full text-base font-semibold px-8 py-2 bg-secondary hover:bg-opacity-80 duration-300 transition ease-in-out">
                          Terverifikasi <MdOutlineKeyboardDoubleArrowRight className="text-lg" />
                        </button>
                      </div>
                    </div>
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

export default ProfileSiswaBaru;
