import React from "react";
import "./style.css";
import {
  FaGithub,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul >
       
        {socialprofils.github && (
          <li style={{fontSize:"20px"}}>
            <a href={socialprofils.github} target="blank">
              <FaGithub />
            </a>
          </li>
        )}
       
        {socialprofils.linkedin && (
          <li style={{fontSize:"20px"}}>
            <a href={socialprofils.linkedin} target="blank">
              <FaLinkedin />
            </a>
          </li>
        )}
      
        {socialprofils.twitch && (
          <li style={{fontSize:"20px"}}>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
