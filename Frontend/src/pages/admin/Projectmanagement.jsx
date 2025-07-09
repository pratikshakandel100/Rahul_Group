import React from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSolutions",
    location: "Kathmandu",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeWorks",
    location: "Pokhara",
    type: "Part-Time",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Internship",
  },
];

const JobList = () => {
  const handleDelete = (id) => {
    alert(`Delete job with ID: ${id}`);
  };

  const handleView = (id) => {
    alert(`View job with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-[#d97757] mb-8">Job Listings</h1>
      <div className="space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border border-[#d97757] rounded-xl p-6 flex justify-between items-center hover:shadow-md transition"
          >
            <div>
              <h2 className="text-xl font-semibold text-[#d97757]">
                {job.title}
              </h2>
              <p className="text-gray-700">{job.company} • {job.location}</p>
              <p className="text-sm text-gray-500">{job.type}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleView(job.id)}
                className="px-4 py-2 border border-[#d97757] text-[#d97757] rounded-lg hover:bg-[#d97757] hover:text-white transition"
              >
                View
              </button>
              <button
                onClick={() => handleDelete(job.id)}
                className="px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-orange-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
