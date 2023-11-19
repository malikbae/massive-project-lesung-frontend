import React from "react";

function PersonalInfo() {
  const inputDetails = [
    {
      id: 1,
      name: "Nama Lengkap",
      type: "text",
      desc: "nama",
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      desc: "email",
    },
    {
      id: 3,
      name: "Nomor Telepon",
      type: "text",
      desc: "noTelp",
    },
    {
      id: 4,
      name: "Kata Sandi",
      type: "password",
      desc: "password",
    },
  ];
  return (
    <>
      <div className="space-y-5 mt-6">
        {inputDetails.map((input) => (
          <div key={input.id}>
            <input className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full" type={input.type} id={input.desc} name={input.desc} placeholder={input.name} />
          </div>
        ))}
        <select className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full" id="role">
          <option hidden disabled selected value="">
            Pilih Sebagai
          </option>
          <option value="orangtua/siswa">Orang Tua/Siswa</option>
          <option value="gurules">Guru Les</option>
        </select>
      </div>
    </>
  );
}

export default PersonalInfo;
