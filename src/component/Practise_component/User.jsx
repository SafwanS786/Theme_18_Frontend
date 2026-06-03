import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

export default function User() {
  const [userdata, setuserData] = useState([]);
  const [search, setSearch] = useState("");
  const apidata = [
    {
      id: 1,
      name: "Ali Shaikh",
      age: 24,
      role: "admin",
      isActive: true,
      address: { city: "Bhavnagar", state: "Gujarat" },
    },
    {
      id: 2,
      name: "Sara Khan",
      age: 22,
      role: "editor",
      isActive: true,
      address: { city: "Surat", state: "Gujarat" },
    },
    {
      id: 3,
      name: "Raj Patel",
      age: 30,
      role: "viewer",
      isActive: false,
      address: { city: "Ahmedabad", state: "Gujarat" },
    },
    {
      id: 4,
      name: "Priya Mehta",
      age: 27,
      role: "admin",
      isActive: true,
      address: { city: "Mumbai", state: "Maharashtra" },
    },
    {
      id: 5,
      name: "Zaid Mirza",
      age: 19,
      role: "editor",
      isActive: false,
      address: { city: "Vadodara", state: "Gujarat" },
    },
  ];

  useEffect(() => {
    const user = apidata.map((item, index) => ({
      id: item.id,
      name: item.name,
      age: item.age,
      role: item.role,
      isActive: item.isActive,
      city: item.address.city,
      state: item.address.state,
    }));

    setuserData(user);
  }, []);
  const FilterUser = userdata.filter((item) => {
    const searchTerm = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(searchTerm) ||
      item.role.toLowerCase().includes(searchTerm) ||
      item.city.toLowerCase().includes(searchTerm) ||
      item.state.toLowerCase().includes(searchTerm)
    );
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="">UserData</h1>
      <div>
        {FilterUser.map((item, index) => {
          return (
            <div key={index} className="">
              <h1>{item.name}</h1>
              <span>{item.age}</span>
              <span>{item.role}</span>
              <span>{item.isActive}</span>
              <span>{item.city}</span>
              <span>{item.state}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
