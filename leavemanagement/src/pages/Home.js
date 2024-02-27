import LeaveBalance from "../components/LeaveBalance";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import { loadEmployeeData } from "../services/EmployeeService";
import Loading from "../components/Loading";
import ApplyLeave from "./ApplyLeave";

export default function Home() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLeaveApplication, setShowLeaveApplication] = useState(false);
  useEffect(
    function () {
      const employeeId = localStorage.getItem("employeeId");
      if (!employeeId) {
        navigate("/login");
        return;
      }
      const employeeData = JSON.parse(localStorage.getItem("employeeData"));
      if (!employeeData) {
        setIsLoading(true);
        loadEmployeeData(employeeId)
          .then((response) => {
            localStorage.setItem("employeeData", JSON.stringify(response.data));
            const EmployeeDetails = JSON.parse(
              localStorage.getItem("employeeData")
            );
            setEmployee(EmployeeDetails);
            setIsLoading(false);
          })
          .catch((e) => {
            console.error(e);
            setIsLoading(false);
          });
      } else {
        setEmployee(JSON.parse(localStorage.getItem("employeeData")));
        setIsLoading(false);
      }
    },
    [navigate]
  );

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-sm-7">
          <Profile employee={employee} />
        </div>

        <div className="col-sm-5">
          <LeaveBalance
            leavePolicyData={employee.leavePolicy}
            reload={showLeaveApplication}
          />
        </div>
      </div>
      <div className="row my-4">
        <button
          className="btn btn btn-dark m-3 col-sm-3"
          onClick={() => setShowLeaveApplication(!showLeaveApplication)}
        >
          {showLeaveApplication ? "Close" : "Apply for Leave"}
        </button>
        {employee.designation === "HR_ADMIN" && (
          <Link to="/add-employee" className="btn btn btn-dark m-3 col-sm-3">
            Add Employee
          </Link>
        )}
        {(employee.designation === "MANAGER" ||
          employee.designation === "HR_ADMIN") && (
          <Link to="/leave-requests" className="]btn btn btn-dark m-3 col-sm-3">
            Check Leave Requests
          </Link>
        )}
      </div>
      <div className="row my-4">
        {showLeaveApplication && <ApplyLeave employee={employee} />}
      </div>
    </div>
  );
}
