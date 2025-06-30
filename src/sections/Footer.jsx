import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-secondary">
      <div className="flex flex-col">
        <div className="w-full flex max-sm:flex-col justify-end max-sm:gap-2 gap-10 py-5">
          <div className="flex items-center">
            <img
              src="/image/location.png"
              alt="location"
              className="w-8 h-8 max-sm:w-6 max-sm:h-6"
            />
            <p className="max-sm:text-sm">
              4031 S ELLESFORD AVE,WEST COVINA,CA 91793
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/image/at.png"
              alt="at"
              className="w-8 h-8 max-sm:w-6 max-sm:h-6"
            />
            <p className="max-sm:text-sm">support@fuyinmarketing.com</p>
          </div>
        </div>
        <div className="w-full h-0 border-b-1 border-gray-300 rounded-2xl my-8 max-sm:my-3"></div>
      </div>

      <p className="flex items-center justify-center max-sm:text-sm">
        © 2024 FUYIN Marketing, Inc. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
