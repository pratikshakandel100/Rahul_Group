import React, { useState } from "react";
import {
  FiEdit2,
  FiSave,
  FiX,
  FiPlus,
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const DeveloperProfile = ({ developer: initialDeveloper }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [developer, setDeveloper] = useState(initialDeveloper);
  const [formData, setFormData] = useState(initialDeveloper);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSkillAdd = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSave = () => {
    setDeveloper(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(developer);
    setIsEditing(false);
  };

  const SkillsSection = () => {
    const [newSkill, setNewSkill] = useState("");

    return (
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {formData.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center bg-[#d97757] bg-opacity-10 text-[#d97757] px-3 py-1 rounded-full"
            >
              <span className="text-sm font-medium">{skill}</span>
              {isEditing && (
                <button
                  onClick={() => handleSkillRemove(skill)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <FiX size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
        {isEditing && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add new skill"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSkillAdd(newSkill);
                  setNewSkill("");
                }
              }}
            />
            <button
              onClick={() => {
                handleSkillAdd(newSkill);
                setNewSkill("");
              }}
              className="px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors"
            >
              <FiPlus size={16} />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Developer Profile
          </h2>
          <p className="text-gray-600">Manage your professional information</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <FiX size={16} className="mr-2 inline" />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors"
              >
                <FiSave size={16} className="mr-2 inline" />
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors"
            >
              <FiEdit2 size={16} className="mr-2 inline" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture & Basic Info */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-[#d97757] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">
                {developer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent text-center"
                />
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent text-center"
                />
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-800">
                  {developer.name}
                </h3>
                <p className="text-gray-600">{developer.title}</p>
              </>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <FiMail size={16} className="mr-3 flex-shrink-0" />
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
                />
              ) : (
                <span className="break-all">{developer.email}</span>
              )}
            </div>
            <div className="flex items-center text-gray-600">
              <FiPhone size={16} className="mr-3 flex-shrink-0" />
              {isEditing ? (
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
                />
              ) : (
                <span>{developer.phone}</span>
              )}
            </div>
            <div className="flex items-center text-gray-600">
              <FiMapPin size={16} className="mr-3 flex-shrink-0" />
              {isEditing ? (
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
                />
              ) : (
                <span>{developer.location}</span>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Professional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hourly Rate ($)
                </label>
                {isEditing ? (
                  <input
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) =>
                      handleInputChange("hourlyRate", parseInt(e.target.value))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-600">${developer.hourlyRate}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                {isEditing ? (
                  <select
                    value={formData.availability}
                    onChange={(e) =>
                      handleInputChange("availability", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
                  >
                    <option value="Available">Available</option>
                    <option value="Busy">Busy</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                ) : (
                  <p
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      developer.availability === "Available"
                        ? "bg-green-100 text-green-800"
                        : developer.availability === "Busy"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {developer.availability}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bio/Description */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              About Me
            </h3>
            {isEditing ? (
              <textarea
                value={formData.bio || ""}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                placeholder="Tell clients about yourself, your experience, and what makes you unique..."
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              />
            ) : (
              <p className="text-gray-600">
                {developer.bio ||
                  "No bio added yet. Click edit to add your professional description."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
