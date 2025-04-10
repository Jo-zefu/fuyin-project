import React from 'react'

const Footer = () => {
  return (
    <div className="footer bg-secondary">
      <div className="flex flex-col">
        <div className="w-full flex max-sm:flex-col justify-end max-sm:gap-2 gap-10 py-5">
          <div className="flex items-center"><img src="/image/location.png" alt="location" className="w-8 h-8 max-sm:w-6 max-sm:h-6" /><p className="max-sm:text-sm">4031 S ELLESFORD AVE,WEST COVINA,CA 91793</p></div>
          <div className="flex items-center"><img src="/image/at.png" alt="at" className="w-8 h-8 max-sm:w-6 max-sm:h-6" /><p className="max-sm:text-sm">ltstsp@hotmail.com</p></div>
          {/*<div className=" flex flex-1 flex-col gap-5">*/}
          {/*  <div className="footer-title">FUYIN Marketing, Inc.</div>*/}
          {/*  <p className="footer-p">Creating TikTok Shop category Top 1 brands and customize the best influencer shor*/}
          {/*    video & live streaming*/}
          {/*    marketing strategies</p>*/}
          {/*</div>*/}
          {/*<div className=" flex flex-1 flex-col gap-6">*/}
          {/*  <div className="footer-title">Company Profile</div>*/}
          {/*  <div className="flex flex-col gap-2 footer-p">*/}
          {/*    <a href="/about" className="nav-li_a">About Us</a>*/}
          {/*    <a className="nav-li_a">Contact</a>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="flex flex-1 flex-col gap-6">*/}
          {/*  <div className="footer-title">Contact Us</div>*/}
          {/*  <div className="flex flex-col gap-2 footer-p">*/}
          {/*    <p><span>Email: </span>ltstsp@hotmail.com</p>*/}
          {/*    <p><span>Phone: </span>+1 XX-XXX-XXX</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="w-full h-0 border-b-1 border-gray-300 rounded-2xl my-8 max-sm:my-3"></div>
      </div>


      <p className="flex items-center justify-center max-sm:text-sm">© 2024 FUYIN Marketing, Inc. All rights reserved.</p>
    </div>
  )
}
export default Footer
