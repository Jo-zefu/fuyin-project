/**
 * Case images Frame
 */
import React, {Fragment} from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component";


const FrameThree = ({title, ...props}) => {
    return (
      <Fragment>
          <div className="flex flex-col justify-center w-full">
              <div className="flex justify-between items-end">
                <div className="flex justify-between items-end w-full">
                  <div className="head-text">{title}</div>
                </div>
                <div className="flex items-center gap-1">
                      <div>{props.apptitle}</div>
                      <div>{props.casesText}</div>
                  </div>
              </div>
              <div className={"flex flex-1/5 flex-nowrap justify-between items-center w-full gap-2 mt-10"}>
                  {props.caseImages.map((caseImage, index) => <div key={index} className="flex-1 hover:scale-[1.02]">
                    <img src={caseImage}
                         alt={`case${caseImage}`}
                         loading="lazy"
                         decoding="async"
                         data-nimg="1"
                         className="w-full rounded-md" />
                  </div>)}
              </div>
          </div>
          <div className="line inline-block my-30"/>
      </Fragment>
    )
}
export default FrameThree
