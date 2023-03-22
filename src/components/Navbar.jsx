import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'


const Navbar = () => {
const nagigate = useNavigate();
const [isActive, setisActive] = useState('dashboard');
const [toggleDrower, settoggleDrower] = useState(false)

const address ='ssss'

  return (
    <div>
        

        <div className="navbar bg-base-100">
  <div className="flex-none">
    
    <div className="drawer-content">
  
  <label htmlFor="my-drawer" className="btn  drawer-button">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
</div> 
    
  </div>
  <div className="flex-1">
    <Link to='/'>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </Link>
  </div>
  <div className="flex-none gap-2">
      {/* <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div> */}
      <div>
        <button className= {address ? 'btn btn-primary' : 'btn btn-accent text-white'}  onClick={()=> { 
            if (address) nagigate('CreateCampaign')
            else 'connect()'
        }} >{address ? 'Create a campaign' : 'connect'}</button>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
</div>



        </div>
 
  )
}

export default Navbar