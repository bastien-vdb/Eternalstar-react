import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import backgroundMobile from "./img/background.png";
import capsuleMobile from "./img/capsule.png";
import embrytranspMobile from "./img/embrytransp.png";
import './animMobile.css';

const AnimMobile = () => {

    gsap.registerPlugin(ScrollTrigger);
    const parallaxMobile = gsap.timeline();

    useEffect(()=>{
        parallaxMobile
    .to(".background", {
      scale: 1,
      x: "-20vw",
    })

    .to('.embrytranspMobile', {
      scale:1.6,
      y: '-15vh'
    },'<')

    .to(
      ".capsuleMobile",
      {
        scale: 1.8,
      },
      "<",
    )

  ScrollTrigger.create({
    animation: parallaxMobile,
    trigger: ".parallaxMobile",
    start: "top 0",
    end: "bottom 0%",
    scrub: 3,
    pin: true,
  });
    })

    return (
        <div className="contAnimMobile">
            <section className="parallaxMobile">
                <img src={backgroundMobile} alt="backgroundMobile" className="backgroundMobile" />
                <img src={embrytranspMobile} alt="embrytranspMobile" className="embrytranspMobile" />
                <img src={capsuleMobile} alt="capsuleMobile" className="capsuleMobile" />
            </section>
        </div>
    );
};

export default AnimMobile;