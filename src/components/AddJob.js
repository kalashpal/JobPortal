import React, { useState } from "react";
import { useJobContext } from "./JobContext";

const AddJob = () => {
    const { addJob } = useJobContext();
  // Define state for the job form
  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    employmentType: "",
    salary: "",
    dateLine: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(jobData);

    // Perform any necessary actions with the job data (e.g., send to the server)
    console.log("Job data submitted:", jobData);

    // You can add further logic here, such as sending the data to a server

    // Show an alert indicating that the job has been added
    alert("Job added successfully!");

    // Optionally, clear the form after submission
    setJobData({
      title: "",
      location: "",
      employmentType: "",
      salary: "",
      dateLine: "",
    });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Add Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={jobData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={jobData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="employmentType" className="form-label">
            Employment Type
          </label>
          <input
            type="text"
            className="form-control"
            id="employmentType"
            name="employmentType"
            value={jobData.employmentType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="salary"
            name="salary"
            value={jobData.salary}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateLine" className="form-label">
            Date Line
          </label>
          <input
            type="text"
            className="form-control"
            id="dateLine"
            name="dateLine"
            value={jobData.dateLine}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
