// import React from 'react';
// import Navbar from '../components/Navbar';
// import App from '../../App'


// const Adminpanel = () => (
//     <div >
//         <div className='flex flex-col md:flex-row h-screen '>
         

//             {/* Main Content Area */}
//             <div className='flex flex-col w-full overflow-y-hidden'>
//                 {/* Navbar */}
//                 <div className='bg-black text-white  flex-shrink-0 max-h-[100px] '>
//                     <Navbar />
//                 </div>

//                 {/* Main Content  here we manage our main content section*/}
//                 <div className='flex overflow-y-auto'>
//                     <App />
//                 </div>

         
//             </div>
//         </div>
//     </div>






// );

// export default Adminpanel;





import Home from "./pages/AdminDashboard"
import Footer from './FooterPage/Footer';
import { Routes, Route } from 'react-router-dom';
import Clientregistration from './pages/Clientregistration'
import Developerregistration from './pages/Developerregistration';

import AdminUpdateClient from './pages/AdminUpdateClient';
import AdminUpdateDeveloper from './pages/AdminUpdateDeveloper';

import AdminBlockDeveloper from './pages/AdminBlockDeveloper';
import AdminProfile from './pages/AdminProfile';
import AdminReport from './pages/AdminReport';
import LogoutButton from './components/LogoutButton';
import AdminBlockClient from './pages/AdminBlockClient';
import Help from './pages/Help';
import AdminSetting from './pages/AdminSetting';
import AdminBalance from './pages/AdminBalance';
import AdminMessages from './pages/AdminMessages';
import EditProfile from './pages/EditProfile';
import Navbar from './components/Navbar'



// import AdminSettings from './pages/AdminSettings';



function App() {
  return (
    <div className="bg-background dark:bg-darkBackground text-black dark:text-white overflow-x-hidden ">



    <div className="  justify-center items-center w-[100vw] h-[100vh] ">
            <div className='bg-black text-white  flex-shrink-0 max-h-[100px] '>
                    <Navbar />
                </div> 



   

      <Routes>
        <Route path='/' element={<Home />} />
        
       

        <Route path='/Clientregistration' element={<Clientregistration />} />
        <Route path='/Developerregistration' element={<Developerregistration />} />

        <Route path='/AdminUpdateClient' element={<AdminUpdateClient />} />
        <Route path='/AdminUpdateDeveloper' element={<AdminUpdateDeveloper />} />
        <Route path='/AdminBlockClient' element={<AdminBlockClient />} />
        <Route path='/AdminBlockDeveloper' element={<AdminBlockDeveloper />} />
        <Route path='/AdminProfile' element={<AdminProfile />} />
        <Route path='/AdminReport' element={<AdminReport />} />
        <Route path='/LogoutButton' element={<LogoutButton />}/>
        <Route path='/Help' element={<Help/>} />
        <Route path='/AdminSetting' element={<AdminSetting/>}/>
        <Route path='/AdminBalance' element={<AdminBalance/>}/>
        <Route path='/AdminMessages' element={<AdminMessages/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>
        {/* <Route path='/AdminSettings' element={<AdminSettings/>}/> */}
        


        

      </Routes>
     <div className='bg-black mt-[15rem]'>
       <Footer/></div>
    </div>
    </div>
  );
}

export default App;
