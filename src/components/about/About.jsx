
import './About.css';





function About() {
 
   
  return (
    <div className='about'>
      <div className='about_img-wrap'>
        <img 
        width={500}
        height={600}
        src='https://images.auctionet.com/thumbs/medium_item_2690931_610a8b421c.png'
         alt="banner rasm keladi" />
      </div>
      <div className='about_right'>
        <h2 className='about_right-heading'>
          About Us
        </h2>
        <p className='about_right-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eveniet asperiores vero quisquam.
          Cum suscipit consequatur beatae eos necessitatibus magni veritatis!
        </p>
        <a href='#' className='about_contact'>
          Contact Us
        </a>
      </div>
    </div>
  )
}


export default About