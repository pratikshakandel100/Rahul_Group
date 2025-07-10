import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import DeveloperDashboardLayout from "../components/layout/DeveloperDashboardLayout";
import DeveloperJobRequests from "./Developer/JobRequests";
import DeveloperJobs from "./Developer/Jobs";
import DeveloperNotifications from "./Developer/Notifications";
import DeveloperPayments from "./Developer/Payments";
import DeveloperProfile from "./Developer/Profile";
import DeveloperReviews from "./Developer/Reviews";
import DashboardOverview from "./Developer/Dashboard";

// Example developer data (replace with context or API data as needed)
const developerData = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john@example.com",
  phone: "123-456-7890",
  location: "Remote",
  hourlyRate: 50,
  availability: "Available",
  bio: "Experienced developer specializing in modern web applications.",
  skills: ["React", "Node.js", "MongoDB"],
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/developer" element={<DeveloperDashboardLayout />}>
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="job-requests" element={<DeveloperJobRequests />} />
          <Route path="my-jobs" element={<DeveloperJobs />} />
          <Route path="notifications" element={<DeveloperNotifications />} />
          <Route path="payments" element={<DeveloperPayments />} />
          <Route
            path="profile"
            element={<DeveloperProfile developer={developerData} />}
          />
          <Route path="reviews" element={<DeveloperReviews />} />
          {/* Add more dashboard routes as needed */}
        </Route>
        {/* Other routes (e.g., login, register) */}
      </Routes>
    </BrowserRouter>
  );
}
