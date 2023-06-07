import React, {useEffect, useState, useRef} from 'react'
import './Banner.css';
import axios from 'axios';



function Banner() {
 const [ getData, setGetData ] = useState([]);
 const carouselWrapperEl = useRef();
 const [currentImage, setCurrentImage] = useState(0);
  useEffect(()=>{
    axios
    .get("http://localhost:4000/api/admin/bannerget")
    .then(({data})=>{ setGetData(data)})
    .catch((error)=>{
      console.log(error);
    })
  },[]);
  const swipeRight = () => {
    if (currentImage < getData.length - 1) {
        setCurrentImage(currentImage => currentImage + 1)
    }
    else {
      setCurrentImage(0)
    }
}
const swipeLeft = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage => currentImage - 1)
    }
    else {
      setCurrentImage(getData.length - 1)
    }
}
useEffect(() => {
  
   carouselWrapperEl.current.scrollLeft = currentImage *1380;
  
}, [currentImage]) 

 setTimeout(()=>{
  carouselWrapperEl.current.scrollLeft = currentImage *1380;
}, 4000)
  
  
  return (
   <div className='banner'>
    <div className='banner_scrol' ref={carouselWrapperEl}>
      {
        getData.map((item)=>
        <div className='banner_swp' key={item.id}>
        <div>
          <h2 className='banner_heading'>
            {item.title}
          </h2>
          <p className='banner_text'>
           {item.text}
          </p>
          <a className='banner_link' herf='/contact'>
            Contact Us
          </a>
        </div>
  
        <div className='banner_img'>
          <img 
            width={550}
            height={300}
            src={item.image} 
            alt='' />
        </div>
        </div>
        )
      }
    </div>

    <div className='banner_btn-wrap'>
      <button className='banner_btn' onClick={swipeLeft}> 01 </button>
      <button className='banner_btn' onClick={swipeRight}> 02 </button>
    </div>
   </div>
  )
}


export default Banner