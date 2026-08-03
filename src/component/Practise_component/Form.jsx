import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Edit, Trash } from "lucide-react";

import "./Mncjobs.css";
import ApiClient from "../../config/ApiClient";

export default function TableForm() {
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    city: "",
  })

  const [userdata, setuserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editid, seteditid] = useState(null);
  const [isEditing, setIsEditing] = useState(false)
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(5)



  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await ApiClient.post("/adduser", formdata)
      console.log(res);
      toast.success("Data Added Successfully")
      FetchData();
      setFormdata({
        name: "",
        age: "",
        city: ""
      })

    } catch (err) {
      console.log("Data Not Added", err)
      toast.error("Data Not Added")
    }
  }
  // useEffect(() => {
  // setLoading(true)
  const FetchData = async () => {
    try {
      const res = await ApiClient.get("/adduser")
      const userdatadb = res.data.data
      console.log(userdatadb)
      setuserdata(userdatadb)
    }
    catch (err) {
      console.log("Error", err);
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    FetchData();
  }, [])
  // }, [])
  const UdpateData = async (id) => {
    try {
      const res = await ApiClient.patch(`/adduser/${id}`, formdata)
      toast.success("Data Updated Successfully")
      FetchData();
    } catch (err) {
      console.log("Error", err);
      toast.error("Data Not Updated")
    }
    setFormdata({
      name: "",
      age: "",
      city: ""
    })
    setIsEditing(false)
    seteditid(null)
  }
  const handleEdit = (user) => {

    console.log("USER SU aave che", user)
    setFormdata({
      name: user.name,
      age: user.age,
      city: user.city
    })
    seteditid(user._id)
    setIsEditing(true)
  }
  const handleCancel = () => {
    setIsEditing(false)
    seteditid(null)
    setFormdata({
      name: "",
      age: "",
      city: ""
    })
  }
  const handleDelete = async (id) => {
    try {
      const res = await ApiClient.delete(`/adduser/${id}`)
      console.log(res)
      toast.success("Data Deleted Successfully")
      FetchData();
    } catch (err) {
      console.log("Error", err);
      toast.error("Data Not Deleted")
    }
  }

  const handleSrc = (e) => {
    setSearch(e.target.value)
  }

  const srcData = useMemo(() => {
    const searchText = search.toLowerCase();

    return userdata.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.age.toString().includes(searchText) ||
        item.city.toLowerCase().includes(searchText)
      );
    });
  }, [search, userdata])

  const HandleSort = (e) => {
    setSort(e.target.value)
  }
  const Sorted = useMemo(() => {
    if (sort === "age") {
      return [...srcData].sort((a, b) => Number(a.age) - Number(b.age));
    }
    return srcData;
  }, [srcData, sort]);

  const ItemPerPage = page;
  const TotatPage = Math.ceil(Sorted.length / ItemPerPage);

  console.log("TotalPage", TotatPage);
  console.log("UserData", userdata.length);

  const lastIndex = currentPage * ItemPerPage;
  const firstIndex = lastIndex - ItemPerPage;


  console.log("LastIndex", lastIndex, firstIndex)
  const currentData = Sorted.slice(firstIndex, lastIndex);

  const handlePage = (e) => {
    setPage(Number(e.target.value))
    setCurrentPage(1)
  }
  return (
    <div className="container_form">
      <h2>User Form</h2>
      <div className="search_box">
        <input type="text" placeholder="Search" value={search} onChange={handleSrc} className="srcbtn" />
        <select name="sort" id="" value={sort} onChange={HandleSort}>
          {/* <option value="rating">Rating</option> */}
          <option value="">Sort By</option>
          <option value="age">Age</option>
        </select>
      </div>

      <form className="form_box" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formdata.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formdata.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={formdata.city}
          onChange={handleChange}
        />
        {editid ? (
          <>
            <button type="button" onClick={() => UdpateData(editid)}>Update Data</button>
            <button onClick={() => handleCancel()} className="cancelbtn">
              Cancel
            </button>
          </>
        ) : <button type="submit" className="addbtn">Add Data</button>}
        {/* <button type="submit">Add Data</button> */}
      </form>

      <table>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>name</th>
            <th>age</th>
            <th>city</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ?
            (currentData.map((value) => (
              <tr key={value._id}>
                {/* <td>{value.id}</td> */}
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.city}</td>
                <td className="action_btns">
                  <button onClick={() => handleEdit(value)} className="Editbtn"> <Edit size={16} /></button>
                  <button onClick={() => handleDelete(value._id)} className="deletebtn"> <Trash size={16} /></button>
                </td>
              </tr>
            ))) : (
              <tr>
                <td colSpan={5}>No Data Found</td>
              </tr>
            )
          }
        </tbody>
      </table>


      <div className="pagination">
        <select name="page" id="" onChange={handlePage} value={page}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {/* {[...Array(TotatPage)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))} */}
        <span className="text-gray-700 font-medium">{currentPage}</span>

        <button
          disabled={currentPage === TotatPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div >
  );
}