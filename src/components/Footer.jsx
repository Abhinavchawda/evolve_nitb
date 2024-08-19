import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-head">
          <h3>
            "Innovation is the unrelenting drive to break the status quo and
            develop a new where few have dared to go"
          </h3>
        </div>
        <div className="footer-content">
          <div className="footer-left">
            <div className="contact-us">
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot" /> Maulana Azad
                  National Institute of technology Bhopal , 462003 (M.P.)
                </li>
                <li>
                  <i className="fa-solid fa-phone"> </i> Yash Kumar Atlani +91
                  83493 49409
                </li>
                <li>
                  <i className="fa-regular fa-envelope" /> teamevolve@gmail.com
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <button className="dev-button">Meet the developers</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <form>
              <input type="text" placeholder="Full Name" required="" />
              <input type="email" placeholder="Email-Id" required="" />
              <input
                type="email"
                placeholder="Your Message"
                className="message"
                required=""
              />
              <button className="form-button" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="footer-copyright" />
      </div>
    </>
  );
}

export default Footer;