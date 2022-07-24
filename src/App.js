import React, { useState, useRef } from "react";
import fullLogo from "./assets/imgs/logo-full.png";
import smallLogo from "./assets/imgs/logo-alone.png";
import profile from "./assets/imgs/profile.png"
import click_through_rate from './assets/imgs/click-through-rate.png'
import how_it_work1 from './assets/imgs/how-it-work-1.png'
import how_it_work2 from './assets/imgs/how-it-work-2.png'
import how_it_work3 from './assets/imgs/how-it-work-3.png'
import how_it_work4 from './assets/imgs/how-it-work-4.png'
import power_up_1 from './assets/imgs/power-up-1.png'
import power_up_2 from './assets/imgs/power-up-2.png'
import power_up_3 from './assets/imgs/power-up-3.png'
import facebook_logo from './assets/imgs/facebook-logo.png'
import twitter_logo from './assets/imgs/twitter-logo.png'
import instagram_logo from './assets/imgs/instagram-logo.png'
import youtube_logo from './assets/imgs/youtube-logo.png'

function App() {

  const myRef = useRef(null);
  const [isToggle, setIstoggle] = useState(false)


  const handleHemberger = (e) => {
    e.preventDefault()

    if (myRef.current.style.display === "block") {
      setIstoggle(false)
      myRef.current.style.display = "none";
    } else {
      setIstoggle(true)
      myRef.current.style.display = "block";
      myRef.current.style.position = "absolute";
      myRef.current.style.top = "50px";
      myRef.current.style.left = 0;
      myRef.current.style.flexDirection = "column";
      myRef.current.style.width = "100%";
      myRef.current.style.justifyContent = "center";
      myRef.current.style.alignItems = "center";
      myRef.current.style.color = "#000";
      myRef.current.style.backgroundColor = "#efefef";
      myRef.current.style.cursor = "pointer";
      myRef.current.style.boxShadow = "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px";
    }
  }

  return <>

    <div className="Header">
      <div className="Header-logo">
        <img src={fullLogo} alt="logo_full" />
      </div>

      <div className="Navigation-Link">
        <a href="Explore-product">Explore product</a>
        <a href="Product-design">Product design</a>
        <a href="Pricing">Pricing</a>
      </div>

      <div className="UserMenu">
        <span onClick={() => alert('logout')} >Logout</span>
        <span>  <img src={profile} alt="profile" /></span>
        <span> <i className="fa fa-angle-down" /></span>
      </div>

      <div ref={myRef} className="subMenu">
        <div><a href="Explore-product">Explore product</a></div>
        <div><a href="Product-design">Product design</a></div>
        <div><a href="Pricing">Pricing</a></div>
        <div><a href="logout" onClick={() => alert('logout')}>Logout</a></div>
      </div>
      <a onClick={(e) => handleHemberger(e)} className="menuToggle" href="menuToggle"><i className="fa fa-bars" /></a>

    </div>

    <div className="Content" style={{ top: isToggle && "120px" }}>
      <div className="Content1">
        <div className="Content1-detail">
          <div className="Conent1-Title">
            <h1>Higher click-through rates for your product</h1>
            <p>Don't stop tracking your product and better analyze your customers just too easy steps.</p>
          </div>
          <div className="Conent1-img"><img src={click_through_rate} alt="click_through_rate" /></div>
        </div>
      </div>

      <div className="Content2">

        <div className="Content2-title">
          <h1>How BetterGoods works?</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores incidunt consequatur sequi maxime ea. Placeat, aliquam odio in molestias, aliquid autem maiores delectus tempora fugiat, omnis laborum velit neque.</span>
        </div>
        <div className="Content2-detail">
          <div className="Content2-detail-container"><img src={how_it_work1} alt="how_it_work1" /> <b>1.Lorem ipsum dolor</b><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
          <div className="Content2-detail-container"><img src={how_it_work2} alt="how_it_work2" /> <b>2.Ordee lorem ipsum</b><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
          <div className="Content2-detail-container"><img src={how_it_work3} alt="how_it_work3" /> <b>3.Yopus orem ipsum oder</b><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
          <div className="Content2-detail-container"><img src={how_it_work4} alt="how_it_work4" /> <b>4.Momu ipsum lorem</b><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
        </div>
      </div>

      <div className="Content3">

        <div className="Content3-text-over-container">
          <div className="Content3-img"><img src={power_up_1} alt="power_up_1" /></div>
          <div className="Content3-text-over-img-title">
            <h1>Power-up your performance</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vel voluptatum cumque laudantium praesentium ab necessitatibus fugit ipsum nihil aliquam vitae enim quos odit officia quidem! Delectus cumque reprehenderit atque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vel voluptatum cumque laudantium praesentium ab necessitatibus fugit ipsum nihil aliquam vitae enim quos odit officia quidem! Delectus cumque reprehenderit atque.</p>
          </div>
        </div>

        <div className="Content3-detail-container">
          <div className="Content3-detail-img">
            <img src={power_up_2} alt="power_up_2" />
            <h2>Yopus orem ipsum oder</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, commodi aut! Beatae illo quasi ab distinctio ut quis eum corrupti!</p>
          </div>

          <div className="Content3-detail-img">
            <img src={power_up_3} alt="power_up_3" />
            <h2>Odee lorem ipsum</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, commodi aut! Beatae illo quasi ab distinctio ut quis eum corrupti!</p>
          </div>
        </div>

      </div>
    </div>

    <div className="Footer">
      <div className="Footer-logo"><img src={smallLogo} alt="" /></div>
      <div className="Navigation-Link-Footer">
        <a href="Explore-product">Ornare</a>
        <a href="Product-design">Accumsan</a>
        <a href="Pricing">Mattis</a>
      </div>

      <div className="Footer-contract">
        <a href="facebook-logo"><img src={facebook_logo} alt="facebook-logo" /></a>
        <a href="twitter-logo"><img src={twitter_logo} alt="twitter-logo" /></a>
        <a href="instagram-logo"><img src={instagram_logo} alt="instagram-logo" /></a>
        <a href="youtube-logo"><img src={youtube_logo} alt="instagram-logo" /></a>
      </div>
    </div>
  </>
}

export default App;
