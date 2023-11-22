import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../assets/img/hero.jpg";
import TeacherImage from "../assets/img/teaching.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";
import { FaChalkboardTeacher, FaHourglassHalf, FaBook } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";
import Guru1 from "../assets/img/guru-1.jpg";
import Guru2 from "../assets/img/guru-2.jpg";
import Guru3 from "../assets/img/guru-3.jpg";
import { IoWalletSharp } from "react-icons/io5";
import { MdOutlineAccessTimeFilled, MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

function HomePage() {
  const isUserLoggedIn = true;

  const dataGuru = [
    {
      id: 1,
      name: "Muhammad Abidin",
      subject: "Guru Agama & SD",
      backgroundImage: Guru1,
      path: "/detail-guru",
    },
    {
      id: 2,
      name: "Amelia Puspita Sari",
      subject: "Guru Bahasa Indonesia & Inggris",
      backgroundImage: Guru2,
      path: "",
    },
    {
      id: 3,
      name: "Khoirul Anam",
      subject: "Guru Matematika ",
      backgroundImage: Guru3,
      path: "",
    },
    {
      id: 4,
      name: "Muhammad Abidin",
      subject: "Guru Agama & SD",
      backgroundImage: Guru1,
      path: "",
    },
    {
      id: 5,
      name: "Amelia Puspita Sari",
      subject: "Guru Bahasa Indonesia & Inggris",
      backgroundImage: Guru2,
      path: "",
    },
    {
      id: 6,
      name: "Khoirul Anam",
      subject: "Guru Matematika ",
      backgroundImage: Guru3,
      path: "",
    },
  ];

  const benefit = [
    {
      id: 1,
      title: "Harga Relatif Murah",
      description: "Kami berkomitmen untuk memberikan akses pembelajaran berkualitas dengan harga yang terjangkau.",
      icon: IoWalletSharp,
    },
    {
      id: 2,
      title: "Jadwal Fleksibel",
      description: "Kami menghargai kesibukan Anda dan menyediakan jadwal yang dapat disesuaikan dengan kebutuhan Anda.",
      icon: MdOutlineAccessTimeFilled,
    },
    {
      id: 3,
      title: "Profesionalisme",
      description: "Setiap pengajar kami adalah ahli yang dipilih secara cermat untuk memberikan pengalaman pembelajaran terbaik.",
      icon: MdVerified,
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Pilih Guru Les",
      description: "Telusuri beragam pilihan guru les yang sesuai dengan bidang dan kebutuhan belajar Anda.",
      icon: FaChalkboardTeacher,
    },
    {
      id: 2,
      title: "Rekrut Guru Les",
      description: "Setelah menemukan guru les yang tepat, rekrut mereka untuk sesi les pribadi Anda.",
      icon: FaFileCircleCheck,
    },
    {
      id: 3,
      title: "Tunggu Konfirmasi",
      description: "Kami akan segera mengonfirmasi ketersediaan guru les pilihan Anda.",
      icon: FaHourglassHalf,
    },
    {
      id: 4,
      title: "Mulai Pembelajaran",
      description: "Begitu konfirmasi diterima dan pembayaran selesai, Anda siap untuk memulai proses belajar.",
      icon: FaBook,
    },
  ];
  return (
    <>
      <NavBar is_login={isUserLoggedIn} />
      <section className="bg-alt1 text-heading">
        <div className="container flex flex-col justify-center p-12 lg:p-0 mx-auto lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:p-16 lg:max-w-[50%] lg:text-left xl:pl-24 xl:py-16 2xl:pl-32 2xl:py-24">
            <div>
              <h3 className="text-lg/tight xl:text-xl/tight mb-1 font-semibold text-primary">
                <span className="text-body">BIMBINGAN BELAJAR</span> MALES
              </h3>
            </div>
            <div className="mt-4 sm:mt-6 xl:mt-8">
              <h1 className="text-3xl/tight mb-1 sm:text-4xl/tight xl:text-5xl/tight font-semibold text-body">
                <span className="text-heading">Kami Menawarkan</span> Layanan Bimbingan Belajar Private
              </h1>
            </div>
            <div className="mt-4 sm:mt-6 xl:mt-8">
              <p className="text-base/tight mb-1 font-normal text-body">
                Dapatkan pengalaman bimbingan belajar atau les privat dengan guru les berkualitas yang sesuai dengan kebutuhan preferensi anda. Kami menyediakan platform yang memudahkan Anda menemukan apa yang anda butuhkan.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-6 mt-4 sm:mt-6 xl:mt-8">
              <button className="bg-secondary text-heading text-xs lg:text-sm font-semibold rounded-[30px] p-4">LAYANAN KAMI</button>
            </div>
          </div>
          <div className="flex items-center justify-center bg-cover bg-center mt-8 w-full h-80 lg:mt-0 lg:h-auto lg:w-[50%]" style={{ backgroundImage: `url(${HeroImage})` }}></div>
        </div>
      </section>

      <div className="flex items-center justify-center flex-col py-24 bg-background">
        <div className="w-full px-32 flex flex-col lg:flex-row justify-center lg:justify-between items-end">
          <h1 className="text-2xl/tight mb-1 sm:text-3xl/tight xl:text-4xl/tight font-semibold text-heading">Daftar Guru Kami</h1>
          <div className="flex">
            <h3 className="text-sm/tight flex xl:text-md/tight mb-1 font-semibold text-primary mr-2">LIHAT SELENGKAPNYA</h3>
            <GoArrowRight className="text-primary" />
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[85%] py-16"
        >
          {dataGuru.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="block mr-4 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img className="" src={item.backgroundImage} alt="" />
                </div>
                <div className="px-6 pt-6">
                  <h5 className="mb-2 text-xl font-bold text-background dark:text-neutral-50">{item.name}</h5>
                  <p className="text-base text-background border-b-2 border-neutral-100 border-opacity-100 pb-4">{item.subject}</p>
                </div>
                <div className="px-6 py-4 justify-center flex items-center">
                  <Link
                    to={item.path}
                    className="pointer-events-auto inline-block cursor-pointer rounded text-base tracking-wider font-semibold leading-normal text-alt1 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:text-primary-700 mr-2"
                  >
                    LIHAT DETAIL
                  </Link>
                  <GoArrowRight className="text-alt1" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="bg-alt1 text-heading">
        <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:py-16 lg:max-w-[55%] lg:text-left xl:pl-24 xl:py-16 2xl:pl-32 2xl:py-24">
            <div>
              <h3 className="text-md/tight xl:text-lg/tight mb-1 font-semibold text-primary">
                <span className="text-heading">PROSES REKRUTMEN</span> MUDAH
              </h3>
            </div>
            <div className="mt-4 sm:mt-6 xl:mt-8">
              <h1 className="text-2xl/tight mb-1 sm:text-3xl/tight xl:text-4xl/tight font-semibold text-heading">Rekrut Guru Les Hanya Dengan Beberapa Langkah Berikut</h1>
            </div>

            {/* Card */}
            <div className="flex pt-8 flex-wrap">
              {steps.map((step) => (
                <div key={step.id} className="w-[45%] lg:w-[35%] xl:w-[40%] 2xl:w-[45%] mb-8 mr-8 block bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat px-6 pt-6">
                    <step.icon className="text-background text-5xl" />
                  </div>
                  <div className="px-6 pt-6">
                    <h5 className="mb-2 text-xl font-bold text-background dark:text-neutral-50">{step.title}</h5>
                    <p className="text-base text-background pb-4">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* End Card */}

            <div className="flex flex-wrap items-center justify-between gap-6 mt-4 sm:mt-6 xl:mt-8">
              <button className="bg-secondary text-heading text-xs lg:text-sm font-semibold rounded-[30px] p-4">DAFTAR SEKARANG</button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0 w-[40%] lg:py-16 lg:max-w-[45%] lg:text-left xl:pr-24 xl:py-16 2xl:pr-32 2xl:py-24">
            <img src={TeacherImage} alt="" className="object-cover h-full" />
          </div>
        </div>
      </section>

      <section className="bg-background text-heading">
        <div className="w-full px-32 pt-24 flex flex-col lg:flex-row justify-center lg:justify-between items-end">
          <h1 className="text-2xl/tight mb-1 sm:text-3xl/tight xl:text-4xl/tight font-semibold text-heading">Benefit Yang Didapat</h1>
          <div className="flex">
            <h3 className="text-sm/tight flex xl:text-md/tight mb-1 font-semibold text-primary mr-2">LIHAT SEMUA LAYANAN</h3>
            <GoArrowRight className="text-primary" />
          </div>
        </div>
        <div className="container flex flex-col justify-center px-32 pt-16 pb-24 mx-auto lg:flex-row lg:justify-between">
          {benefit.map((item) => (
            <div key={item.id} className="block mr-4 bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat px-6 pt-6">
                <item.icon className="text-background text-5xl" />
              </div>
              <div className="px-6 pt-6">
                <h5 className="mb-2 text-xl font-bold text-background dark:text-neutral-50">{item.title}</h5>
                <p className="text-base text-background border-b-2 border-neutral-100 border-opacity-100 pb-4">{item.description}</p>
              </div>
              <div className="px-6 py-4 justify-center flex items-center">
                <a
                  type="button"
                  href="#"
                  className="pointer-events-auto inline-block cursor-pointer rounded text-base tracking-wider font-semibold leading-normal text-alt1 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:text-primary-700 mr-2"
                >
                  LIHAT LAYANAN
                </a>
                <GoArrowRight className="text-alt1" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
