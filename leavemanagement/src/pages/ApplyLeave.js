import React, { useState } from "react";
import { addLeaveRequest } from "../services/LeaveService";

export default function ApplyLeave({ employee }) {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minEndDate, setMinEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [remarks, setRemarks] = useState("");
  const [message, setMessage] = useState("");
  const calculateNumberOfDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };
  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
    setMinEndDate(selectedStartDate);
    setEndDate(selectedStartDate);
    if (endDate < selectedStartDate) setEndDate(selectedStartDate);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const numberOfLeaves = calculateNumberOfDays(startDate, endDate);
    const leaveSubmissionDate = new Date().toISOString().split("T")[0];
    const status = "PENDING";
    const managerId = employee.managerId;
    const leaveRequest = {
      managerId,
      leaveType,
      startDate,
      endDate,
      numberOfLeaves,
      remarks,
      reason,
      leaveSubmissionDate,
      status,
    };
    addLeaveRequest(employee.id, leaveRequest)
      .then((response) => {
        if (response.status === 201)
          setMessage("Leave Request sent to your manager");
        else {
          setMessage("Could not send Leave Request.!");
        }
      })
      .catch((e) => {
        setMessage("Could not send Leave Request.!");
      });
  };
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-4">
        <h2>Leave Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="leaveType" className="form-label">
              Leave Type
            </label>
            <select
              className="form-select"
              id="leaveType"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              required
            >
              <option value="">Select Leave Type</option>
              <option value="CASUAL_LEAVE">Casual</option>
              <option value="PRIVILAGE_LEAVE">Privilege</option>
              <option value="WELLNESS_LEAVE">Wellness</option>
              <option value="CARRY_FORWARD_LEAVE">Carry Forwarded Leave</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">
              Leave Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              Leave End Date
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={minEndDate}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reason" className="form-label">
              Reason
            </label>
            <textarea
              className="form-control"
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="remarks" className="form-label">
              Remarks
            </label>
            <textarea
              className="form-control"
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <div className={`alert alert-info`}>{message}</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
