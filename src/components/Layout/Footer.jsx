import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-info col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Somewhere over the rainbow</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+12 345 678 900</a>
            </div>
            <div className="d-flex">
              <p>natalieorlowska01@gmail.com</p>
            </div>
          </div>
          <div className="footer-info col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav white-link">Home</a>
                <br />
                <a className="footer-nav white-link">About me</a>
                <br />
                <a className="footer-nav white-link">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav white-link">Experience</a>
                <br />
                <a className="footer-nav white-link">Portfolio</a>
                <br />
                <a className="footer-nav white-link">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-info col-lg-5 col-md-5 col-sm-12 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
               url={"https://www.youtube.com/"}
                quote={"Frontend Developer"}
                hashtag="#react"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
               url={"https://www.youtube.com/"}
                quote={"Frontend Developer"}
                hashtag="#react"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.youtube.com/"}
                quote={"Frontend Developer"}
                hashtag="#react"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/"}
                quote={"Frontend Developer"}
                hashtag="#react"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Natalia O. | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
