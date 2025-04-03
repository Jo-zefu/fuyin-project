import React from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component";

const Home = () => {
    return (
      <section className="relative c-space p-20 my-30 h-[500px] overflow-hidden" id="home">
        <div className="flex flex-col justify-start items-start head-text">
          <p>THE WORLD</p>
          <p>IS RIGHT IN FRONT OF YOU</p>
        </div>
        <div className="absolute h-[80%] overflow-hidden -bottom-1 right-10 -z-1">
          <LazyLoadImage
            src={"/image/home-bg.png"}
            alt="bgImage"
            className="object-contain"
          />
        </div>
        <div className="line inline-block absolute bottom-0 left-0 w-[90%]"/>
      </section>
    )
}
export default Home
