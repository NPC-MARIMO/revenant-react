import React from 'react'

export default function btn() {

    let btn = 'DISCOVER STUDIO';
    let btnLetters = btn.split("");

  return (
    <>
        {
            btnLetters.map((letter)=>{
                return <span style={{fontFamily: gilroy}} className= {classname} >{letter}</span>
            })
        }
    </>
  )
}
