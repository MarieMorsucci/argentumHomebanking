import React from 'react'
import Image from './Image'
import { Carousel } from "flowbite-react";

function BannerCarrousel(){
    const arrayImg =["/assets/images/products.png", "/assets/images/automotive.png","/assets/images/MORTAGE.png", "/assets/images/personal.png"]

  return (
   
      <Carousel slideInterval={5000}>
       { 
       arrayImg.map(img=> <Image src={img} />
      )}
      </Carousel>
    )
}

export default BannerCarrousel