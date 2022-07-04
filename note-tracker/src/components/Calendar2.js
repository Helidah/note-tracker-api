import {useState} from 'react';
import Calendar from 'react-calendar';
import NavBar from './NavBar';
import '../App.css';

function Calendar2() {
 
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 
  
   return (
    <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
    <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
      <NavBar />
  
  
      <div id="mobile-menu" class="overlay md:hidden lg:hidden">
          <div class="overlay-content">
              <div class="text-center profile">
                  <a href="javascript:void(0)" class="closebtn pt-0" onclick="closeNav()">&times;</a>
                  <div class="flex flex-wrap justify-center pt-20 profile__image__div">
                      <div class="w-6/12 sm:w-4/12 px-4">
                          <img src="./images/user_profile/u1363.svg" alt="My profile picture" class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                      </div>
                  </div>
                  <div class="p-4 font-medium text-white">
                      <h3>George Okumu</h3>
                      <h3>gokumu12@gmail.com</h3>
                  </div>
              </div>
              <div class="profile-properties">
                  <ul class="text-center pt-6">
                      <li><a href="#index.html" class="block  px-2 py-4 transition duration-300"><i class="fa fa-fw fa-home"></i> Home</a></li>
                      <li><a href="#myprofile" class="block px-2 py-4 transition duration-300"><i class="fa fa-fw fa-user-circle"></i> My Profile</a></li>
                      <li><a href="#help" class="block px-2 py-4 transition duration-300"><i class="fa fa-fw fa-question-circle"></i>  Help</a></li>
                      <li><a href="#" class="block px-2 py-4 transition duration-300"><i class="fa fa-fw fa-sign-out"></i> Logout</a></li>
                  </ul>
              </div>
          </div>
      </div>
    </aside>
  
    <main class="flex-1 py-10  px-5 sm:px-10">
      <div class="max-w-2xl mx-auto bg-white">
      <div className='app2'>
     <h1 className='header text-center font-bold text-2xl mb-4'>App Calendar</h1>
     <div>
      <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
     </div>
  
     {date.length > 0 ? (
     <p>
       <span>Start:</span>
       {date[0].toDateString()}
       &nbsp;
       &nbsp;
       <span>End:</span>{date[1].toDateString()}
     </p>
            ) : (
     <p className='mt-10 text-center'>
        <span className='text-bold'>Date:</span> <em className='text-green-700'>{date.toDateString()}</em>
     </p> 
            )
     }
   </div>
      </div>
    </main>
  
    {/* Right side bar */}
    <aside className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">
  
      <div>
        <div className="mt-10">
          <span className="font-semibold text-gray-700 dark:text-white">More Calendar Info::</span>
          <ul className="mt-4 text-gray-400 text-xs space-y-3">
  
            <li className="pt-1">
              <a href="#" className="px-5 py-2.5 bg-blue-600  hover:bg-blue-700 rounded-lg text-center font-medium block text-white">{date.toDateString()}</a>
            </li>
  
          </ul>
        </div>
      </div>
    </aside>
  
  </div>
  
    )
  }
  export default Calendar2;
  