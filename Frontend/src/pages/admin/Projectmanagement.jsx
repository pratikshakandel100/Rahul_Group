import React from "react";
import { FaTrashAlt, FaBuilding, FaMapMarkerAlt, FaClock, FaDollarSign } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSolutions",
    location: "Kathmandu",
    type: "Full-Time",
    salary: "$1000/mo",
    postedDate: "2 days ago",
    image: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeWorks",
    location: "Pokhara",
    type: "Part-Time",
    salary: "$800/mo",
    postedDate: "1 week ago",
    image: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Internship",
    salary: "$500/mo",
    postedDate: "3 days ago",
    image: "https://via.placeholder.com/60",
  },
  {
    id: 4,
    title: "React Native Developer",
    company: "AppCrafters",
    location: "Butwal",
    type: "Contract",
    salary: "$1200/mo",
    postedDate: "5 days ago",
    image: "https://via.placeholder.com/60",
  },
  {
    id: 5,
    title: "QA Engineer",
    company: "TestLogic",
    location: "Chitwan",
    type: "Full-Time",
    salary: "$900/mo",
    postedDate: "1 day ago",
    image: "https://via.placeholder.com/60",
  },
];

const JobList = () => {
  const handleDelete = (id) => {
    alert(`Delete job with ID: ${id}`);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Full-Time":
        return "bg-green-100 text-green-800";
      case "Part-Time":
        return "bg-blue-100 text-blue-800";
      case "Internship":
        return "bg-purple-100 text-purple-800";
      case "Contract":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Job Listings</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Job Postings</h3>
              <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                View All
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Details
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Type
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Salary
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Posted
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={job.image}
                          alt={job.title}
                          className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900">{job.title}</div>
                          <div className="text-sm text-gray-500">Job Position</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaBuilding className="w-4 h-4 text-gray-400 mr-2" />
                        <div className="text-sm text-gray-900">{job.company}</div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="w-4 h-4 text-gray-400 mr-2" />
                        <div className="text-sm text-gray-900">{job.location}</div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-6 whitespace-nowrap hidden sm:table-cell">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-6 whitespace-nowrap hidden md:table-cell">
                      <div className="flex items-center">
                        <FaDollarSign className="w-4 h-4 text-gray-400 mr-2" />
                        <div className="text-sm font-medium text-gray-900">{job.salary}</div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-6 whitespace-nowrap hidden lg:table-cell">
                      <div className="flex items-center">
                        <FaClock className="w-4 h-4 text-gray-400 mr-2" />
                        <div className="text-sm text-gray-900">{job.postedDate}</div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-6 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => handleDelete(job.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c86645] transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                      >
                        <FaTrashAlt className="w-4 h-4" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;