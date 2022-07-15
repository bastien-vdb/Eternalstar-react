import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './animMobile.css';
import background from "./img/background.jpg";
import capsule from "./img/capsule.png";
import embrytransp from "./img/embrytransp.png";
const AnimMobile = () => {

    gsap.registerPlugin(ScrollTrigger);
    const parallax = gsap.timeline();

    useEffect(()=>{
        parallax
    .to(".background", {
      scale: 1,
      x: "-20vw",
    })

    .to('.embrytransp', {
      scale:1,
      y: '-25vh'
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
    })

    return (
        <div className="contAnim">
            Hello Bali
            <section className="parallax">
                <img src={background} alt="background" className="background" />
                <img src={embrytransp} alt="embrytransp" className="embrytransp" />
                <img src={capsule} alt="capsule" className="capsule" />
            </section>
        </div>
    );
};

export default AnimMobile;