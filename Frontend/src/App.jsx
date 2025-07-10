
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


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

