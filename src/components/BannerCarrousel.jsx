import React from 'react'
import Image from './Image'
import { Carousel } from "flowbite-react";

function BannerCarrousel(){
    const arrayImg =["https://as2.ftcdn.net/v2/jpg/03/87/09/21/1000_F_387092166_Ebdv3dtIOYFpKjMSiwJ9MorUxNDQSsHW.jpg", "/assets/images/automotive.png","/assets/images/MORTAGE.png", "/assets/images/personal.png"]

  return (
   
      <Carousel slideInterval={5000}>
       { 
       arrayImg.map(img=> <Image src={img} />
      )}
      </Carousel>
    )
}

export default BannerCarrousel