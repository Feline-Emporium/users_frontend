import React from "react";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div>
      <h1 className="test">Contact page</h1>
      <br />
      <h4>Feel free to get in touch with us at: </h4>
      <div className="phone">
        <PhoneOutlined />
        <h4>+45 23458765</h4>
      </div>
      <div className="email">
        <MailOutlined />
        <h4>Cat4Ever@WeLoveCats.com</h4>
      </div>
    </div>
  );
};

export default ContactPage;
