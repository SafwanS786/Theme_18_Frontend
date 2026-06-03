import React, { useEffect, useState } from "react";
import "../Practise_component/Learn.css";
export default function Learning() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const user = {
    name: "Ali",
    age: 25,
    city: "Bhavnagar",
  };

  console.log("Name User", user.name);
  console.log("Age User", user.age);
  console.log("City User", user.city);
  const cnt = Object.entries(user);
  console.log("Cnt ", cnt);

  const userdata = cnt.map(([key, value]) => {
    return value;
  });
  console.log("What the userdata", userdata);

  const icons = [
    { id: 1, key: "document", icon: "📘" },
    { id: 2, key: "check", icon: "✔️" },
    { id: 3, key: "users", icon: "👥" },
    { id: 4, key: "plug", icon: "🔌" },
    { id: 5, key: "card", icon: "💳" },
    { id: 6, key: "lock", icon: "🔒" },
    { id: 7, key: "rocket", icon: "🚀" },
    { id: 8, key: "bulb", icon: "💡" },
    { id: 9, key: "settings", icon: "⚙️" },
    { id: 10, key: "chart", icon: "📊" },
    { id: 11, key: "target", icon: "🎯" },
    { id: 12, key: "star", icon: "🌟" },
  ];
  const apidata = [
    {
      id: 3,
      title: "Docs News",
      category: { name: "Star", PageName: "Docs Star Page" },
    },
    {
      id: 5,
      title: "Docs Article",
      category: { name: "Document", PageName: "Docs Document Page" },
    },
  ];

  const getIcon = (categoryName) => {
    const found = icons.find((item) => {
      // console.log("Badhi vastu che", item);
      return item.key === categoryName.toLowerCase();
    });
    console.log("Found", found);
    return found ? found.icon : "😒";
  };
  useEffect(() => {
    const normalized = apidata.map((item, index) => ({
      id: item.id,
      title: item.title,
      category: item.category.name,
      categorypageName: item.category.PageName,
    }));

    console.log("Normalized Data", normalized);
    setCategory(normalized);
  }, []);
  // const filterUser = category.filter((item) => {
  //   return item.title.toLowerCase().includes(search.toLowerCase());
  // });
  const filterUser = category.filter((item) => {
    const searchtext = search.toLowerCase();

    return (
      item.title.toLowerCase().includes(searchtext) ||
      item.categorypageName.toLowerCase().includes(searchtext)
    );
  });
  // item.title.toLowerCase().includes(searchText) ||
  // item.categorypageName.toLowerCase().includes(searchText)
  return (
    <div>
      <h1>Hello</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterUser.map((item, index) => {
        return (
          <div key={index} className="Learning_Main_Class">
            <h1 className="text-xl ">{item.title}</h1>
            <p className="text-sm">{item.categorypageName}</p>
            <span className="text-sm">{getIcon(item.category)}</span>
          </div>
        );
      })}
    </div>
  );
}
