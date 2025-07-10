
import { useState } from 'react'

import './index.css'
import AdminDashbaord from './pages/admin/Dashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FinancialsPage from './pages/admin/Financials'
import ProjectManagementPage from './pages/admin/Projectmanagement'
import UserManagementPage from './pages/admin/UserManagement'
import SettingsPage from './pages/admin/SettingsPage'
import { AdminLayout } from './component/layout/AdminLayout'
import { Navigate } from "react-router-dom";

// users
import { UserLayout } from './component/layout/UserLayout'
import DashboardMain from './User/DashboardMain.jsx';
import HireDeveloper from './User/HireDeveloper.jsx';
import MyRequests from './User/MyRequests.jsx';
import PostJob from './User/PostJob.jsx';

import Profile from './User/Profile.jsx';
import Payments from './User/Payments.jsx';
import Notifications from './User/Notifications.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>


          <Route path='/admin' element={<AdminLayout />} >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path='dashboard' element={<AdminDashbaord />} />
            <Route path='financials' element={<FinancialsPage />} />
            <Route path='project' element={<ProjectManagementPage />} />
            <Route path='users' element={<UserManagementPage />} />
            <Route path='setting' element={<SettingsPage />} />
          </Route>

          <Route path = '/user' element = {<UserLayout/>}>
          <Route index element = {<Navigate to = 'dashboard' replace/>}/>
          <Route path = 'dashboard' element = {<DashboardMain/>}/>
          <Route path = 'hire-developer' element = {<HireDeveloper/>}/>
          <Route path = 'post-job' element = {<PostJob/>}/>
          <Route path = 'my-requests' element = {<MyRequests/>}/>
          <Route path = 'profile' element = {<Profile/>}/>
          <Route path = 'payments' element = {<Payments/>}/>
          <Route path = 'notifications' element = {<Notifications/>}/>

          </Route>


        </Routes>
      </BrowserRouter>
</>
)}

export default App

