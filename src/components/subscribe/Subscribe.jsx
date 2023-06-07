import './Subscribe.css';
import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react'



function Subscribe (){

  const [ fromValue, setFromValue ] = useState()

  const formValue = (e)=>{
    setFromValue(e.target.value)
  }
  
 
  const formSendBtn = (e)=>{
    e.preventDefault();
    const email = fromValue;
    axios.post("http://localhost:4000/api/user/subscribe",
    email)
    
  }
  return(
    <div className='subscribe'>
      <div className='subs_left'>
        
        <img className='sub_img'
        width={400}
        height={300}
        src="https://imgpng.ru/d/armchair_PNG7012.png"/>
          
        </div>
      <div className='sub_form'>
        <h2>Subscribe newletters </h2>
        <input type="email" name="email" id="" onChange={formValue} placeholder='example@gmail.com' />
        <button onSubmit={formSendBtn} type="submit">Subscribe now</button>
      </div>

    </div>
  )
}

export default Subscribe;
