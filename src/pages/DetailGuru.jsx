import { FaStar } from "react-icons/fa";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { GoArrowRight } from "react-icons/go";
import Guru1 from "../assets/img/guru-1.jpg";
import Guru2 from "../assets/img/guru-2.jpg";
import Guru3 from "../assets/img/guru-3.jpg";

function DetailGuru() {
  const isUserLoggedIn = true;
  return (
    <>
      <NavBar is_login={isUserLoggedIn} />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:px-24 xl:px-32">
              <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left text-primary">INFORMASI DETAIL GURU</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="container">
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full lg:w-1/2 self-center lg:self-start mb-4 lg:mb-0">
              <img className="rounded-lg lg:w-4/5" src={Guru1} alt="foto-guru" />
            </div>
            <div className="w-full lg:w-1/2 self-center">
              <h1 className="text-2xl lg:text-4xl font-bold text-background">Muhammad Abidin</h1>
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-background mt-2 lg:mt-4">Guru Agama & SD</h3>
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-background mt-2 lg:mt-4">Rp200.000 / 8 Sesi</h3>
              <div className="flex mt-2 items-center">
                <FaStar className="text-[#FFD700]" />
                <FaStar className="text-[#FFD700]" />
                <FaStar className="text-[#FFD700]" />
                <FaStar className="text-[#FFD700]" />
                <FaStar className="text-[#FFD700]" />
                <span className="ml-2 text-base text-background">(12)</span>
              </div>
              <p className="mt-2 lg:mt-4 text-base text-background font-normal">
                Saya adalah seorang guru yang berdedikasi tinggi dalam memberikan pengetahuan agama dan pendidikan dasar kepada siswa-siswanya. Dengan keahlian yang mendalam dalam ajaran agama dan pengalaman yang luas dalam mengajar di
                tingkat sekolah dasar, saya memiliki kemampuan untuk menginspirasi dan membimbing para siswa dengan kesabaran dan kepedulian yang luar biasa.
              </p>
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-background mt-2 lg:mt-4">Kuota Anak Didik: 2/5</h3>
              <button className="mt-2 lg:mt-4 rounded-full text-base font-semibold px-8 py-2 bg-secondary hover:bg-opacity-80 duration-300 transition ease-in-out">REKRUT</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-alt1">
        <div className="container">
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full lg:w-1/2 self-center lg:self-start mb-4 lg:mb-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-heading">Pendidikan</h1>
              <ul className="list-disc">
                <li className="mx-8 mt-2 lg:mt-4 font-semibold">Universitas Negeri Jakarta</li>
                <p className="mx-8 mt-2">Jurusan Matematika dan Keguruan</p>
                <p className="mx-8 mt-2">2002-2006</p>
              </ul>
              <ul className="list-disc">
                <li className="mx-8 mt-2 lg:mt-4 font-semibold">SMA Negeri 01 Surabaya</li>
                <p className="mx-8 mt-2">1999-2002</p>
              </ul>
              <ul className="list-disc">
                <li className="mx-8 mt-2 lg:mt-4 font-semibold">SMP Negeri 02 Surabaya</li>
                <p className="mx-8 mt-2">1996-1999</p>
              </ul>
              <ul className="list-disc">
                <li className="mx-8 mt-2 lg:mt-4 font-semibold">SD Negeri 01 Surabaya</li>
                <p className="mx-8 mt-2">1993-1996</p>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 self-center lg:self-start mb-4 lg:mb-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-heading">Pengalaman</h1>
              <ul className="list-disc">
                <li className="mx-8 mt-2 lg:mt-4 font-semibold">Guru Matematika SDN 2 Jakarta (2007 - 2012)</li>
                <p className="mx-8 mt-2">Mengambangkan dan memperbarui materi pembelajaran sesuai dengan kurikulum terbaru.</p>
                <p className="mx-8 mt-2">Berpartisipasi di acara guru dan orang tua dalam pembagian rapot.</p>
                <p className="mx-8 mt-2">Menyediakan tutor sehabis kelas untuk anak-anak yang kurang dan membantu mereka meningkatkan nilai sebanyak 40%.</p>
              </ul>
              <ul className="list-disc">
                <li className="mx-8 mt-2 lg:mt-4 font-semibold">Guru Bimbel Matematika (2010 - 2012)</li>
                <p className="mx-8 mt-2">Menyediakan pelatihan dan soal-soal untuk menambah dan mengulang pembelajaran disekolah.</p>
                <p className="mx-8 mt-2">Menjelaskan dan menjawab pertanyaan soal sehingga membantu anak lulus ujian.</p>
              </ul>
            </div>
            <div className="w-full self-center lg:self-start mb-4 lg:mb-0 lg:mt-8">
              <h1 className="text-2xl lg:text-4xl font-bold text-heading">Keahlian</h1>
              <div className="flex">
                <ul className="list-disc">
                  <li className="mx-8 mt-2 lg:mt-4 font-semibold">Keterampilan Non Akademis</li>
                  <p className="mx-8 mt-2">Pengaturan waktu</p>
                  <p className="mx-8 mt-2">Pemecahan masalah</p>
                  <p className="mx-8 mt-2">Kesabaran</p>
                  <p className="mx-8 mt-2">Teknik Mengajar</p>
                  <p className="mx-8 mt-2">Kreativitas</p>
                </ul>
                <ul className="list-disc">
                  <li className="mx-8 mt-2 lg:mt-4 font-semibold">Keterampilan Akademis</li>
                  <p className="mx-8 mt-2">Kalkulus</p>
                  <p className="mx-8 mt-2">Geometri</p>
                  <p className="mx-8 mt-2">Matematika Terapan</p>
                  <p className="mx-8 mt-2">Aritmatika</p>
                  <p className="mx-8 mt-2">Statistik</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="px-4 lg:px-24 xl:px-32">
            <h1 className="text-2xl lg:text-4xl font-bold text-heading">Review Orang Lain</h1>
          </div>
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32 lg:mt-4">
            <div className="w-full lg:w-1/3">
              <div className="mt-2 lg:mr-4 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="p-6">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-background mt-2 lg:mt-4">Upin Bin Marzuki</h3>
                  <div className="flex mt-2 items-center">
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                  </div>
                  <p className="mt-2 lg:mt-4 text-base text-background font-normal">Saya merasa sangat beruntung bisa belajar dengan Anda. Pengalaman belajar bersamanya sungguh luar biasa dan memuaskan.</p>
                  <h3 className="text-sm md:text-md lg:text-lg font-semibold text-background mt-2 lg:mt-4">20 Oktober 2023</h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="mt-2 lg:mr-4 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="p-6">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-background mt-2 lg:mt-4">Nanang Knalpot</h3>
                  <div className="flex mt-2 items-center">
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                  </div>
                  <p className="mt-2 lg:mt-4 text-base text-background font-normal">Saya ingin ucapkan terima kasih kepada Anda atas pengalaman belajar yang menginspirasi. Belajar bersamanya adalah suatu keistimewaan yang saya syukuri. </p>
                  <h3 className="text-sm md:text-md lg:text-lg font-semibold text-background mt-2 lg:mt-4">14 Oktober 2023</h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="mt-2 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="p-6">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-background mt-2 lg:mt-4">Udin Gesper</h3>
                  <div className="flex mt-2 items-center">
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                    <FaStar className="text-[#FFD700]" />
                  </div>
                  <p className="mt-2 lg:mt-4 text-base text-background font-normal">Saya ingin berbagi betapa mengagumkannya pengalaman belajar disini. Beliau telah mengubah cara saya memahami dan mendekati materi pelajaran.</p>
                  <h3 className="text-sm md:text-md lg:text-lg font-semibold text-background mt-2 lg:mt-4">1 Juli 2023</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-alt1">
        <div className="container">
          <div className="px-4 lg:px-24 xl:px-32">
            <h1 className="text-2xl lg:text-4xl font-bold text-heading">Pengajar Lainnya</h1>
          </div>
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32 lg:mt-4">
            <div className="w-full lg:w-1/3">
              <div className="block mt-2 lg:mr-4 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img className="" src={Guru2} alt="" />
                </div>
                <div className="px-6 pt-6">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-background mt-2 lg:mt-4">Amelia Puspita Sari</h3>
                  <p className="mt-2 lg:mt-4 text-base text-background font-normal border-b-2 border-neutral-100 border-opacity-100 pb-4">Guru Bahasa Indonesia & Inggris</p>
                </div>
                <div className="px-6 py-4 justify-center flex items-center">
                  <a
                    type="button"
                    href="#"
                    className="pointer-events-auto inline-block cursor-pointer rounded text-base tracking-wider font-semibold leading-normal text-alt1 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:text-primary-700 mr-2"
                  >
                    LIHAT DETAIL
                  </a>
                  <GoArrowRight className="text-alt1" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="block mt-2 lg:mr-4 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img className="" src={Guru3} alt="" />
                </div>
                <div className="px-6 pt-6">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-background mt-2 lg:mt-4">Khoirul Anam</h3>
                  <p className="mt-2 lg:mt-4 text-base text-background font-normal border-b-2 border-neutral-100 border-opacity-100 pb-4">Guru Matematika</p>
                </div>
                <div className="px-6 py-4 justify-center flex items-center">
                  <a
                    type="button"
                    href="#"
                    className="pointer-events-auto inline-block cursor-pointer rounded text-base tracking-wider font-semibold leading-normal text-alt1 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:text-primary-700 mr-2"
                  >
                    LIHAT DETAIL
                  </a>
                  <GoArrowRight className="text-alt1" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="block mt-2 lg:mr-4 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img className="" src={Guru1} alt="" />
                </div>
                <div className="px-6 pt-6">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-background mt-2 lg:mt-4">Muhammad Abidin</h3>
                  <p className="mt-2 lg:mt-4 text-base text-background font-normal border-b-2 border-neutral-100 border-opacity-100 pb-4">Guru Agama & SD</p>
                </div>
                <div className="px-6 py-4 justify-center flex items-center">
                  <a
                    type="button"
                    href="#"
                    className="pointer-events-auto inline-block cursor-pointer rounded text-base tracking-wider font-semibold leading-normal text-alt1 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:text-primary-700 mr-2"
                  >
                    LIHAT DETAIL
                  </a>
                  <GoArrowRight className="text-alt1" />
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

export default DetailGuru;
