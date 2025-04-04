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
                  <div className="flex items-center justify-center gap-5 text-sm w-[350px]">
                    <div className="flex-1 text-gray text-right">{props.typeText}</div>
                    <div className="flex-1 line w-[50px]" />
                    <div className="flex-2 text-gray">"Explosive video cases"</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                      <div>{props.apptitle}</div>
                      <div>{props.casesText}</div>
                  </div>
              </div>
              <div className={"flex flex-1/5 flex-nowrap justify-between items-center w-full gap-2 mt-10"}>
                  {props.caseImages.map((caseImage, index) => <div key={index} className="flex-1">
                    <LazyLoadImage
                      src={caseImage}
                      alt={`case${caseImage}`}
                      className="w-full rounded-md"
                    />
                  </div>)}
              </div>
          </div>
          <div className="line inline-block my-30"/>
      </Fragment>
    )
}
export default FrameThree
