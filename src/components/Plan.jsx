import React from 'react'

export default function Plan({data}) {
  return (
    <div className='form'>
                <form>
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing</p>
                    <div>
                       
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name='email' id='email' placeholder='e.g stephenking@lorem.com' />
                    </div>
                    <div>
                        <label htmlFor="number"> Phone Number</label>
                        <input type="number" name='number' id='number' placeholder='e.g +1 234 567 890' />
                    </div> 
                </form>    
            </div>
  )
}
