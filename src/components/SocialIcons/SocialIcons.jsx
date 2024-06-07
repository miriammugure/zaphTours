import React from "react";
import "./SocialIcons.css";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialIcons = ({
  twitterUrl,
  fbUrl,
  gitHubUrl,
  linkedInUrl,
  instaUrl,
}) => {
  return (
    <div className="IconBox">
      {twitterUrl && (
        <Link to={twitterUrl}>
          <FaTwitter />
        </Link>
      )}

      {gitHubUrl && (
        <Link to={gitHubUrl}>
          <FaGithub />
        </Link>
      )}

      {instaUrl && (
        <Link to={instaUrl}>
          <FaInstagram />
        </Link>
      )}

      {fbUrl && (
        <Link to={fbUrl}>
          <FaFacebook />
        </Link>
      )}

      {linkedInUrl && (
        <Link to={linkedInUrl}>
          <FaLinkedin />
        </Link>
      )}
    </div>
  );
};

export default SocialIcons;
