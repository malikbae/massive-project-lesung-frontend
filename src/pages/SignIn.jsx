import React, { useState } from "react";
import GoogleIcon from "../assets/img/google.png";
import HeadingText from "../components/HeadingText";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", formData);
      console.log("Login successful!", response.data);
      toast.success("Login Berhasil!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/home");
    } catch (error) {
      console.error("Login failed!", error.response ? error.response.data : error.message);
      toast.error(error.response ? error.response.data : error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-primary">
      <div className="container flex 2xl:px-32 xl:px-24">
        <div className="bg-background rounded-[50px] p-5 w-full 2xl:w-[40%] xl:w-[50%] mx-10 sm:mx-10 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 2xl:mr-10">
          <div className="xl:col-span-3 lg:col-span-2 lg:mx-10 my-auto">
            <div className="flex flex-wrap items-center justify-end gap-6 my-6">
              <p className="text-sm text-heading">
                Belum Punya Akun?{" "}
                <Link className="ms-2 text-heading font-bold" to="/sign-up">
                  Daftar
                </Link>
              </p>
            </div>
            <div>
              <h1 className="text-5xl/tight mb-3 font-semibold text-heading">Masuk</h1>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-6 mt-6">
              <button className="bg-secondary flex justify-center items-center text-heading font-medium text-sm rounded-[50px] p-4 w-full">
                <span className="mr-4">
                  <img src={GoogleIcon} alt="" className="w-5" />
                </span>{" "}
                <span>Masuk dengan Google</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <p className="text-sm text-heading">Atau</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-5 mt-6">
                <input
                  className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full"
                  type="text"
                  id="emailOrPhoneNumber"
                  name="emailOrPhoneNumber"
                  placeholder="Email atau Nomor Telepon"
                  value={formData.emailOrPhoneNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Kata Sandi"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-5 my-6">
                <button className="bg-secondary border border-transparent text-heading font-medium text-sm rounded-[50px] p-4 w-full" type="submit">
                  Masuk
                </button>
                <ToastContainer />
                <Link className="flex flex-wrap items-center justify-between gap-6" to="/forgot-password">
                  <button className={`bg-transparent border border-primary text-heading font-medium text-sm rounded-[50px] p-4 w-full`}>Lupa Kata Sandi?</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <HeadingText />
      </div>
    </section>
  );
}

export default SignIn;
