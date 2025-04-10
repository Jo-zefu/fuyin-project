/**
 * Case Description Frame
 */
import React, {Fragment} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import Line from "./Line.jsx";

const FrameTwo = ({title, ...props}) => {
    return (
      <Fragment>
          <h2 className="head-text max-sm:mb-10 mb-16 max-sm:px-3">{title}</h2>
          <div className="line"/>
          <div className='flex max-sm:flex-col flex-nowrap justify-center max-sm:gap-10 gap-25 w-full bg-secondary max-sm:p-10 max-sm:px-5 p-20 px-10'>
              <div
                className="md:flex-2/5 max-sm:h-[280px] h-[372px] flex justify-center items-center flex-nowrap  bg-white border-1 rounded-lg border-primary">
                  <div
                    className="bg-gray_light flex items-center justify-center w-[150px] h-[150px] border-1 border-[#efefef] rounded-md p-1 ">
                    <LazyLoadImage
                      src={props.image}
                      alt={props.imageName}
                      className="w-full"
                    />
                  </div>
              </div>
              <div className="flex flex-col flex-3/4">
                  <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-center gap-2">
                          <div className="content-text">#1 TOP Seller</div>
                          <div className="font-harmonyos_sans_sc text-xl max-sm:text-lg text-gray">{props.location}</div>
                      </div>
                      <LazyLoadImage
                        src={"/image/up_arrow.png"}
                        alt="arrow"
                        className="w-9 h-9 max-sm:w-6 max-sm:h-6"
                      />
                  </div>
                  <div
                    className="flex gap-3 justify-start items-center bg-linear-to-r from-primary-light to-primary text-white px-2 py-4 rounded-sm max-sm:my-5 max-sm:mb-3 my-10 mb-6">
                      <div className="w-0 h-5 border-l-2 border-white rounded-xl"></div>
                      <div className="text-xl max-sm:text-lg font-harmonyos_sans_sc">{props.caseText}</div>
                  </div>
                  <div className="flex flex-col">
                      <div>{props.desText}</div>
                      <div className="desc-text">{props.descs.map((desc, index) => (
                        <div key={index}>{desc}</div>
                      ))}</div>
                  </div>
              </div>
          </div>
          {props.rate && <img src={props.rate} alt="rate" className="w-full h-full object-contain mt-3" /> }
        <Line />
      </Fragment>
    )
}
export default FrameTwo
