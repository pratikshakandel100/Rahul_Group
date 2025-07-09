import React, { useState, useEffect } from "react";
import {
  FiClock,
  FiDollarSign,
  FiCalendar,
  FiUser,
  FiFileText,
  FiMapPin,
  FiEye,
  FiX,
  FiSend,
  FiHeart,
} from "react-icons/fi";

const DeveloperJobs = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [jobs] = useState([
    {
      id: 1,
      title: "Full Stack E-commerce Platform",
      client: "TechCorp Inc.",
      clientRating: 4.8,
      clientReviews: 45,
      budget: { min: 2000, max: 3500 },
      budgetType: "fixed",
      duration: "2-3 months",
      postedDate: "2024-01-15",
      deadline: "2024-02-01",
      location: "Remote",
      experienceLevel: "Expert",
      description:
        "We need an experienced full-stack developer to build a modern e-commerce platform with advanced features including payment integration, inventory management, and analytics dashboard.",
      requirements: [
        "Minimum 5 years of experience with React and Node.js",
        "Experience with payment gateways (Stripe, PayPal)",
        "Knowledge of database design (MongoDB/PostgreSQL)",
        "Experience with cloud deployment (AWS/Azure)",
      ],
      proposals: 12,
      category: "web-development",
    },
    {
      id: 2,
      title: "Mobile App Backend Development",
      client: "StartupXYZ",
      clientRating: 4.5,
      clientReviews: 23,
      budget: { min: 25, max: 40 },
      budgetType: "hourly",
      duration: "1-2 months",
      postedDate: "2024-01-18",
      deadline: "2024-01-25",
      location: "Remote",
      experienceLevel: "Intermediate",
      description:
        "Looking for a backend developer to create RESTful APIs for our mobile application. The project includes user authentication, real-time messaging, and data synchronization.",
      requirements: [
        "3+ years experience with Node.js/Express",
        "Experience with real-time technologies (Socket.io)",
        "Knowledge of mobile app backend architecture",
        "Experience with API documentation",
      ],
      proposals: 8,
      category: "backend",
    },
    {
      id: 3,
      title: "WordPress Custom Plugin Development",
      client: "Digital Marketing Agency",
      clientRating: 4.9,
      clientReviews: 67,
      budget: { min: 800, max: 1200 },
      budgetType: "fixed",
      duration: "3-4 weeks",
      postedDate: "2024-01-20",
      deadline: "2024-01-28",
      location: "Remote",
      experienceLevel: "Intermediate",
      description:
        "Need a custom WordPress plugin for inventory management with integration to external APIs. The plugin should have an admin interface and reporting features.",
      requirements: [
        "Strong PHP and WordPress development skills",
        "Experience with WordPress plugin architecture",
        "Knowledge of MySQL database design",
        "Experience with REST API integration",
      ],
      proposals: 15,
      category: "wordpress",
    },
    {
      id: 4,
      title: "React Dashboard UI/UX Redesign",
      client: "Enterprise Solutions",
      clientRating: 4.7,
      clientReviews: 34,
      budget: { min: 50, max: 75 },
      budgetType: "hourly",
      duration: "4-6 weeks",
      postedDate: "2024-01-22",
      deadline: "2024-02-05",
      location: "Remote",
      experienceLevel: "Expert",
      description:
        "Modernize our existing React dashboard with new UI/UX design. Focus on data visualization, responsive design, and improved user experience.",
      requirements: [
        "Expert level React and TypeScript skills",
        "Strong UI/UX design sense",
        "Experience with data visualization libraries",
        "Knowledge of modern CSS frameworks",
      ],
      proposals: 6,
      category: "frontend",
    },
    {
      id: 5,
      title: "Python Data Analysis Tool",
      client: "Research Institute",
      clientRating: 4.6,
      clientReviews: 28,
      budget: { min: 1500, max: 2500 },
      budgetType: "fixed",
      duration: "2-3 months",
      postedDate: "2024-01-19",
      deadline: "2024-02-10",
      location: "Remote",
      experienceLevel: "Intermediate",
      description:
        "Develop a Python-based data analysis tool for processing large datasets with visualization capabilities and automated reporting features.",
      requirements: [
        "Strong Python programming skills",
        "Experience with data analysis libraries (Pandas, NumPy)",
        "Knowledge of data visualization (Matplotlib, Plotly)",
        "Experience with automated reporting",
      ],
      proposals: 9,
      category: "data-science",
    },
  ]);

  const filteredJobs = jobs.filter((job) => {
    if (activeFilter === "all") return true;
    return job.category === activeFilter;
  });

  const formatBudget = (budget, type) => {
    if (type === "hourly") {
      return `$${budget.min}-$${budget.max}/hr`;
    }
    return `$${budget.min.toLocaleString()}-$${budget.max.toLocaleString()}`;
  };

  const toggleSaveJob = (jobId) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-[#d97757] cursor-pointer">
            {job.title}
          </h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <FiUser size={14} className="mr-1" />
            <span className="mr-4">{job.client}</span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span>
                {job.clientRating} ({job.clientReviews} reviews)
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => toggleSaveJob(job.id)}
          className={`p-2 rounded-full transition-colors ${
            savedJobs.has(job.id)
              ? "text-red-500 bg-red-50 hover:bg-red-100"
              : "text-gray-400 hover:text-red-500 hover:bg-gray-50"
          }`}
        >
          <FiHeart
            size={18}
            fill={savedJobs.has(job.id) ? "currentColor" : "none"}
          />
        </button>
      </div>

      <p className="text-sm text-gray-700 mb-4 line-clamp-3">
        {job.description}
      </p>

      {/* Job Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <FiDollarSign size={14} className="mr-1" />
          <span>{formatBudget(job.budget, job.budgetType)}</span>
        </div>
        <div className="flex items-center">
          <FiClock size={14} className="mr-1" />
          <span>{job.duration}</span>
        </div>
        <div className="flex items-center">
          <FiMapPin size={14} className="mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <FiCalendar size={14} className="mr-1" />
          <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Proposals count only */}
      <div className="flex items-center justify-end mb-4">
        <span className="text-sm text-gray-600">{job.proposals} proposals</span>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => setSelectedJob(job)}
          className="flex-1 flex items-center justify-center px-4 py-2 border border-[#d97757] text-[#d97757] rounded-lg hover:bg-[#d97757] hover:text-white transition-colors"
        >
          <FiEye size={16} className="mr-2" />
          View Details
        </button>
        <button className="flex-1 flex items-center justify-center px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors">
          <FiSend size={16} className="mr-2" />
          Submit Proposal
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Available Jobs
        </h2>
        <p className="text-gray-600">
          Find and apply to jobs that match your skills
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {[
            { key: "all", label: "All Jobs", count: jobs.length },
            {
              key: "web-development",
              label: "Web Development",
              count: jobs.filter((j) => j.category === "web-development")
                .length,
            },
            {
              key: "backend",
              label: "Backend",
              count: jobs.filter((j) => j.category === "backend").length,
            },
            {
              key: "frontend",
              label: "Frontend",
              count: jobs.filter((j) => j.category === "frontend").length,
            },
            {
              key: "wordpress",
              label: "WordPress",
              count: jobs.filter((j) => j.category === "wordpress").length,
            },
            {
              key: "data-science",
              label: "Data Science",
              count: jobs.filter((j) => j.category === "data-science").length,
            },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.key
                  ? "bg-[#d97757] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No jobs found for the selected category.
          </p>
        </div>
      )}

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedJob.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="mr-4">Client: {selectedJob.client}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>
                        {selectedJob.clientRating} ({selectedJob.clientReviews}{" "}
                        reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Details */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Job Description
                  </h4>
                  <p className="text-gray-700 mb-6">
                    {selectedJob.description}
                  </p>

                  <h4 className="font-semibold text-gray-800 mb-4">
                    Requirements
                  </h4>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">
                        {req}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-gray-800 mb-4">
                    Skills Required
                  </h4>
                </div>

                {/* Job Info Sidebar */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Job Details
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Budget
                      </label>
                      <p className="text-gray-900 font-semibold">
                        {formatBudget(
                          selectedJob.budget,
                          selectedJob.budgetType
                        )}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Duration
                      </label>
                      <p className="text-gray-900">{selectedJob.duration}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <p className="text-gray-900">{selectedJob.location}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Posted
                      </label>
                      <p className="text-gray-900">
                        {new Date(selectedJob.postedDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Proposals
                      </label>
                      <p className="text-gray-900">
                        {selectedJob.proposals} submitted
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button className="w-full px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors">
                      Submit Proposal
                    </button>
                    <button
                      onClick={() => toggleSaveJob(selectedJob.id)}
                      className={`w-full px-4 py-2 border rounded-lg transition-colors ${
                        savedJobs.has(selectedJob.id)
                          ? "border-red-500 text-red-500 bg-red-50"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {savedJobs.has(selectedJob.id) ? "Saved" : "Save Job"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperJobs;
