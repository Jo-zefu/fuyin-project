/**
 * About/OverView Frame
 */
import React, {Fragment} from 'react'
import Line from "./Line.jsx";

const FrameOne = ({title,semiTitle, ...props}) => {
    return (
        <Fragment>
          <div className="flex flex-col justify-start px-3">
            <p className="head-text">{title}</p>
            <div className="my-10 mb-5">
              <p className="head-semi-text">{semiTitle}</p>
            </div>
          </div>
          <div className="line"/>
          <div className='flex max-sm:flex-col flex-nowrap gap-2 w-full'>
            <div className="bg-secondary desc-text p-5 max-sm:p-3 py-10 flex w-2/3 max-sm:w-full flex-col gap-5 md:min-h-[400px]">
                    {props?.descriptions?.map((description, index) => (<p key={index}>{description}</p>))}
                </div>
                <div className="p-5 px-0 flex flex-col gap-3 justify-start items-start md:w-1/2">
                    {
                        props.statistics.map((statistic, index) => (
                            <div className="flex flex-col w-full" key={index}>
                                <div className="flex flex-row justify-between items-end px-2 ">
                                    <div className="digital">{statistic.number}</div>
                                    <div className="desc-text text-md text-right max-sm:max-w-[120px] max-w-[180px]">{statistic.unit}</div>
                                </div>
                                <div className="line"/>
                            </div>
                        ))
                    }
                </div>
            </div>
          <Line />
        </Fragment>
    )
}
export default FrameOne
