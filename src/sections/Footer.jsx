import React from 'react'

const Footer = () => {
  return (
    <div className="footer bg-secondary">
      <div className="flex flex-col">
      <div className="w-full flex gap-6">
        <div className=" flex flex-1 flex-col gap-5">
          <div className="footer-title">FUYIN Marketing, Inc.</div>
          <p className="footer-p">Creating TikTok Shop category Top 1 brands and customize the best influencer shor
            video & live streaming
            marketing strategies</p>
        </div>
        <div className=" flex flex-1 flex-col gap-6">
          <div className="footer-title">Company Profile</div>
          <div className="flex flex-col gap-2 footer-p">
            <a href="/about" className="nav-li_a">About Us</a>
            <a className="nav-li_a">Contact</a>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <div className="footer-title">Contact Us</div>
          <div className="flex flex-col gap-2 footer-p">
            <p><span>Email: </span>ltstsp@hotmail.com</p>
            <p><span>Phone: </span>+1 XX-XXX-XXX</p>
          </div>
        </div>
        </div>
        <div className="w-full h-0 border-b-1 border-gray-300 rounded-2xl my-8"></div>
      </div>


      <p className="flex items-center justify-center">© 2024 FUYIN Marketing, Inc. All rights reserved.</p>
    </div>
  )
}
export default Footer
