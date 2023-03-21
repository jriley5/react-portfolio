import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 mb-5 laptop:p-0">
        <div className="">
          {/* <h1 className="text-2xl text-bold">Contact</h1> */}
          <div className="mt-10" >
            {/* <h1 className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl text-bold mb-5">
              Let&apos;s work!
            </h1> */}

            <div style={{"display":"flex"}}>
            <Socials className="mt-5 mb-24 mr-5"/>
            <p className="mt-6 ml-2">jackbriley@me.com</p>
            </div>

          </div>
        </div>
      </div>
      {/* <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
      </h1> */}
    </>
  );
};

export default Footer;
