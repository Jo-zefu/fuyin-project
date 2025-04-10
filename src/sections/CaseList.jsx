import React from 'react'
import FrameTwo from "../components/FrameTwo";
import {caseList} from "../constants";
import FrameThree from "../components/FrameThree.jsx";

const CaseList = () => {
    return (
        <section id="case">
            {
                caseList.map((caseItem) => {
                    // change imageList to [[], ...]
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
                        <div key={caseItem.id}>
                            <div className="section-container"><FrameTwo title={caseItem.title} {...caseItem} /></div>
                            {
                                result.map((arrItem,index) =>
                                  <div className="relative py-20">
                                      <FrameThree
                                        title={caseItem.title} typeText={caseItem.successCase.typeText} caseImages={arrItem} key={index}/>
                                  </div>)}
                            </div>
                )})
            }
        </section>)
    }
    export default CaseList
