
const Table = () => {
  
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
              <tr>
                <td></td>
                <td>Raj</td>
                <td>Raj</td>
                <td>Raj</td>
                <td>Raj</td>
                <td>Raj</td>
                <td>
                  <a
                    href="#"
                    className="edit cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#editEmployeeModal"
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
                  >
                    <i className="material-icons" data-bs-toggle="tooltip">
                      &#xE872;
                    </i>
                  </a>
                  {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
