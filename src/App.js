
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotifications: ""
  })
  function changeHandler(event) {
    const { type, name, value, checked } = event.target;
    setFormData((pre) => ({ ...pre, [name]: type === "checkbox" ? checked : value }))


  }
  function submitForm(event) {
    event.preventDefault();

    console.log(" Finally submit the enteir form data successfully!")

    console.log(formData)
  }




  return (

    <div className='flex justify-center items-center  bg-gray-400  w-[100%] h-[100%]'>
      <div >
        <form onSubmit={submitForm} className='shadow-sm  '>
          <div  className='flex  justify-center items-center flex-col'>
          <div className=' flex justify-center items-center gap-10 mt-10 '>
            <div>
              <label htmlFor='firstName' className="text-red-200" >First Name</label>

              <input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='pankaj'
                value={formData.firstName}
                onChange={changeHandler}

              />
            </div>


            <br /><br />
            <div>
              <label htmlFor='lastName'>Last Name</label>

              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='kushwaha'
                value={formData.lastName}
                onChange={changeHandler}

              />
            </div>
          </div>
          
          <div>
            <label htmlFor='email'>Email Address</label>
            
            <input
              type='email'
              name='email'
              id='email'
              placeholder='pk0956@gmail.com'
              value={formData.email}
              onChange={changeHandler}
            />
            
            
            <label htmlFor='country'>Country</label>
            
            <select
              name='country'
              id='country'
              onChange={changeHandler}
              value={formData.country}
            >
              <option value="india">India</option>
              <option value="united states">United States</option>
              <option value="london">London</option>
              <option value="canada">Canada</option>
              <option value="germany">Germany</option>
            </select>
          </div>
          <br /><br />
          <div>
            <label htmlFor='streetAddress'>Street Address</label>
            <br />
            <input
              type='text'
              name='streetAddress'
              id='streetAddress'
              placeholder='73Galikadampur'
              value={formData.streetAddress}
              onChange={changeHandler}

            />
            <br /><br />
            <label htmlFor='city'>City</label>
            <br />
            <input
              type='text'
              name='city'
              id='city'
              placeholder='Aligarh'
              value={formData.city}
              onChange={changeHandler}
            />
          </div>
          <div>
            <br /><br />
            <label htmlFor='state'>State/Province</label>
            <br />
            <input
              type='text'
              name='state'
              id='state'
              placeholder='Uttar Pradesh'
              value={formData.state}
              onChange={changeHandler}
            />

            <br /><br />
            <label htmlFor='postalCode'>Postal Code</label>
            <br />
            <input
              type='text'
              name='postalCode'
              id='postalCode'
              placeholder='204215'
              value={formData.postalCode}
              onChange={changeHandler}

            />
          </div>

          <br />
          <br />
          <fieldset>
            <legend>By Email</legend>
            <input
              type='checkbox'
              name='comments'
              id='comments'
              onChange={changeHandler}
              checked={formData.comments}
            />
            <div>
              <lable htmlFor="comments">Comments</lable>
              <p>Get notified when someones posts a comment on a posting</p>

            </div>
            <input
              type='checkbox'
              name='candidates'
              id='candidates'
              onChange={changeHandler}
              checked={formData.candidates}
            />
            <div>
              <lable htmlFor="candidates">Candidates</lable>
              <p>Get notified when a candidate applies for a job</p>

            </div>
            <input
              type='checkbox'
              name='offers'
              id='offers'
              onChange={changeHandler}
              checked={formData.offers}
            />
            <div>
              <lable htmlFor="offers">Offers</lable>
              <p>Get notified when a candidate accepts or rejects an offer</p>

            </div>
          </fieldset>
          <br />
          <br />
          <fieldset>
            <div>
              <legend>Push Notifications</legend>
              <p>these are delivered via SMS to your mobile phone</p>
            </div>
            <input
              type='radio'
              name='pushNotifications'
              value="Everything"
              onChange={changeHandler}
              id='Everything'
            />
            <lebal htmlFor="Everything">
              Everything
            </lebal>
            <br></br>
            <input
              type='radio'
              name='pushNotifications'
              value="push email"
              onChange={changeHandler}
              id='pushEmails'
            />
            <lebal htmlFor="pushEmails">
              Same as Email
            </lebal>
            <br />
            <input
              type='radio'
              name='pushNotifications'
              value="No push Notification"
              onChange={changeHandler}
              id='NoPushNotifications'
            />
            <lebal htmlFor="NoPushNotifications">
              No Push Notifications
            </lebal>
          </fieldset>

          <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
