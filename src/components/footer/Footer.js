import React from "react";
import './Footer.css';
//  import fb from "./fb.png";
//  import twitter from "./twitter.png";
//  import Linkedin from "./linkedin.png";
//  import Insta from "./insta.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padiing">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Education</h4>
            <a href="/employer">
              <p>Students</p>
            </a>
            <a href="/healthplan">
              <p>Mentors</p>
            </a>
            <a href="/individual">
              <p>Parents</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>Skills</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>E-library</h4>
            <a href="/partner">
              <p>Your courses</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Home</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            {/* { <div className="socialmedia">
              <p><img src={fb} alt=""/></p>
              <p><img src={twitter} alt=""/></p>
              <p><img src={Linkedin} alt=""/></p>
              <p><img src={Insta} alt=""/></p>
            </div> } */}
          </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              &copy;{new Date().getFullYear()} CodeInn. All rights reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;