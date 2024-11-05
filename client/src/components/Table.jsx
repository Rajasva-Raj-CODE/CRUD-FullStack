import React, { useEffect,useState } from "react";
import axios from "axios";

const Table = ({Updateuser,Deleteuser}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function featchData() {
      try {
        const featchUser = await axios.get("http://localhost:3000/api/get");
        const response = featchUser.data;
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    featchData();
  }, [data]);


  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Employees</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <i className="material-icons">&#xE147;</i>{" "}
                  <span>Add New Employee</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Father</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.user?.map((item, index) => {
                return (
                  <tr key={index} >
                    <td></td>
                    <td>{item.name}</td>
                    <td>{item.fathername}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        href="#"
                        className="edit cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#editEmployeeModal"
                        onClick={()=>Updateuser(item._id)}
                      >
                        <i className="material-icons" data-bs-toggle="tooltip">
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href="#"
                        className="delete cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteEmployeeModal"
                        onClick={()=>Deleteuser(item._id)}
                      >
                        <i className="material-icons" data-bs-toggle="tooltip">
                          &#xE872;
                        </i>
                      </a>
                      {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
