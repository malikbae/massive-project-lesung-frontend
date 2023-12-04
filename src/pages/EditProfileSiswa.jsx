import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

function EditProfileSiswa() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "siswa";
  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />

      <section className="py-24">
        <div className="container">
          <div className="mx-4 lg:mx-24 xl:mx-32 bg-primary rounded-lg py-12">
            <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
              <div className="w-full lg:w-[30%] self-start mb-4 lg:mb-0">
                <div className="h-24 w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full overflow-hidden">
                  <img src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="" className="h-full w-full object-cover" />
                </div>
                <FiPlusCircle className="text-3xl text-background -mt-5 ml-12 lg:ml-14 xl:-mt-6 xl:ml-20 cursor-pointer" />
              </div>
              <div className="w-full lg:w-[70%] self-start">
                <form action="">
                  <div className="flex flex-wrap justify-between items-center">
                    <label htmlFor="" className="text-base mr-4 text-background font-normal">
                      Nama Lengkap
                    </label>
                    <input type="text" className="rounded-lg w-[70%]" />
                  </div>

                  <div className="mt-2 lg:mt-4 flex flex-wrap justify-between items-center">
                    <label htmlFor="" className="text-base mr-4 text-background font-normal">
                      Alamat
                    </label>
                    <input type="text" className="rounded-lg w-[70%]" />
                  </div>

                  <div className="mt-2 lg:mt-4 flex flex-wrap justify-between items-center">
                    <label htmlFor="" className="text-base mr-4 text-background font-normal">
                      Handphone
                    </label>
                    <input type="text" className="rounded-lg w-[70%]" />
                  </div>

                  <div className="flex justify-start lg:justify-end mt-4">
                    <button className="mt-2 lg:mt-4 rounded-full text-base font-semibold px-8 py-2 bg-secondary hover:bg-opacity-80 duration-300 transition ease-in-out">Simpan</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="mx-4 lg:mx-24 xl:mx-32 bg-primary rounded-lg py-12">
            <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
              <div className="w-full self-start mb-4 lg:mb-0">
                <h1 className="text-2xl lg:text-4xl font-bold text-background text-center">DAFTAR MENJADI GURU</h1>
                <p className="mt-2 lg:mt-6 text-base text-background font-normal text-center">
                  Peluang Luas Menanti Anda untuk Menjadi Bagian dari Perjalanan Mendidik Generasi Masa Depan. Bergabunglah, Kembangkan Potensi, Sumbangkan Pengetahuan, dan Ukir Kenangan Tak Terlupakan dalam Setiap Kehidupan yang Anda
                  Sentuh!
                </p>
                <div className="flex justify-center mt-2 lg:mt-6">
                  <Link to="/daftar">
                    <button className="rounded-full text-base font-semibold px-8 py-2 bg-secondary hover:bg-opacity-80 duration-300 transition ease-in-out">DAFTAR</button>
                  </Link>
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

export default EditProfileSiswa;
