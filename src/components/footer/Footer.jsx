import './Footer.css'


function Footer (){
  return(
    <div className='footer'>
      
      <div className='footer_top'>
        <span>
        <a href="http://" target="_blank" rel="noopener noreferrer">Location</a>
        </span>
        <span> 
          <a href="mailto:rozimattoshtanboyev@gmail.com">rozimattoshtanboyev@gmail.com</a>
        </span>
        <span>
          <a href="tel:+998996389899">tel:+998996389899</a>
        </span>
      </div>


      <div className='footer_bottom'>
        <div className='footer_b-links'>
          <h2>Useful links</h2>
         <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Our Design</a></li>
          <li><a href="#">Contact us</a></li>
         </ul>
        </div>

        <div>
          <h2>Rest api</h2>
          <p>Lorem ipsum
                dolor sit amet 
                consectetur 
                adipisicing.</p>
          </div>

          <div className='footer_media'>
            <h2>Sosial media </h2>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagramm </a></li>
      
          </div>

          <div>
           <h2>
              Our repair center  
           </h2>
           <p>
            Lorem, ipsum dolor.
           </p>
          </div>
      </div>
    </div>
  );
}

export default Footer;