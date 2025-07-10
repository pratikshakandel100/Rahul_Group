import React, { useState } from 'react';
import { Star, MapPin, Clock, DollarSign, Heart, MessageCircle } from 'lucide-react';

const HireDeveloper = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [priceRange, setPriceRange] = useState('all');

  const developers = [
    {
      id: 1,
      name: 'Alice Johnson',
      title: 'Full Stack Developer',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 45,
      location: 'New York, USA',
      avatar: '/api/placeholder/60/60',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      experience: '5+ years',
      availability: 'Available',
      completedProjects: 89,
      description: 'Experienced full-stack developer specializing in modern web applications...'
    },
    {
      id: 2,
      name: 'Bob Wilson',
      title: 'Mobile App Developer',
      rating: 4.8,
      reviews: 94,
      hourlyRate: 55,
      location: 'London, UK',
      avatar: '/api/placeholder/60/60',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      experience: '4+ years',
      availability: 'Busy',
      completedProjects: 67,
      description: 'Mobile app developer with expertise in cross-platform development...'
    },
    {
      id: 3,
      name: 'Carol Davis',
      title: 'UI/UX Designer',
      rating: 4.7,
      reviews: 156,
      hourlyRate: 40,
      location: 'Toronto, Canada',
      avatar: '/api/placeholder/60/60',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      experience: '6+ years',
      availability: 'Available',
      completedProjects: 134,
      description: 'Creative UI/UX designer focused on user-centered design principles...'
    }
  ];

  const skills = ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'];

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const filteredDevelopers = developers.filter(dev => {
    const matchesSearch = dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dev.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => dev.skills.includes(skill));
    
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'low' && dev.hourlyRate < 40) ||
                        (priceRange === 'medium' && dev.hourlyRate >= 40 && dev.hourlyRate < 60) ||
                        (priceRange === 'high' && dev.hourlyRate >= 60);
    
    return matchesSearch && matchesSkills && matchesPrice;
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Hire Developers</h2>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search developers, skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $40/hr</option>
                <option value="medium">$40-60/hr</option>
                <option value="high">$60+/hr</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 5).map(skill => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedSkills.includes(skill)
                        ? 'bg-[#d97757] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDevelopers.map((developer) => (
          <div key={developer.id} className="bg-white rounded-lg shadow border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-bold">
                  {developer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">{developer.name}</h3>
                  <p className="text-sm text-gray-600">{developer.title}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center mb-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{developer.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({developer.reviews} reviews)</span>
              </div>
              <div className="ml-auto flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {developer.location}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 text-green-500 mr-1" />
                <span>${developer.hourlyRate}/hr</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-500 mr-1" />
                <span className={`${developer.availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
                  {developer.availability}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{developer.description}</p>

            <div className="flex flex-wrap gap-1 mb-4">
              {developer.skills.slice(0, 4).map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  {skill}
                </span>
              ))}
              {developer.skills.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  +{developer.skills.length - 4} more
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-[#d97757] text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                Hire Now
              </button>
              <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageCircle className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDevelopers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No developers found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default HireDeveloper;
