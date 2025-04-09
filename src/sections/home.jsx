import React from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component";
import tiktokImage from '/image/tiktok.png'
import Button from "../components/Button.js";

const Home = () => {
    return (
      <section className="relative flex items-start justify-center c-space p-20 pt-15 my-30 h-[600px] overflow-hidden" id="home">
        <div className="flex flex-col justify-start items-center gap-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-center">Only for Building Category TOP1</h2>
          <p className="text-xl md:text-2xl max-w-3xl text-center">We only collaborate with brands that have the potential to become category leaders. Our sole focus is on creator-driven content marketing.
            If you're aiming to be the #1 brand in your category, let's connect!</p>
          <img src={`${tiktokImage}`} alt={"tiktok image"} className="w-[130px] h-[36px]" />
          <p className="text-center">If you want to be TOP1 in your category</p>
          <Button text={"Contact Us"} customerClass={"!py-3 !w-48"} />
        </div>
        <div className="absolute h-[78%] overflow-hidden -bottom-1 right-10 -z-1">
          <LazyLoadImage
            src={"/image/home-bg.png"}
            alt="bgImage"
            className="w-full h-full"
          />
        </div>
        <div className="line inline-block absolute bottom-0 left-0 w-[90%]"/>
      </section>
    )
}
export default Home
