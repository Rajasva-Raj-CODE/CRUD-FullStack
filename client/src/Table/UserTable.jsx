import { React, useState } from "react";
import Table from "../components/Table";
import AddUser from "../components/AddUser";
import UpdateUser from "../components/UpdateUser";
import DeleteUser from "../components/DeleteUser";
import axios from "axios";
import toast from "react-hot-toast";

const UserTable = () => {
  const [value, setValue] = useState({
    name: "",
    fathername: "",
    email: "",
    phone: "",
  });

  const [updateid, setUpdateid] = useState();
  const [deleteid, setDeleteid] = useState();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const Updateuser = (id) => {
    setUpdateid(id);
  };

  const Deleteuser = (id) => {
    setDeleteid(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateuser = await axios.put(
        `http://localhost:3000/api/update/${updateid}`,
        value
      );
      const response = updateuser.data;
      if (response.success) {
        toast.success(response.Message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const deleteuser = await axios.delete(
        `http://localhost:3000/api/delete/${deleteid}`,value
      );
      const response = deleteuser.data;
      if (response.success) {
        toast.success(response.Message);
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <Table Updateuser={Updateuser} Deleteuser={Deleteuser}></Table>
      <AddUser></AddUser>
      <UpdateUser
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></UpdateUser>
      <DeleteUser handleDelete={handleDelete}></DeleteUser>
    </>
  );
};

export default UserTable;
