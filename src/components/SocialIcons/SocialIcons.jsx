import React from "react";
import "./SocialIcons.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialIcons = ({ twitterUrl, fbUrl, instaUrl }) => {
  return (
    <div className="IconBox">
      {twitterUrl && (
        <Link to={twitterUrl}>
          <FaTwitter />
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
    </div>
  );
};

export default SocialIcons;
