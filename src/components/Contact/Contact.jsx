import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { GoMail } from "react-icons/go";



const Contact = () => {
  return (
    <div className="contact">
    <p>contact</p>
    <h3>Hit me up! 👇</h3>
    <div className="contact_icons">
      <div className="contact_box">
      <GoMail size='5rem'/>
      <CiLinkedin size='5rem' />
      <VscGithubAlt size='5rem' />
      
      
      </div>
    </div>
    </div>
    
  )
}

export default Contact;