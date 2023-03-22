import React, { useState } from 'react'
import { Navbar,Sidebar } from '../components'
import { FcMoneyTransfer } from 'react-icons/fc'

const CreateCampaign = () => {

  const [form,setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  })

  

  const handleFormFieldChange =(fieldName,e)=> {
    setForm({...form, [fieldName]: e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form)

  }
  return (
    <div className >
  
      
      <div className="card   shadow-xl  ">
  <figure className="px-10 pt-10 -z-50">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5v0LY3h3Kc1UDiTOvjktD6gUQ42hU02-Fug&usqp=CAU" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start a Campaign</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>

  <form className="form-control">
  <label className="label">
    <span className="label-text">Your Name</span>
  </label>
  <label className="">
    <input type="text" placeholder="" className="input input-bordered w-full" 
      value={form.name}
     onChange={(e)=> handleFormFieldChange ('name',e)}
    />
 
  </label>

  <label className="label">
    <span className="label-text">Campaign Title</span>
  </label>
  <label className=" ">
    <input type="text" placeholder="" className="input input-bordered w-full" 
      value={form.title}
      onChange={(e)=> handleFormFieldChange ('title',e)}
    />
    
  </label>

  <label className="label">
    <span className="label-text">Description</span>
  </label>
  <label className=" ">
  <textarea className="textarea textarea-bordered w-full" placeholder="Write Description"
    value={form.description}
    onChange={(e)=> handleFormFieldChange ('description',e)}
  ></textarea>
    
  </label>

  <div className=' mt-4 bg-indigo-600 text-white p-3 rounded-lg display flex items-center'>
  <span className='p-4 text-4xl'><FcMoneyTransfer/></span>
   <p> You will get 100% of the raised amount</p>

  </div>

  <label className="label">
    <span className="label-text">Goal</span>
  </label>
  <label className=" ">
    <input type="number" placeholder="0.1 ETH" className="input input-bordered w-full"
      value={form.target}
      onChange={(e)=> handleFormFieldChange ('target',e)}
    />
    
  </label>


  <label className="label">
    <span className="label-text">End Date</span>
  </label>
  <label className=" ">
    <input type="date" className="input input-bordered w-full" required 
      value={form.deadline}
      onChange={(e)=> handleFormFieldChange ('deadline',e)}
    />
    
  </label>

  <label className="label">
    <span className="label-text">Campaign Image URL</span>
  </label>
  <label className=" ">
    <input type="text" placeholder="place image URL of your campaign" className="input input-bordered w-full"  required="required"  
      value={form.image}
      onChange={(e)=> handleFormFieldChange ('image',e)}
    />
    
  </label>
  
  <div className="card-actions mt-4 justify-center">
      <button type='submit' className="btn btn-primary" onClick={handleSubmit}> Create Campaign</button>
    </div>
    
</form>



   
  </div>
</div>

    </div>
   )
}

export default CreateCampaign