import React from 'react'
import FrameOne from "../components/FrameOne";

const Overview = () => {
    const overviewData = {
        descriptions: ["We collaborate with creators to promote shoppable shor videos for brands. 2000+ infuencers with a monthly sales of over $10,000", "A team of 20+ business development professionals. We work together with infuencers to create premium video and live streaming content,to drive brand visibility and sales."],
        statistics: [{number: '2000+', unit: 'infuencers'}, {number: '$2M+', unit: 'GMV'}, {number: '20+', unit: 'Business development'}]
    }
    return (
        <section className="c-space">
            <FrameOne title="Overview of TTS Services" semiTitle="ShorVideo & Live Streaming Marketing" {...overviewData} />
        </section>
    )
}
export default Overview
