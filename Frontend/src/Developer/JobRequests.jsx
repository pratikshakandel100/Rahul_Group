import React, { useState } from "react";
import {
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiEye,
  FiCheck,
  FiX,
} from "react-icons/fi";

const DeveloperJobRequests = () => {
  const [jobRequests, setJobRequests] = useState([
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "TechCorp Inc.",
      budget: "$2,500 - $5,000",
      duration: "2-3 months",
      location: "Remote",
      description:
        "Looking for a skilled developer to build a modern e-commerce platform with React and Node.js.",
      postedDate: "2 days ago",
      status: "pending",
    },
    {
      id: 2,
      title: "Mobile App Backend API",
      client: "StartupXYZ",
      budget: "$1,500 - $3,000",
      duration: "1-2 months",
      location: "Remote",
      description:
        "Need a robust backend API for our mobile application with authentication and real-time features.",
      postedDate: "1 day ago",
      status: "pending",
    },
    {
      id: 3,
      title: "WordPress Plugin Development",
      client: "Digital Agency",
      budget: "$800 - $1,200",
      duration: "2-4 weeks",
      location: "Remote",
      description:
        "Custom WordPress plugin for inventory management with admin dashboard.",
      postedDate: "3 hours ago",
      status: "pending",
    },
  ]);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobAction = (jobId, action) => {
    setJobRequests((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? { ...job, status: action === "accept" ? "accepted" : "declined" }
          : job
      )
    );
    setSelectedJob(null);
  };

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {job.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">by {job.client}</p>
          <p className="text-sm text-gray-700 line-clamp-2">
            {job.description}
          </p>
        </div>
        <span
          className={`mt-2 sm:mt-0 sm:ml-4 px-3 py-1 rounded-full text-xs font-medium inline-block ${
            job.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : job.status === "accepted"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
        </span>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <FiDollarSign size={16} className="mr-1" />
          <span>{job.budget}</span>
        </div>
        <div className="flex items-center">
          <FiClock size={16} className="mr-1" />
          <span>{job.duration}</span>
        </div>
        <div className="flex items-center">
          <FiMapPin size={16} className="mr-1" />
          <span>{job.location}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <span className="text-xs text-gray-500">Posted {job.postedDate}</span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedJob(job)}
            className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <FiEye size={14} className="mr-1" />
            View Details
          </button>
          {job.status === "pending" && (
            <>
              <button
                onClick={() => handleJobAction(job.id, "accept")}
                className="flex items-center px-3 py-1 text-sm bg-[#d97757] text-white rounded-md hover:bg-[#c56647] transition-colors"
              >
                <FiCheck size={14} className="mr-1" />
                Accept
              </button>
              <button
                onClick={() => handleJobAction(job.id, "decline")}
                className="flex items-center px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                <FiX size={14} className="mr-1" />
                Decline
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Requests</h2>
        <p className="text-gray-600">Review and respond to job opportunities</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent">
          <option>All Status</option>
          <option>Pending</option>
          <option>Accepted</option>
          <option>Declined</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent">
          <option>All Budgets</option>
          <option>Under $1,000</option>
          <option>$1,000 - $5,000</option>
          <option>Above $5,000</option>
        </select>
      </div>

      {/* Job Requests Grid */}
      <div className="grid gap-6">
        {jobRequests.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedJob.title}
                </h3>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Client</h4>
                  <p className="text-gray-600">{selectedJob.client}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-600">{selectedJob.description}</p>
                </div>

                <div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Budget</h4>
                    <p className="text-gray-600">{selectedJob.budget}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Duration
                    </h4>
                    <p className="text-gray-600">{selectedJob.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600">{selectedJob.location}</p>
                  </div>
                </div>
              </div>

              {selectedJob.status === "pending" && (
                <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 mt-6 pt-4 border-t">
                  <button
                    onClick={() => handleJobAction(selectedJob.id, "decline")}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    onClick={() => handleJobAction(selectedJob.id, "accept")}
                    className="px-6 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors"
                  >
                    Accept Job
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperJobRequests;
