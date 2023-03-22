import React from 'react'

const Sidebar = () => {
  return (
    <div >
        <div className="drawer  absolute mt-0 z-50">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />

  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-40 bg-base-100 text-base-content">
    
      <li><a href='/'>dashboard</a></li>
      <li><a href='/CreateCampaign'>campaign</a></li>
      <li><a>payment</a></li>
      <li><a>withdraw</a></li>
      
    </ul>
  </div>
</div>

<div>
    <button className='btn btn-secondary'>hello</button>
</div>
    </div>
  )
}

export default Sidebar