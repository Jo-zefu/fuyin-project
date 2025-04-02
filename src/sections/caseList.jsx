import React, {Fragment} from 'react'
import FrameTwo from "../components/FrameTwo";
import {caseList} from "../constants";
import FrameThree from "../components/FrameThree.jsx";

const CaseList = () => {
    return (
        <section className="c-space" id="case">
            {
                caseList.map((caseItem,index) => {
                    const imageList = caseItem?.successCase?.images
                    const n = imageList?.length;
                    let result = [] // to [[],...]
                    let i= 0;
                    let sliceArr = []
                    while (i < n){
                        sliceArr = imageList.slice(i, i+5)
                        result.push(sliceArr)
                        i = i+5
                    }
                    return (
                        <div key={index}>
                            <FrameTwo title={caseItem.title} {...caseItem} />
                            {result.map((arrItem,index) => <FrameThree title={caseItem.title} typeText={caseItem.successCase.typeText} caseImages={arrItem} key={index}/>)}
                        </div>
                )})
            }
        </section>)
    }
    export default CaseList
