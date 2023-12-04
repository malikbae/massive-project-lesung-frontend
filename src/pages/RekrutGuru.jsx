import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function RekrutGuru() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "siswa";

  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />
      <section className="py-24 bg-alt1">
        <div className="container">
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full lg:w-1/2 self-center lg:self-start mb-4 lg:mb-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-heading text-center">TENTANG GURU</h1>
            </div>
            <div className="w-full lg:w-1/2 self-center">
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-heading">Muhammad Abidin</h3>
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-heading mt-2 lg:mt-4">Agama Islam</h3>
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-heading mt-2 lg:mt-4">Rp200.000 / 8 Sesi</h3>
              <p className="mt-2 lg:mt-4 text-base text-heading font-normal">
                Saya adalah seorang guru yang berdedikasi tinggi dalam memberikan pengetahuan agama dan pendidikan dasar kepada siswa-siswanya. Dengan keahlian yang mendalam dalam ajaran agama dan pengalaman yang luas dalam mengajar di
                tingkat sekolah dasar, saya memiliki kemampuan untuk menginspirasi dan membimbing para siswa dengan kesabaran dan kepedulian yang luar biasa.
              </p>
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-heading mt-2 lg:mt-4">Sistem Kunjungan / ditempat</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full lg:w-1/2 self-center lg:self-start mb-4 lg:mb-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-heading text-center">TENTANG ANDA</h1>
            </div>
            <div className="w-full lg:w-1/2 self-center">
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-heading">Budi</h3>
              <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-heading mt-2 lg:mt-4">Siswa - 4 SD</h3>
              <p className="mt-2 lg:mt-4 text-base text-heading font-normal">Graha Satria, Jalan RS. Fatmawati Raya.5 2 9 2, RT.2/RW.9, Cilandak Bar., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 40132</p>
              <p className="mt-2 lg:mt-4 text-base text-heading font-normal">0813-1113-33444</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-alt1">
        <div className="container">
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full lg:w-1/2 self-center lg:self-start mb-4 lg:mb-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-heading text-center">DETAIL PEMBAYARAN</h1>
            </div>
            <div className="w-full lg:w-1/2 self-center">
              <div className="flex justify-between">
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-body">Metode Pembayaran :</h3>
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-body">Transfer Bank</h3>
              </div>
              <div className="flex justify-between mt-2 lg:mt-4">
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-body">Subtotal :</h3>
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-body">Rp200.000</h3>
              </div>
              <div className="flex justify-between mt-2 lg:mt-4">
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-body">Service Fee :</h3>
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-body">Rp2.500</h3>
              </div>
              <div className="flex justify-between mt-2 lg:mt-4">
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-body">Total Payment :</h3>
                <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-body">Rp202.500</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-wrap px-4 lg:px-24 xl:px-32">
            <div className="w-full mb-4 lg:mb-0 flex justify-center">
              <Link to="/notifikasi-siswa">
                <button className="mt-2 lg:mt-4 rounded-full text-base font-semibold px-8 py-2 bg-secondary hover:bg-opacity-80 duration-300 transition ease-in-out">KONFIRMASI</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default RekrutGuru;
