
import './Product.css';
import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios';

function  Products (){
  const [ getData, setGetData ] = useState([]);
  const carouselProduct = useRef();
  const [currentProduct, setCurrentProduct] = useState(0);
   useEffect(()=>{
     axios
     .get("http://localhost:4000/api/admin/productsget")
     .then(({data})=>{ setGetData(data)})
     .catch((error)=>{
       console.log(error);
     })
   },[]);
   const swipeRight = () => {
     if (currentProduct < getData.length - 1) {
      setCurrentProduct(currentImage => currentImage + 1)
     }
     else {
      setCurrentProduct(0)
     }
 }
 const swipeLeft = () => {
     if (currentProduct > 0) {
      setCurrentProduct(currentImage => currentImage - 1)
     }
     else {
      setCurrentProduct(getData.length - 1)
     }
 }
 useEffect(() => {
   
  carouselProduct.current.scrollLeft = currentProduct *750;
   
 }, [currentProduct]) 
 
  setTimeout(()=>{
    carouselProduct.current.scrollLeft = currentProduct * 750;
 }, 4000)
   


  return (
  <div className="product">
      <div className="product_into">
      <div className="product_into-wrap">
        <h2 className="product_into-wrap_heading">Our Work the furniture</h2>
        <p className="product_into-wrap_text"> 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eligendi laboriosam rerum?
        </p>
      </div>

<div className="product_itms" ref={carouselProduct}>
     
    {
      getData.map((item)=>
        <div className="product_itms-all">
        <p> { item.pro_name} </p>
        <img 
        width={200}
        height={300}
        src={item.pro_img} alt="product name" />
        <span className="product_span">
          <p>$ {item.pro_price} </p>
          <button className="product_btn"> Buy now </button>
        </span>
      </div>
      )
     
    }

</div>

      <div className="product_bottom">
        <div>
          <button onClick={swipeLeft}>left</button>
          <button onClick={swipeRight}>right</button>
        </div>
        <a className="pro_bott-link" href="">Learn more </a>
      </div>

    </div>
  </div>
  );
}

export default Products;