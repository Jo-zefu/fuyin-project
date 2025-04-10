import React from 'react'
import FrameOne from "../components/FrameOne";

const About = () => {
    const aboutUsData = {
        descriptions: ["FUYIN is a marketing agency focused on creating TikTok Shop category Top 1 brands. We customize the best influencer short video & live streaming marketing strategies for top-tier brands.", "With a top-tier content creation team.We\'ve already produced 100+ viral videos with over 100 million views.When you work with us, you\'re not just hiring a service provider,you\'re gaining a team that has the highest success rate for creating winning products."],
        statistics: [{number: '200+', unit: 'viral videos'}, {number: '200,000,000+', unit: 'views'}]
    }
    return (
        <section className="section-container" id="about">
            <FrameOne title="About Us" semiTitle="Your Success is Our Success!" {...aboutUsData} />
        </section>
    )
}
export default About
