

// import Home from './AdminSrc/pages/AdminDashboard'
// import Footer from './AdminSrc/FooterPage/Footer';
// import { Routes, Route } from 'react-router-dom';
// import Clientregistration from './AdminSrc/pages/Clientregistration'
// import Developerregistration from './AdminSrc/pages/Developerregistration';

// import AdminUpdateClient from './AdminSrc/pages/AdminUpdateClient';
// import AdminUpdateDeveloper from './AdminSrc/pages/AdminUpdateDeveloper';

// import AdminBlockDeveloper from './AdminSrc/pages/AdminBlockDeveloper';
// import AdminProfile from './AdminSrc/pages/AdminProfile';
// import AdminReport from './AdminSrc/pages/AdminReport';
// import LogoutButton from './AdminSrc/components/LogoutButton';
// import AdminBlockClient from './AdminSrc/pages/AdminBlockClient';
// import Help from './AdminSrc/pages/Help';
// import AdminSetting from './AdminSrc/pages/AdminSetting';
// import AdminBalance from './AdminSrc/pages/AdminBalance';
// import AdminMessages from './AdminSrc/pages/AdminMessages';
// import EditProfile from './AdminSrc/pages/EditProfile';




// // import AdminSettings from './pages/AdminSettings';



// function App() {
//   return (
//     <div className="bg-background dark:bg-darkBackground text-black dark:text-white overflow-x-hidden ">



//     <div className="  justify-center items-center w-[100vw] h-[100vh] ">


   

//       <Routes>
//         <Route path='/' element={<Home />} />
        
       

//         <Route path='/Clientregistration' element={<Clientregistration />} />
//         <Route path='/Developerregistration' element={<Developerregistration />} />

//         <Route path='/AdminUpdateClient' element={<AdminUpdateClient />} />
//         <Route path='/AdminUpdateDeveloper' element={<AdminUpdateDeveloper />} />
//         <Route path='/AdminBlockClient' element={<AdminBlockClient />} />
//         <Route path='/AdminBlockDeveloper' element={<AdminBlockDeveloper />} />
//         <Route path='/AdminProfile' element={<AdminProfile />} />
//         <Route path='/AdminReport' element={<AdminReport />} />
//         <Route path='/LogoutButton' element={<LogoutButton />}/>
//         <Route path='/Help' element={<Help/>} />
//         <Route path='/AdminSetting' element={<AdminSetting/>}/>
//         <Route path='/AdminBalance' element={<AdminBalance/>}/>
//         <Route path='/AdminMessages' element={<AdminMessages/>}/>
//         <Route path='/EditProfile' element={<EditProfile/>}/>
//         {/* <Route path='/AdminSettings' element={<AdminSettings/>}/> */}
        


        

//       </Routes>
//      <div className='bg-black mt-[15rem]'>
//        <Footer/></div>
//     </div>
//     </div>
//   );
// }

// export default App;




import React from 'react';

import Adminpanel from './AdminSrc/Adminpanel'


const App = () => (
    <div >
        <div className='flex flex-col md:flex-row h-screen '>
         

            {/* Main Content Area */}
            <div className='flex flex-col w-full overflow-y-hidden'>
                {/* Navbar */}
           
                {/* Main Content  here we manage our main content section*/}
                <div className='flex overflow-y-auto'>
                    <Adminpanel />
                </div>

         
            </div>
        </div>
    </div>






);

export default App;
