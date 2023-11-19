import GoogleIcon from "../assets/img/google.png";

function SignUpInfo() {
  const inputDetails = [
    {
      id: 1,
      name: "Email atau Nomor Telepon",
      type: "email",
    },
    {
      id: 2,
      name: "Kata Sandi",
      type: "password",
    },
  ];
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
        {inputDetails.map((input) => (
          <div key={input.id}>
            <input className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full" type={input.type} id={input.type} name={input.type} placeholder={input.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SignUpInfo;
