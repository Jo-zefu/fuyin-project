/**
 * About/OverView Frame
 */
import React, {Fragment} from 'react'

const FrameOne = ({title,semiTitle, ...props}) => {
    return (
        <Fragment>
            <p className="head-text">{title}</p>
            <div className="my-20 mb-10">
                <p className="head-semi-text">{semiTitle}</p>
            </div>
            <div className="line"/>
            <div className='flex flex-nowrap gap-2 w-full'>
                <div className="bg-secondary desc-text p-5 py-10 flex w-2/3 flex-col gap-5 min-h-[400px]">
                    {props?.descriptions?.map((description, index) => (<p key={index}>{description}</p>))}
                </div>
                <div className="p-5 px-10 flex flex-col gap-3 justify-start items-start w-1/2">
                    {
                        props.statistics.map((statistic, index) => (
                            <div className="flex flex-col w-full" key={index}>
                                <div className="flex justify-between items-end gap-2 ">
                                    <div className="text-6xl font-bhnschrift text-primary tracking-tight">{statistic.number}</div>
                                    <div className="desc-text text-md text-right">{statistic.unit}</div>
                                </div>
                                <div className="line"/>
                            </div>
                        ))
                    }
                </div>
            </div>
          <div className="line inline-block my-30"/>
        </Fragment>
    )
}
export default FrameOne
