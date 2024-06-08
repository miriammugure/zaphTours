import React from "react";
import "./Footer.css";
import Icons from "../SocialIcons/SocialIcons";
function Footer() {
  return (
    <div>
      <div className="footer-container">
        <Icons
          twitterUrl={"twitter.com"}
          fbUrl={"facebook.com"}
          instaUrl={"instagram.com"}
        />
        <p>&copy; 2024 all rights reserved miriam mugure wachira</p>
      </div>
    </div>
  );
}

export default Footer;
