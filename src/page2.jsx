import React, { useEffect } from 'react'
import './page2.css'
import gsap from 'gsap';
import btn from './btn.jsx'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Page2() {

  let text =  'As a renowned animation studio, we specialize in bringing imaginative concepts to life. Our distinctive approach to  projects is marked by transparency, exceptional quality, and a commitment to exceeding expectations, earning us recognition for our unique and outstanding work.'
  let textLetters = text.split("");

    let btn = 'DISCOVER STUDIO';
    let btnLetters = btn.split("");

    
      
    
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "center 100%",
        end: "center center",
        scrub : 1,
      }
    })

   

    tl.to('.letr',{
      color : '#fff',
      stagger : 0.1
    })

    gsap.to('.page2 .left img',{
      scale : 1.2,
      scrollTrigger : {
        trigger : ".page2 .left img",
        start : 'top bottom',
        end : 'bottom top',
        scrub : 1
      }
    })

   
  })



  return (
    <>
      <div className="page2">
        <div className="left">
          <img src="https://a06b5f82.rocketcdn.me/wp-content/uploads/2024/02/Revenant_Studio_Image1-1024x1024.jpg" alt="" />
        </div>
        <div className="right">

          <h2>{
            textLetters.map((letter) => {
            return <span className='letr'>{letter}</span>
          })}
          </h2>

          <div className="button" 
          onMouseOver={()=>{

            let tl3 = gsap.timeline();
              tl3.to('.btnLetter1',{
                ease : "Expo.easeOut",
                stagger : 0.02,
                y : "-105%"
              },'a')
              .to('.btnLetter2',{
                ease : "Expo.easeOut",
                stagger : 0.02,
                y : "-105%"
              },'a')
              .to('.violet',{
                scale  :1.5
              },'a').to('.btnLetter1',{
                stagger : 0.02,
                delay : .1,
                ease : "Expo.easeIn",
                y : "0%"
              },'a').to('.btnLetter2',{
                delay : .1,
                ease : "Expo.easeIn",
                stagger : 0.02,
                y : "0%"
              },'a')
            }
          }  onMouseOut={()=>{
            
            gsap.to('.violet',{
              scale  :1 
            })
          }
        } 
          >
            <div className="violet"></div>
            <h3 > 
              {
            btnLetters.map((letter)=>{
                return <span className= 'btnLetter1' >{letter}</span>
            }) }     <br />
               {
            btnLetters.map((letter)=>{
                return <span className= 'btnLetter2' >{letter}</span>
            }) }
        </h3>
          </div>

        </div>
      </div>
    </>
  )
}
