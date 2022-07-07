import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import './anim.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "./img/background.jpg";
import capsule from "./img/capsule.png";
import star from "./img/star.png";
import greyplanet from './img/greyplanet.png';
import marplanet from './img/marplanet.png';

function Anim(props) {

    gsap.registerPlugin(ScrollTrigger);

  const parallax = gsap.timeline();

    useEffect(()=>{
        //GSAP effect (begining of the page)
    parallax
    .to(".background", {
      scale: 1,
      x: "-20vw",
    })

    .to(
      ".capsule",
      {
        scale: 11,
      },
      "<",
    )

    .to(".greyplanet",
        {
            x: "0vw",
            y: "-60vh",
            scale: 1.5,
          },
          "<",
        )

    .to(".marplanet", 
    {
        y:"10vh",
        scale:1.5,
    },
    "<")

    .to(
      ".star",
      {
        scale: 2,
        y: '100px',
      },
      "<",
    );

  ScrollTrigger.create({
    animation: parallax,
    trigger: ".parallax",
    start: "top 0",
    end: "bottom 0%",
    scrub: 3,
    pin: true,
  });
  
    },[])

    return (
        <div className="contAnim">
        <section className="parallax">
          <img src={background} alt="background" className="background" />
          <img src={star} alt="star" className="star" />
          <img src={capsule} alt="capsule" className="capsule" />
          <img src={greyplanet} alt="greyplanet" className='greyplanet'/>
          <img src={marplanet} alt="marplanet" className='marplanet'/>
        </section>

      </div>
    );
}

export default Anim;