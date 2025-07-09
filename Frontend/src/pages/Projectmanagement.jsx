import React, { useState } from 'react';
import { 
  FolderOpen, 
  Plus, 
  Search, 
  Filter, 
  Calendar,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  FileText,
  MessageSquare,
  Star,
  TrendingUp
} from 'lucide-react';

const ProjectManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      client: 'TechCorp Inc.',
      developer: 'John Doe',
      status: 'In Progress',
      priority: 'High',
      progress: 75,
      startDate: '2024-01-15',
      deadline: '2024-02-15',
      budget: '$12,500',
      spent: '$9,375',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      teamSize: 4,
      messages: 23,
      files: 15
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'iOS and Android app for fitness tracking',
      client: 'StartupXYZ',
      developer: 'Sarah Smith',
      status: 'Completed',
      priority: 'Medium',
      progress: 100,
      startDate: '2023-12-01',
      deadline: '2024-01-30',
      budget: '$8,750',
      spent: '$8,200',
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Redux'],
      teamSize: 3,
      messages: 45,
      files: 28
    },
    {
      id: 3,
      title: 'Website Redesign',
      description: 'Complete redesign of corporate website',
      client: 'Creative Agency',
      developer: 'Mike Johnson',
      status: 'Pending',
      priority: 'Low',
      progress: 25,
      startDate: '2024-02-01',
      deadline: '2024-03-01',
      budget: '$5,200',
      spent: '$1,300',
      category: 'Design',
      technologies: ['Figma', 'HTML', 'CSS', 'JavaScript'],
      teamSize: 2,
      messages: 12,
      files: 8
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'Business intelligence dashboard with real-time data',
      client: 'DataCorp',
      developer: 'Emily Davis',
      status: 'In Progress',
      priority: 'High',
      progress: 60,
      startDate: '2024-01-10',
      deadline: '2024-02-20',
      budget: '$15,000',
      spent: '$9,000',
      category: 'Data Science',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
      teamSize: 5,
      messages: 67,
      files: 32
    },
    {
      id: 5,
      title: 'API Development',
      description: 'RESTful API for third-party integrations',
      client: 'TechStartup',
      developer: 'Robert Wilson',
      status: 'Review',
      priority: 'Medium',
      progress: 90,
      startDate: '2024-01-05',
      deadline: '2024-02-05',
      budget: '$6,800',
      spent: '$6,120',
      category: 'Backend Development',
      technologies: ['Node.js', 'Express', 'MySQL', 'JWT'],
      teamSize: 2,
      messages: 18,
      files: 12
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.developer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         project.status.toLowerCase() === selectedFilter.toLowerCase() ||
                         project.priority.toLowerCase() === selectedFilter.toLowerCase() ||
                         project.category.toLowerCase() === selectedFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'Completed').length,
    inProgress: projects.filter(p => p.status === 'In Progress').length,
    pending: projects.filter(p => p.status === 'Pending').length,
    totalBudget: projects.reduce((sum, p) => sum + parseInt(p.budget.replace('$', '').replace(',', '')), 0),
    totalSpent: projects.reduce((sum, p) => sum + parseInt(p.spent.replace('$', '').replace(',', '')), 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Project Management</h2>
          <p className="text-gray-600 mt-1">Manage all projects and track progress</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-[#d97757] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#c86a4a] transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900">{projectStats.total}</p>
            </div>
            <FolderOpen className="w-8 h-8 text-[#d97757]" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{projectStats.inProgress}</p>
            </div>
            <Clock className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{projectStats.completed}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Budget</p>
              <p className="text-2xl font-bold text-gray-900">${projectStats.totalBudget.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All Projects</option>
            <option value="completed">Completed</option>
            <option value="in progress">In Progress</option>
            <option value="pending">Pending</option>
            <option value="review">Review</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-500" />
            <span>Advanced Filters</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#d97757] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{project.teamSize} members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{project.deadline}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{project.spent} / {project.budget}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{project.messages}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{project.files}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <div className="text-sm">
                  <p className="text-gray-600">Client: <span className="font-medium text-gray-900">{project.client}</span></p>
                  <p className="text-gray-600">Developer: <span className="font-medium text-gray-900">{project.developer}</span></p>
                </div>
                <button 
                  onClick={() => handleViewProject(project)}
                  className="text-[#d97757] hover:text-[#c86a4a] text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Project Details</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{selectedProject.title}</h4>
                  <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Client</p>
                        <p className="font-medium text-gray-900">{selectedProject.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Developer</p>
                        <p className="font-medium text-gray-900">{selectedProject.developer}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedProject.status)}`}>
                          {selectedProject.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Priority</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(selectedProject.priority)}`}>
                          {selectedProject.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Start Date</p>
                        <p className="font-medium text-gray-900">{selectedProject.startDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Deadline</p>
                        <p className="font-medium text-gray-900">{selectedProject.deadline}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">{selectedProject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#d97757] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${selectedProject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedProject.budget}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Spent</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedProject.spent}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Users className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Team</p>
                      <p className="font-semibold text-gray-900">{selectedProject.teamSize}</p>
                    </div>
                    <div className="text-center">
                      <MessageSquare className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Messages</p>
                      <p className="font-semibold text-gray-900">{selectedProject.messages}</p>
                    </div>
                    <div className="text-center">
                      <FileText className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Files</p>
                      <p className="font-semibold text-gray-900">{selectedProject.files}</p>
                    </div>
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

export default ProjectManagement;