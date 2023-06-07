import './Contact.css';
import React, {useState, useRef} from 'react'
import axios  from 'axios';



function Contact (){
  const [ formValue, setFormValue]= useState({
      email : "",
      name : "",
      message : "",
      number : ""
  })

  const getValueAll = (e)=>{
    setFormValue((initial)=>{
      return{
        ...initial,
        [e.target.name]: e.target.value
      }
    })
  }

  const formSendBtn = (e)=>{
    e.preventDefault();
    const data = formValue;
    axios.post("http://localhost:4000/api/user/message",
    data)
    
  }



  return(
    <div className='contact'>
      <form className='cantact_form' onSubmit={formSendBtn}>
        <input type="text" name='name'  placeholder='Name' onChange={getValueAll} />
        <input type="text" name='email' placeholder='example@email.com' onChange={getValueAll}/>
        <input type="text" name='number' placeholder='Phone number'  onChange={getValueAll}/>
        <textarea name="message" id=""  cols="52" rows="10"  placeholder='Message' onChange={getValueAll}></textarea>
        <button type="submit" >send</button>
      </form>
      <div className='contact_text'>
        <h2>Google Maps Platform rejected your request. This API project is not authorized to use this API. </h2>
      </div>
    </div>
  )
}


export default Contact;