import React from 'react';
import { useJobContext } from './JobContext';

const JobList = () => {
    const { jobs, deleteJob } = useJobContext();

    const handleDelete = (jobId) => {
      // Call the deleteJob function from the context with the jobId
      deleteJob(jobId);
    };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          Job Listing
        </h1>
        <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
          {/* Your tab navigation */}
          {/* ... */}

          <div className="tab-content">
            {/* Featured Jobs */}
            <div id="tab-1" className="tab-pane fade show p-0 active">
              {jobs.map((job, index) => (
                <JobItem key={index} job={job} />
              ))}
            </div>

            {/* Full Time Jobs */}
            <div id="tab-2" className="tab-pane fade show p-0">
              {/* Adjust the content based on your logic or tabs */}
            </div>

            {/* Part Time Jobs */}
            <div id="tab-3" className="tab-pane fade show p-0">
              {/* Adjust the content based on your logic or tabs */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobItem = ({ job }) => {
    const { deleteJob } = useJobContext();
  
    const handleDelete = () => {
      deleteJob(job.id);
    };
  
  // You can use the 'job' object to display job details dynamically
  return (
    <div className="job-item p-4 mb-4">
      <div className="row g-4">
        {/* Render job details here */}
        <div className="col-sm-12 col-md-8 d-flex align-items-center">
          <img className="flex-shrink-0 img-fluid border rounded" src={job.companyLogo} alt="" style={{ width: '80px', height: '80px' }} />
          <div className="text-start ps-4">
            <h5 className="mb-3">{job.title}</h5>
            <span className="text-truncate me-3">
              <i className="fa fa-map-marker-alt text-primary me-2"></i>
              {job.location}
            </span>
            <span className="text-truncate me-3">
              <i className="far fa-clock text-primary me-2"></i>
              {job.employmentType}
            </span>
            <span className="text-truncate me-0">
              <i className="far fa-money-bill-alt text-primary me-2"></i>
              {job.salary}
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
          <div className="d-flex mb-3">
            <a className="btn btn-light btn-square me-3" href="">
              <i className="far fa-heart text-primary"></i>
            </a>
            <button className="btn btn-light btn-square me-3" onClick={handleDelete}>
            <i className="far fa-trash-alt text-danger"></i>
          </button>
            <a className="btn btn-primary" href="">
              Apply Now
            </a>
          </div>
          <small className="text-truncate">
            <i className="far fa-calendar-alt text-primary me-2"></i>
            Date Line: {job.dateLine}
          </small>
          
        </div>
      </div>
    </div>
  );
};

export default JobList;
