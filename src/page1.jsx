import React from 'react'
import './page1.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Page1() {


  useGSAP(()=>{
    let tl = gsap.timeline({scrollTrigger:{
      trigger : '.page1',
      start : "bottom bottom",
      end : 'bottom center',
      scrub : 1,
      pin : true,
    }});

    tl.to('.page1 .right',{
      x :" 50 ",
      opacity:0,

    },'a').to('.page1 .left',{
      x :"-50 ",
      opacity:0,

    },'a').to('.page1 p',{
      opacity:0,
      scale : 0.8
    },'a').to('.page1 img',{
      scale : 2,
      opacity : 0,
    },'a')
})


  return (
    <>


      <nav></nav>
      <div className="page1">
        <img src="https://a06b5f82.rocketcdn.me/wp-content/uploads/2024/02/hero-1024x576.jpg" alt="" />
        <div className="head">
          <h1 className='right'> Beautiful </h1>
          <h1 className='left'>moving imagery</h1>
          <h1 className='right'> with edge</h1>
        </div>
        <p>BRINGING ORIGINAL ANIMATED <br />CONCEPTS TO LIFE</p>
      </div>


    </>

  )
}
