import GoogleIcon from "../assets/img/google.png";

function SignUpInfo({ formData, setFormData }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 mt-6">
        <button className="bg-secondary flex justify-center items-center text-heading font-medium text-sm rounded-[50px] p-4 w-full">
          <span className="mr-4">
            <img src={GoogleIcon} alt="" className="w-5" />
          </span>{" "}
          <span>Daftar dengan Google</span>
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
        <p className="text-sm text-heading">Atau</p>
      </div>
      <div className="space-y-5 mt-6">
        <input
          className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
        <input
          className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full"
          type="password"
          id="password"
          name="password"
          placeholder="Kata Sandi"
          value={formData.password}
          onChange={(event) => setFormData({ ...formData, password: event.target.value })}
        />
      </div>
    </>
  );
}

export default SignUpInfo;
