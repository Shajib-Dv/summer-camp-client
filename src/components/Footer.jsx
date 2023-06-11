/** @format */

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-gradient-to-tr from-[#c3f02dba]  text-base-content rounded">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Featured Camp</a>
          <a className="link link-hover">Camping</a>
          <a className="link link-hover">Contact us</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <FaFacebook className="text-3xl hover:text-[#8C9333] hover:scale-105" />
            <FaYoutube className="text-3xl hover:text-[#8C9333] hover:scale-105" />
            <FaTwitter className="text-3xl hover:text-[#8C9333] hover:scale-105" />
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Hero-Sports</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
