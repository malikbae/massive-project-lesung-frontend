import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Guru = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "Diterima",
      role: "Guru",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      status: "Ditolak",
      role: "Guru",
    },
    {
      id: 3,
      name: "Jen Dol",
      email: "jendol@example.com",
      status: "Menunggu",
      role: "Guru",
    },
    {
      id: 4,
      name: "Lala",
      email: "lala@example.com",
      status: "Ditolak",
      role: "Guru",
    },
    {
      id: 5,
      name: "Puh Sepuh",
      email: "puh@example.com",
      status: "Menunggu",
      role: "Guru",
    },
    {
      id: 6,
      name: "Dipsy",
      email: "dipsy@example.com",
      status: "Diterima",
      role: "Guru",
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit user with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete user with ID ${id}`);
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(`Change status of user with ID ${id} to ${newStatus}`);
  };

  const handleRoleChange = (id, newRole) => {
    console.log(`Change role of user with ID ${id} to ${newRole}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Menunggu":
        return "blue";
      case "Ditolak":
        return "red";
      case "Diterima":
        return "green";
      default:
        return "black";
    }
  };

  return (
    <div>
      <Sidebar />

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div>
            <p className="text-2xl font-medium text-black dark:text-gray-500">Data User</p>
            <p className="text-l font-thin text-gray-600 dark:text-gray-500">18 results found</p>
          </div>
          <div className="flex w-full justify-end">
            <form className="relative flex items-center">
              <label htmlFor="default-search" className="sr-only dark:text-white">
                Search
              </label>
              <div className="relative flex items-center w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>

                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Search Data"
                  required
                />
              </div>
            </form>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>

                  <th scope="col" class="px-6 py-3">
                    <div className="flex justify-left">
                      <select
                        onChange={(e) => handleStatusFilterChange(e.target.value)}
                        style={{
                          border: "none",
                          background: "#F9FAFB",
                          fontSize: "0.75rem",
                        }}
                      >
                        <option value="">STATUS</option>
                        <option value="Diterima">Diterima</option>
                        <option value="Ditolak">Ditolak</option>
                        <option value="Menunggu">Menunggu</option>
                      </select>
                      <div class="flex items-center">
                        <a href="#">
                          <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3">
                    <div className="flex justify-left">
                      <select
                        onChange={(e) => handleRoleFilterChange(e.target.value)}
                        style={{
                          border: "none",
                          background: "#F9FAFB",
                          fontSize: "0.75rem",
                        }}
                      >
                        <option value="">ROLE</option>
                        <option value="Guru">Guru</option>
                      </select>
                      <div class="flex items-center">
                        <a href="#">
                          <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">{user.name}</td>
                    <td class="px-6 py-4">{user.email}</td>
                    <td class="px-6 py-4" style={{ color: getStatusColor(user.status) }}>
                      {user.status}
                    </td>
                    <td class="px-6 py-4">{user.role}</td>
                    <td class="px-6 py-4 text-red-500">
                      <button onClick={() => handleEdit(user.id)}>Tolak</button>
                    </td>
                    <td class="px-6 py-4 text-green-700">
                      <button onClick={() => handleDelete(user.id)}>Terima</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guru;
