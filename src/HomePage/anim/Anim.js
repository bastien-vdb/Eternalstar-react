import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import './anim.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "./img/background.jpg";
import capsule from "./img/capsule.png";
import star from "./img/star.png";
import embrytransp from "./img/embrytransp.png";
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

    .to('.embrytransp', {
      scale:8,
      y: '-20vh'
    },'<')

    .to(
      ".capsule",
      {
        scale: 5,
      },
      "<",
    )

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
          <img src={embrytransp} alt="embrytransp" className="embrytransp" />
          <img src={capsule} alt="capsule" className="capsule" />
        </section>

      </div>
    );
}

export default Anim;