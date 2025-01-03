"use client";
import React from "react";
import "./footer.css";
import Image from "next/image";

function Page() {
  return (
    <div>
      <div className="footer">
        <div className="first_div">
          <h4 className="B_FIRST">BE THE FIRST TO KNOW</h4>
          <p className="first_p">Sign up for updates from mettā muse </p>
          <div className="input">
              <input
                className="first_input"
                type="text"
                placeholder="Enter your email"
              />
            <div>
              <button className="Sub_button">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <h4 className="contact_heding">CONTACT US</h4>
          <div className="contact_ul">
            <li>+44 221 133 5360</li>
            <li>customercare@mettamuse.com</li>
          </div>
          <h4 className="currency">CURRENCY</h4>
          <Image src="/Language.png" alt="Currency" width={80} height={30}/>
          <p className="curency_p">Transactions will be completed in Euros and a currency reference is available on hover</p>
        </div>
      </div>
      <div className="lower_footer">
        <div className="meta_mause">
          <h4 className="meta_heading">mettā muse</h4>
          <div className="meta_li">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </div>
        </div>
        <div className="quick_link">
          <h4 className="quick_heading">QUICK LINKS</h4>
          <div className="quick_li">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </div>
        </div>
        <div className="follow_us">
          <h4 className="follow_heading">FOLLOW US</h4>
          <Image
            width={70}
            className="instagram"
            src="/Frame1.png"
            alt="instagram"
            height={30}
          />
          <h5 className="Acceots">mettā muse Accepts</h5>
          <Image src="/Payment.png" height={25} alt="gpay" width={300} />
        </div>
      </div>
      <div className="copywrite">
        <h3 style={{color:"white"}}>Copyright © 2023 mettamuse. All rights reserved.</h3>
      </div>
    </div>
  );
}
export default Page;
