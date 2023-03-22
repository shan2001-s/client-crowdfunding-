import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import { Sidebar, Navbar} from './components'
import { CampaignDetails, CreateCampaign, Home, Profile} from './pages'

const App = () => {
  return (
   <div >

      <div>
      <Navbar/>
   
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/CreateCampaign' element={<CreateCampaign/>}/>
        </Routes>
   
      </div>
   </div>
  )
}

export default App