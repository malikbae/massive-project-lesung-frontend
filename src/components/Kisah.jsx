import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    prevArrow: (
      <button type="button" className="slick-prev">
        Previous
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        Next
      </button>
    ),
  };

  return (
    <div className="bg-primary pb-14 mb-12">
      <div className="mx-auto w-full max-w-screen-xl">
        <h1 className="font-semibold text-3xl text-center text-white p-6">
          Kisah Sukses Kami: Transformasi Belajar yang Menginspirasi!
        </h1>
        <Slider {...settings}>
          <div className="p-2">
            <div className="bg-white p-8 rounded-2xl leading-relaxed h-full">
              <img src="src/assets/Star.svg" className="mb-2" alt="" />
              <p>
                "Kelas di MaLes benar-benar menyenangkan! Tidak seperti
                pelajaran di sekolah, di sini kami belajar sambil bermain. Saya
                sekarang bisa belajar sederhana untuk menunjukkan tugas sekolah
                atau hobi saya. Terima kasih!”
              </p>
              <div className="flex items-center">
                <img
                  src="src/assets/Ellipse 32.png"
                  className="m-4"
                  alt="Slide 1"
                />
                <div>
                  <h5 className="text-lg font-semibold">Budi (Kelas 5 SD)</h5>
                  <p>Pengguna MaLes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-white p-8 rounded-2xl leading-relaxed h-full">
              <img src="src/assets/Star.svg" className="mb-2" alt="" />
              <p>
                "Belajar di MaLes itu seru banget! Materi disampaikan dengan
                cara yang asyik & gurunya nggak pelit ilmu. Saya jadi bisa
                ngerti pelajaran dengan cepat. Terima kasih MaLes memudahkan
                mencari apa yang saya butuhkan!"
              </p>
              <div className="flex items-center">
                <img
                  src="src/assets/Ellipse 33.png"
                  className="m-4"
                  alt="Slide 1"
                />
                <div>
                  <h5 className="text-lg font-semibold">Sendy (Kelas 3 SD)</h5>
                  <p>Pengguna MaLes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-white p-8 rounded-2xl leading-relaxed h-full">
              <img src="src/assets/Star.svg" className="mb-2" alt="" />
              <p>
                "Saya suka belajar di Males karena gurunya selalu siap membantu
                dan menjelaskan hal-hal yang susah. Sekarang, saya lebih siap
                menghadapi ujian sekolah dan tugas-tugas rumah. Males Kursus
                Offline emang tempat belajar yang keren!"
              </p>
              <div className="flex items-center">
                <img
                  src="src/assets/Ellipse 34.png"
                  className="m-4"
                  alt="Slide 1"
                />
                <div>
                  <h5 className="text-lg font-semibold">Diana (Kelas 6 SD)</h5>
                  <p>Pengguna MaLes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-white p-8 rounded-2xl leading-relaxed">
              <img src="src/assets/Star.svg" className="mb-2" alt="" />
              <p>
                "Kelas di MaLes benar-benar menyenangkan! Tidak seperti
                pelajaran di sekolah, di sini kami belajar sambil bermain. Saya
                sekarang bisa belajar sederhana untuk menunjukkan tugas sekolah
                atau hobi saya. Terima kasih!”
              </p>
              <div className="flex items-center">
                <img
                  src="src/assets/Ellipse 32.png"
                  className="m-4"
                  alt="Slide 1"
                />
                <div>
                  <h5 className="text-lg font-semibold">Budi (Kelas 5 SD)</h5>
                  <p>Pengguna MaLes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-white p-8 rounded-2xl leading-relaxed">
              <img src="src/assets/Star.svg" className="mb-2" alt="" />
              <p>
                "Belajar di MaLes itu seru banget! Materi disampaikan dengan
                cara yang asyik & gurunya nggak pelit ilmu. Saya jadi bisa
                ngerti pelajaran dengan cepat. Terima kasih MaLes memudahkan
                mencari apa yang saya butuhkan!"
              </p>
              <div className="flex items-center">
                <img
                  src="src/assets/Ellipse 33.png"
                  className="m-4"
                  alt="Slide 1"
                />
                <div>
                  <h5 className="text-lg font-semibold">Sendy (Kelas 3 SD)</h5>
                  <p>Pengguna MaLes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-white p-8 rounded-2xl leading-relaxed">
              <img src="src/assets/Star.svg" className="mb-2" alt="" />
              <p>
                "Saya suka belajar di Males karena gurunya selalu siap membantu
                dan menjelaskan hal-hal yang susah. Sekarang, saya lebih siap
                menghadapi ujian sekolah dan tugas-tugas rumah. Males Kursus
                Offline emang tempat belajar yang keren!"
              </p>
              <div className="flex items-center">
                <img
                  src="src/assets/Ellipse 34.png"
                  className="m-4"
                  alt="Slide 1"
                />
                <div>
                  <h5 className="text-lg font-semibold">Diana (Kelas 6 SD)</h5>
                  <p>Pengguna MaLes</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
