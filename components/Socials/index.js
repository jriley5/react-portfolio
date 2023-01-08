import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

import InstaIcon from './/insta.svg'


const Socials = ({ className }) => {

  // let socialsIcons = {
  //   "Instagram" : {InstaIcon},
  //   "LinkedIn" : {LinkedInIcon}
  // }

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <a href="https://instagram.com/jackrileey" target="_blank"  rel="noreferrer" className="fa fa-instagram fa-2x"></a>
      <a href="https://www.linkedin.com/in/jack-riley-aa2ba3178/"  target="_blank"  rel="noreferrer" className="fa fa-linkedin fa-2x"></a>

      {/* {yourData.socials.map((social, index) => (
        <div>
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
          
        </Button>
        <img src={InstaIcon} alt="image" />
        </div>
        
      ))} */}
    </div>
  );
};

export default Socials;
