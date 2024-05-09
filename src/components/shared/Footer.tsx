import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <div className="grid grid-cols-12 gap-4 pt-20 py-5">
          <div className="col-span-12 lg:col-span-4">
            <img
              className="w-[100px] rounded-md mb-4"
              src="/images/logo.png"
              alt="Organization"
            />
            <p className="font-secondary">
              Join us in making a difference—one Supplies at a time.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <h1 className="text-3xl font-primary font-bold mb-5">Office</h1>
            <p className="mb-3 font-secondary">121/1 Gulshan, Dhaka</p>
            <p className="mb-3 font-secondary">sparkofhope@gmail.com</p>
            <p className="text-lg lg:text-xl font-semibold font-secondary">
              01818 666 999
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex justify-between">
            <div className="col-span-2">
              <h1 className="text-3xl font-primary font-bold mb-5">Links</h1>
              <Link to="/">
                <p className="mb-3 font-secondary">Home</p>
              </Link>
              <Link to="/">
                <p className="mb-3 font-secondary">Contact</p>
              </Link>
              <Link to="/">
                <p className="mb-3 font-secondary">About Us</p>
              </Link>
            </div>
            <div className="flex flex-col text-start col-span-2">
              <h1 className="text-3xl font-primary font-bold mb-5">
                Get in Touch
              </h1>
              <Link to="/" className="inline-flex items-center gap-2 mb-3 ">
                <FaFacebookF className="" />
                <p className="font-secondary">Facebook</p>
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 mb-3 ">
                <FaXTwitter className="" />
                <p className="font-secondary">Twitter</p>
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 mb-3 ">
                <FaInstagram className="" />
                <p className="font-secondary">Instagram</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <Container>
        <div className="py-5 text-center">
          <p className="font-secondary">
            Community Eats © 2024 - All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
