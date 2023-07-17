import { useState } from 'react'
import {data} from './list'

export default function Form({content}) {
const [list, setList] = useState(data);
console.log(list);
  return (
            <div className='form'>
                <form>
                    <h2>Personal info</h2>
                    <p>Please provide your name, email address, and phone number</p>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name' placeholder='e.g Stephen King' />
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
