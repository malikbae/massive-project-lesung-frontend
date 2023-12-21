import React from "react";
import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="bg-slate-600 dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-4xl font-bold text-gray-200 dark:text-white">LesUng</h2>
              <ul class="text-gray-200 font-small text-sm">
                <li class="mb-4 mr-4">
                  <a href="#" class="">
                    Dapatkan pengalaman bimbingan belajar atau les privat dengan guru les berkualitas yang sesuai dengan kebutuhan preferensi anda. Kami menyediakan platform yang memudahkan Anda menemukan apa yang anda butuhkan.
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-4xl font-bold text-gray-200 dark:text-white">Tautan</h2>
              <ul class="text-gray-200 font-small text-sm">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Beranda
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Pilih Jenjang
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Pilih Program
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-4xl font-bold text-gray-200 dark:text-white">Kontak</h2>
              <ul class="text-gray-200 font-small text-sm">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    (021) 222-333-444
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    bimbingan@yahoo.com
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Jl. Merdeka No 43. Jakarta Utara
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-4xl font-bold text-gray-200 dark:text-white">Ikuti Kami</h2>
              <ul class="text-gray-200 font-small text-sm">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Facebook
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Instagram
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Twitter
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-4 py-6 bg-slate-600 dark:bg-gray-700 md:flex md:items-center md:justify-center">
            <span class="text-sm text-gray-200 dark:text-gray-300 sm:text-center text-center">
              © 2023 <a href="#">LesUng™</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
