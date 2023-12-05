import React, { useState } from "react";
import { Link } from "react-router-dom";

const SetMengajar = () => {
  const [selectedMaPel, setMaPel] = useState("");
  const [selectedJenjangPendidikan, setJenjangPendidikan] = useState("");

  const handleMaPelChange = (e) => {
    setMaPel(e.target.value);
  };

  const handleJenjangPendidikanChange = (e) => {
    setJenjangPendidikan(e.target.value);
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="flex bg-primary p-5 rounded-md w-full max-w-[1200px] flex-col mt-5 mb-5 px-5 max-md:max-w-full max-md:mt-10">
          <h1 className="text-4xl font-bold leading-none text-white dark:text-white mb-8">
            Pengaturan Mengajar
          </h1>
          <div className="flex flex-wrap mb-6 text-white">
            <div className="flex flex-cols mb-3">
              <h5>Pilih Mata Pelajaran</h5>
              <p className="text-red-500">*</p>
            </div>
            <select
              id="ma-pel-select"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              value={selectedMaPel}
              onChange={handleMaPelChange}
              required
            >
              <option value="" defaultValue disabled>
                Pilih Mata Pelajaran
              </option>
              <option value="Mata Pelajaran 1">Matematika</option>
              <option value="Mata Pelajaran 2">Bahasa Indonesia</option>
              <option value="Mata Pelajaran 3">Bahasa Inggris</option>
              <option value="Mata Pelajaran 4">
                Bahasa Ilmu Pengetahuan Alam
              </option>
              <option value="Mata Pelajaran 5">
                Pendidikan Kewarganegaraan
              </option>
            </select>
          </div>
          <div className="grid grid-cols-2 text-white">
            <div className=" flex flex-col mb-6">
              <div className="flex flex-wrap mb-3">
                <h5>Jumlah Sesi</h5>
                <p className="text-red-500">*</p>
              </div>
              <div className="flex flex-row items-center">
                <input
                  type="search"
                  id="jumlah-sesi-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  required
                />
                <p>/bulan</p>
              </div>
            </div>
            <div className=" flex flex-col mb-6 ml-8">
              <div className="flex flex-wrap mb-3">
                <h5>Harga</h5>
                <p className="text-red-500">*</p>
              </div>
              <div className="flex flex-row items-center">
                <input
                  type="search"
                  id="jumlah-sesi-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  required
                />
                <p>/bulan</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 text-white">
            <div className="flex flex-cols mb-3">
              <h5>Jenjang Pendidikan</h5>
              <p className="text-red-500">*</p>
            </div>
            <select
              id="jenjang-pendidikan-select"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              value={selectedJenjangPendidikan}
              onChange={handleJenjangPendidikanChange}
              required
            >
              <option value="" defaultValue disabled>
                Jenjang Pendidikan
              </option>
              <option value="Mata Pelajaran 1">Sekolah Dasar</option>
            </select>
          </div>
          <div className="flex flex-wrap mb-6 text-white">
            <div className="flex flex-cols mb-3">
              <h5>Sistem Bimbingan</h5>
              <p className="text-red-500">*</p>
            </div>

            <input
              type="search"
              id="sistem-bimbingan-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              required
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-background text-heading w-1/6 items-center rounded-full p-2 hover:bg-gray-200 mb-8">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetMengajar;
