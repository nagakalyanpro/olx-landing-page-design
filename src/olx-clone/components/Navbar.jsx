import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { MdNotificationsNone } from 'react-icons/md';


const Navbar = () => {
  return (
    <div className='nav-section'>
        <div className="logo">
            <div className="logo-title">Alx</div>
            <div className="logo-location">
                <FiSearch className='icon' />
                <input type="text" placeholder='India' />
                <BsChevronDown className='icon' />

            </div>
            <div className="nav-drop">
                <select name="" id="">
                    <option>Andhra Pradesh</option>
                    <option>Bihar</option>
                    <option>Delhi</option>
                    <option>Goa</option>
                    <option>Haryana</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Maharastra</option>
                    <option>Telangana</option>
                </select>
            </div>
        </div>
        <div className="nav-search">
            <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
           <div className="go-search">
           <GoSearch className='icon' />
          
           </div>
        </div>
        <div className="nav-user">
            <div className="user-lang">ENGLISH</div>
            {/* <div className="user-chat">Chat</div> */}
            <div className="user-notif"><u>Login</u></div>
            <div className="user-bell">
            
            </div>
        </div>
          
  <div class="on-dark">
    <button class="border-gradient border-gradient-green">
    +SELL
    </button>
  </div>
        <div className="sell on-dark"></div>
    </div>
  )
}

export default Navbar