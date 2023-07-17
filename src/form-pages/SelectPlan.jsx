import React from 'react'
import Form from '../components/Form'

export default function SelectPlan() {
  let info = {
    title:'personal info',
    context: 'please provide your name, email address, and phone number'
  }
  return (
    <div className='form_container'>
      <Form data={info} />
      <div className='buttons'>
        <div className="button">
          <button>next step</button>
        </div>
      </div>
    </div>
  )
}
