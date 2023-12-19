import React, { useState } from "react";
import HeadingText from "../components/HeadingText";
import SignUpInfo from "../components/SignUpInfo";
import PersonalInfo from "../components/PersonalInfo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
    confPassword: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/v1/register", formData);
      console.log("Register successful!", response.data);
      toast.success("Register Berhasil!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);
    } catch (error) {
      console.error("Register failed!", error.response ? error.response.data : error.message);
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

  const navigate = useNavigate();

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-primary">
      <div className="container flex 2xl:px-32 xl:px-24">
        <div className="bg-background rounded-[50px] p-5 w-full 2xl:w-[40%] xl:w-[50%] mx-10 sm:mx-10 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 2xl:mr-10">
          <div className="xl:col-span-3 lg:col-span-2 lg:mx-10 my-auto">
            <div className="flex flex-wrap items-center justify-end gap-6 my-6">
              <p className="text-sm text-heading">
                Sudah Punya Akun?{" "}
                <Link className="ms-2 text-heading font-bold" to="/sign-in">
                  Masuk
                </Link>
              </p>
            </div>
            <div>
              <h1 className="text-5xl/tight mb-3 font-semibold text-heading">Daftar</h1>
            </div>
            <form onSubmit={handleSubmit}>
              {pageDisplay()}
              <div className="space-y-5 my-8">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  {page === 1 ? (
                    <button className="bg-secondary text-heading font-medium text-sm rounded-[50px] p-4 w-full" type="submit">
                      Daftar
                    </button>
                  ) : (
                    <button className="bg-secondary text-heading font-medium text-sm rounded-[50px] p-4 w-full" onClick={() => setPage((currPage) => currPage + 1)}>
                      Lanjutkan
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <HeadingText />
      </div>
    </section>
  );
}

export default SignUp;
