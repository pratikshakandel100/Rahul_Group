
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import UserLoginPage from './pages/Auth/LoginPages/UserLoginPage.jsx';
import UserRegisterPage from './pages/Auth/RegisterPages/UserRegisterPage.jsx';
import AdminLoginPage from './pages/Auth/LoginPages/AdminLoginPage.jsx';
import DeveloperLoginPage from './pages/Auth/LoginPages/DeveloperLoginPage.jsx';
import DeveloperRegisterPage from './pages/Auth/RegisterPages/DeveloperRegisterPage.jsx';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordPage.jsx';




import './index.css'





export default function App(){
    return(<>

    <Router>
        <Routes>
            
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/register/' element={<UserRegisterPage/>}></Route>
            <Route path='/login' element={<UserLoginPage/>}></Route>
            <Route path='/adminlogin' element={<AdminLoginPage/>}></Route>
            <Route path='/developerlogin' element={<DeveloperLoginPage/>}></Route>
            <Route path='/userregister' element={<UserRegisterPage/>}></Route>
            <Route path='/developerregister' element={<DeveloperRegisterPage/>}></Route>
            <Route path='/forgotpassword' element={<ForgotPasswordPage/>}></Route>


            <Route path='/forgotpassword' element={<ForgotPasswordPage/>}></Route>


        </Routes>

    </Router>
    </>
    );
}