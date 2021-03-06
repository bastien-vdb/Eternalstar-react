import {Anchor} from 'antd';
import 'antd/dist/antd.css';
import './HomePageCSS.css';
import {gsap} from 'gsap';
import {useEffect, useState} from 'react';
import About from './about/About.js';
import Anim from './anim/Anim.js';
import AnimMobile from './anim/AnimMobile';
import hero from './img/generation_bd.png';
import hero2 from './img/life_bd.png';
import Media from 'react-media';
import { Modal } from 'antd';

function HomePage () {

    const [isModalVisible, setModalVisible] = useState(false);
    const AnchorLink  = Anchor.Link;

    useEffect(()=>{

        gsap.fromTo(".eternal_title",{x: -500}, {
            scrollTrigger: ".eternal_title", // start the animation when ".box" enters the viewport (once)
            x: 0
        });
        
        gsap.fromTo(".eternal_title2",{x: -500}, {
            scrollTrigger: ".eternal_title2", // start the animation when ".box" enters the viewport (once)
            x: 0
        });
        gsap.fromTo(".info",{x: -500}, {
            scrollTrigger: ".info", // start the animation when ".box" enters the viewport (once)
            x: 0
        });
        gsap.fromTo(".heroD_2",{opacity: 0}, {
            scrollTrigger: ".heroD_2", // start the animation when ".box" enters the viewport (once)
            opacity: 1,
            duration:3,
        });
        gsap.fromTo(".team__flex .member",{transform: 'scale(0.5)'}, {
            scrollTrigger: ".team__flex .member", // start the animation when ".box" enters the viewport (once)
            transform: 'scale(1)',
            duration:1,
        });
        gsap.fromTo(".heroContact",{opacity: 0}, {
            scrollTrigger: ".heroContact", // start the animation when ".box" enters the viewport (once)
            opacity: 1,
            duration:3,
        });
        gsap.fromTo(".info2",{x: -500}, {
            scrollTrigger: ".info .info2", // start the animation when ".box" enters the viewport (once)
            x: 0
        });
        gsap.fromTo(".bloc1",{y: 150}, {
            scrollTrigger: ".bloc1", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
        gsap.fromTo(".bloc2",{y: 150}, {
            scrollTrigger: ".bloc2", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
        gsap.fromTo(".bloc3",{y: 150}, {
            scrollTrigger: ".bloc3", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
        gsap.fromTo(".bloc4",{y: 150}, {
            scrollTrigger: ".bloc4", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
        gsap.fromTo(".bloc5",{y: 150}, {
            scrollTrigger: ".bloc5", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
    })

    /*Offering list*/
    const technique = [
        "Cr??ation de Dapps",
        "D??termination de vos besoins",
        "Conception technique",
        "Choix de la Blockchain",
        "Cr??ation du ou des Smart contracts",
        "Cr??ation de site (une interface anim??e adapt??e aux utilisateurs)",
        "Tests",
        "Mise en production",
        "Maintenance applicative"
        ];
    
    const artistique = [
        "D??finir vos projets pour le WEB3.0",
        "Aide ?? la conception",
        "Direction artistique"
    ];

    const marketing = [
        "Lancement de collections NFTs",
        "Gestion de communaut??",
        "Aide ?? la communication pour les projets sur le WEB3.0"
    ]
      
    return (
        <div id='topHomePage'>
            <Media query="(min-width:1000px)">
                {(matches)=> matches ? (<Anim/>) : (<AnimMobile/>)}
            </Media>        
            <section className='heroHome'>
                    <h1>ETERNALSTAR</h1>
                    <span style={{color:'white'}}>Entrez dans le monde de la blockchain</span>
            </section>
            <section className="hero">
                <div className="heroG">
                    <div style={{width:'100%'}}>
                        <h1 className='eternal_title2'>Devenez un acteur reconnu dans le WEB3.0</h1>
                        <p>Tout savoir sur notre offre</p>   
                        <Anchor>
                        <button className="btn">
                            <AnchorLink href="#nos_services" title="Offres">
                            </AnchorLink>
                        </button>
                        </Anchor>
                    </div>
                </div>
                <div className="heroD">
                </div>
            </section>

            <section className="info">
                <div className="container">
                    <h2 className="infoTitle">
                    Smart contract cr????s
                    <br />
                    + 80
                    </h2>
                </div>
            </section>

            <section className="hero_travaillez_avec_nous">
                <div className="heroD_2">
                </div>
                <div className="heroD">
                    <div>
                        <h1 className='eternal_title'>
                            Travailler avec nous
                        </h1>
                        Besoin d'une ??quipe comp??tente et qualifi??e pour vous accompagner dans la r??alisation de votre projet ?
                        Vous avez frapp?? ?? la bonne porte. Notre travaille consiste ?? comprendre vos objectifs et ?? trouver la solution adapt??e ?? vos besoins.
                        Contactez-nous !
                        <div style={{marginLeft:'30%', marginTop:'10%'}}>
                            <Anchor>
                                <button className="btn">
                                    <AnchorLink href="#contact" title="Go">
                                    </AnchorLink>
                                </button>
                            </Anchor>
                        </div>                            
                    </div>
                </div>
            </section>

            <section>
                <div className="team" id="nos_services" >
                    <div className="container">
                    <h2>
                        Notre offre
                    </h2>
                    <div className="team__flex">
                        <div className="member">
                        <h4>Technique</h4>
                        <ul className="job">  
                                {technique.map((e,i)=><li key={i}>{e}</li>)}
                        </ul>
                        <img src={hero} alt="Cr??ation de collection NFT" />
                        </div>
                        <div className="member">
                        <h4>Artistique</h4>
                        <ul className="job">
                                {artistique.map((e,i)=><li key={i}>{e}</li>)}
                        </ul>
                        <img src={hero2} alt="Design dans le Metaverse" />
                        </div>
                        <div className="member">
                        <h4>Marketing</h4>
                        <ul className="job">
                                {marketing.map((e,i)=><li key={i}>{e}</li>)}
                        </ul>
                        <img src={hero} alt="Marketing et gestion de communaut??" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="heroContact" id="contact">
                <div className="heroContactG">
                    <div>
                            <About/>
                    </div>
                </div>
                <div className="heroD_3"></div>
            </section>

            <section className="info">
                <div className="container">
                    <div className='info2'>
                        <h2>
                            Une entreprise dynamique 
                        </h2>
                        <div style={{width:'50%', marginLeft:'25%'}}>
                            <span style={{fontSize:'50px'}}>" </span>Nous vous accompagnons du d??but du projet jusqu'?? la livraison finale. Nous adoptons une m??thodologie pali??e par des process pr??cis, gr??ce ?? notre experience cumul??e de plus de 10 ans.<span style={{fontSize:'50px'}}> "</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="roadmap">
                    <div className="container">
                        <h1 className='eternal_title'>Expertises</h1>
                        <div className="line"></div>
                            <div className="bloc bloc1">
                                <div className="number off">1</div>
                                <h3>NFT Arts</h3>
                                <p>Notre expertise vous permet de lancer votre projet dans un d??lai r??duit, tout en vous assurant d'une qualit?? ?? la hauteur des plus grands projets de collections d'oeuvres d'art num??riques.</p>
                            </div>
                            <div className="bloc bloc2">
                                <div className="number off">2</div>
                                <h3>NFT Game</h3>
                                <p>Vous souhaitez cr??er un jeu sur le Web3.0 ? Nous vous accompagnons sur la sp??cification des besoins. Nous nous occupons de la programmation.</p>
                            </div>
                        <div className="bloc bloc3">
                            <div className="number off">3</div>
                            <h3>Dapp DEFI</h3>
                            <p>Un projet sur la finance d??centralis??e ? Nous vous aidons ?? lancer votre application tout en respectant les normes juridiques.</p>
                        </div>
                        <div className="bloc bloc4">
                            <div className="number off">4</div>
                            <h3>Direction Artistique</h3>
                            <p>Besoin de conseils pour votre oeuvre ? Notre expertise artistique vous permettra de concr??tiser votre objectif.</p>
                        </div>
                        <div className="bloc bloc5">
                            <div className="number off">5</div>
                            <h3>Cr??ation d'une Communaut??</h3>
                            <p>Votre projet manque de visibilit?? ? Nous vous accompagnons dans la cr??ation d'une communaut??.
                                Discord et Twitter sont les incontournables du moment, mais certains outils qui ne sont pas ?? n??gliger, font la diff??rence.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="footer__flex">
                        <div className="footerG">
                            EternalStar
                        </div>
                        <div className="footerD">
                            <ul>
                                <li>
                                    <button style={{background:'none', border:'none', cursor:'pointer'}} onClick={()=>setModalVisible(true)}>D??veloppement</button>
                                    <Modal type title="Development by" onCancel={()=>setModalVisible(false)} onOk={()=>setModalVisible(false)} visible={isModalVisible}>
                                        <p>Bastien Vermot de boisrolin</p>
                                    </Modal>
                                </li>
                                <li><a href="www.eternastar.io">Mentions l??gales</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;