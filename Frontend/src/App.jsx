import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import UserLoginPage from './pages/loginuser'
import UserRegisterPage from './pages/userregister'
import AdminLoginPage from './pages/loginAdmin'
import DeveloperLoginPage from './pages/loginDeveloper'
import DeveloperRegisterPage from './pages/registerDevoper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserLoginPage/>
    <UserRegisterPage/>
    <AdminLoginPage/>
    <DeveloperLoginPage/>
    <DeveloperRegisterPage/>
      
    </>
  )
}

export default App
