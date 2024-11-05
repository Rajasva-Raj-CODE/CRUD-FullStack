import React from "react";

const UpdateUser = () => {
  return (
    <>
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Update User</h4>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Father</label>
                  <input
                    type="text"
                    name="fathername"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" name="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Phone</label>

                  <input type="text" name="phone" className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-bs-dismiss="modal"
                  value="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update"
                  data-bs-dismiss="modal"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
