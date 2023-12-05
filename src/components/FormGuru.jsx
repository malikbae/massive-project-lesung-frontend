import React, { useState } from "react";
import img from "../assets/img/guru-3.jpg";
import { Link } from "react-router-dom";

const FormGuru = () => {
  const [namaLengkap, setNamaLengkap] = useState("Syarifuddin");
  const [email, setEmail] = useState("Syarifuddin15@gmail.com");
  const [nomorTelepon, setNomorTelepon] = useState("0813111333444");
  const [alamat, setAlamat] = useState(
    "Graha Satria, Jalan RS. Fatmawati Raya.5 2 9 2, RT.2/RW.9, Cilandak Bar., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 40132"
  );
  const [akunBank, setAkunBank] = useState("xxx-xxxx-xxxx");
  const [password, sestPassword] = useState("XXXXXXXXXX");

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleInputClick = (setValue) => {
    if (setValue === "Syarifuddin") {
      setValue("");
    }
  };

  const [selectedGender, setSelectedGender] = useState("Laki-Laki");

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-[1200px] flex-col mt-5 px-5 max-md:max-w-full max-md:mt-10">
          <div className="grid place-items-center ms-2">
            <img
              className="w-32 h-32 mb-3 rounded-full shadow-lg"
              src="/assets/img/guru-3.jpg"
              alt=""
            />
          </div>
          <div>
            <div className=" flex flex-wrap mb-6">
              <div className="flex flex-cols mb-3">
                <h5>Nama Lengkap</h5>
                <p className="text-red-500">*</p>
              </div>
              <input
                type="search"
                id="nama-lengkap-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                value={namaLengkap}
                onClick={() => handleInputClick(setNamaLengkap)}
                onChange={(e) => handleInputChange(e, setNamaLengkap)}
                required
              />
            </div>
            <div className=" flex flex-wrap mb-6">
              <div className="flex flex-cols mb-3">
                <h5>E-mail</h5>
                <p className="text-red-500">*</p>
              </div>
              <input
                type="search"
                id="email-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                value={email}
                onClick={() => handleInputClick(setEmail)}
                onChange={(e) => handleInputChange(e, setEmail)}
                required
              />
            </div>
            <div className=" flex flex-wrap mb-6">
              <div className="flex flex-cols mb-3">
                <h5>Nomor Telepon</h5>
                <p className="text-red-500">*</p>
              </div>
              <input
                type="search"
                id="nomor-telepon-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                value={nomorTelepon}
                onClick={() => handleInputClick(setNomorTelepon)}
                onChange={(e) => handleInputChange(e, setNomorTelepon)}
                required
              />
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="flex flex-cols mb-3">
                <h5>Jenis Kelamin</h5>
                <p className="text-red-500">*</p>
              </div>
              <select
                id="jenis-kelamin-select"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                value={selectedGender}
                onChange={handleGenderChange}
                required
              >
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className=" flex flex-wrap mb-6">
              <div className="flex flex-cols mb-3">
                <h5>Alamat</h5>
                <p className="text-red-500">*</p>
              </div>
              <input
                type="search"
                id="alamat-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                value={alamat}
                onClick={() => handleInputClick(setAlamat)}
                onChange={(e) => handleInputChange(e, setAlamat)}
                required
              />
            </div>
            <div className=" flex flex-wrap mb-6">
              <div className="flex flex-cols mb-3">
                <h5>Akun Bank</h5>
                <p className="text-red-500">*</p>
              </div>
              <input
                type="search"
                id="akun-bank-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                value={akunBank}
                onClick={() => handleInputClick(setAkunBank)}
                onChange={(e) => handleInputChange(e, setAkunBank)}
                required
              />
            </div>
            <div className=" flex flex-wrap mb-6">
              <div className="flex flex-cols mb-3">
                <h5>Kata Sandi</h5>
                <p className="text-red-500">*</p>
              </div>
              <input
                type="search"
                id="password-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                value={password}
                onClick={() => handleInputClick(sestPassword)}
                onChange={(e) => handleInputChange(e, sestPassword)}
                required
              />
            </div>
            <div className="flex flex-wrap justify-end mb-8 mt-4">
              <div className="bg-secondary p-2 pl-4 pr-4 rounded-full mr-3">
                <a href="">
                  <Link to="">Batal</Link>
                </a>
              </div>
              <div className="bg-primary p-2 pl-4 pr-4 rounded-full">
                <a className="text-background" href="">
                  <Link to="">Simpan</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormGuru;
