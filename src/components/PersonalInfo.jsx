import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <>
      <div className="space-y-5 mt-6">
        <input
          className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full"
          type="text"
          id="nama"
          name="nama"
          placeholder="Nama Lengkap"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
        />
        <input
          className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full"
          type="text"
          id="noTelp"
          name="noTelp"
          placeholder="Nomor Telepon"
          value={formData.phoneNumber}
          onChange={(event) => setFormData({ ...formData, phoneNumber: event.target.value })}
        />
        <input
          className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full"
          type="password"
          id="password"
          name="password"
          placeholder="Konfirmasi Kata Sandi"
          value={formData.confPassword}
          onChange={(event) => setFormData({ ...formData, confPassword: event.target.value })}
        />
        <select
          className="text-gray-500 border-primary focus:ring-0 focus:border-gray-400 text-sm rounded-[18px] p-4 w-full"
          id="role"
          name="role"
          value={formData.role}
          onChange={(event) => setFormData({ ...formData, role: event.target.value })}
        >
          <option hidden disabled selected value="">
            Pilih Sebagai
          </option>
          <option value="siswa">Orang Tua/Siswa</option>
          <option value="guru">Guru Les</option>
        </select>
      </div>
    </>
  );
}

export default PersonalInfo;
