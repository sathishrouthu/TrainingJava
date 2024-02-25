import React, { useState } from "react";

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    employmentType: "",
    manager: "",
    department: "",
    username: "",
    password: "",
    leaveBalance: {
      casualLeaves: 6,
      privilegeLeaves: 2,
      wellnessLeaves: 5,
      carryForwardedLeaves: 0,
    },
  });

  const managersList = [
    { id: 1, name: "sathish" },
    { id: 2, name: "ram" },
  ];

  function loadLeaveBalance() {
    const currentMonth = 4; //new Date().getMonth();
    let casualLeaves;
    let privilegeLeaves;
    let wellnessLeaves = 5;
    let carryForwardedLeaves = 0;
    if (currentMonth < 6) {
      casualLeaves = 6 - currentMonth;
    } else {
      // After July, casual leaves will be calculated as December - the current month - July
      casualLeaves = 6 - (currentMonth - 6);
    }

    // Privilege leaves will be 1 if it is an even month, otherwise 2
    privilegeLeaves = currentMonth % 2 === 0 ? 1 : 2;

    return {
      casualLeaves,
      privilegeLeaves,
      wellnessLeaves,
      carryForwardedLeaves,
    };
  }
  formData.leaveBalance = loadLeaveBalance();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLeaveBalanceChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      leaveBalance: {
        ...formData.leaveBalance,
        [name]: value,
      },
    });
  };

  return (
    <div className="container" style={backgroundStyle}>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2>Add Employee</h2>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select</option>
                    <option value="EMPLOYEE">Employee</option>
                    <option value="MANAGER">Manager</option>
                    <option value="HR_ADMIN">HR Admin</option>
                  </select>
                  <label htmlFor="designation">Designation</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select</option>
                    <option value="FULLTIME">Full Time</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="INTERN">Intern</option>
                    <option value="TEMPORARY">Temporary</option>
                  </select>
                  <label htmlFor="employmentType">Employment Type</label>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="manager"
                    name="manager"
                    value={formData.manager}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select</option>
                    {managersList.map((manager) => (
                      <option key={manager.id} value={manager.id}>
                        {manager.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="manager">Manager</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <label htmlFor="department">Department</label>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <label htmlFor="username">Username</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-12">
                <h5>Leave Balance for the Employee</h5>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="casualLeaves"
                    name="casualLeaves"
                    value={formData.leaveBalance.casualLeaves}
                    onChange={handleLeaveBalanceChange}
                    style={inputStyle}
                  />
                  <label htmlFor="casualLeaves">Casual Leaves</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="privilegeLeaves"
                    name="privilegeLeaves"
                    value={formData.leaveBalance.privilegeLeaves}
                    onChange={handleLeaveBalanceChange}
                    style={inputStyle}
                  />
                  <label htmlFor="privilegeLeaves">Privilege Leaves</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="wellnessLeaves"
                    name="wellnessLeaves"
                    value={formData.leaveBalance.wellnessLeaves}
                    onChange={handleLeaveBalanceChange}
                    style={inputStyle}
                  />
                  <label htmlFor="wellnessLeaves">Wellness Leaves</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="carryForwardedLeaves"
                    name="carryForwardedLeaves"
                    value={formData.leaveBalance.carryForwardedLeaves}
                    onChange={handleLeaveBalanceChange}
                    style={inputStyle}
                  />
                  <label htmlFor="carryForwardedLeaves">
                    Carry Forwarded Leaves
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const backgroundStyle = {
  background: "linear-gradient(to right, #f0f0f0, #dddddd)", // Light grey gradient
  backdropFilter: "blur(10px)", // Blur effect
  padding: "20px",
  borderRadius: "10px",
};

const inputStyle = {
  height: "calc(2.5rem - 2px)", // Reduced height
  marginBottom: "10px", // Added spacing at the bottom
};

export default AddEmployeeForm;
