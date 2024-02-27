// ApplyLeave.js

import React, { useState } from "react";
import { addLeaveRequest } from "../services/LeaveService";

export default function ApplyLeave({ employee, onClose }) {
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
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Leave Application Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Form Inputs */}
          <button type="submit" className="btn btn-primary">Submit</button>
          <div className="alert alert-info">{message}</div>
        </form>
      </div>
    </div>
  );
      }
