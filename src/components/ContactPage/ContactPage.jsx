import React from "react";
import { PhoneOutlined, MailOutlined, ShopOutlined } from "@ant-design/icons";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact page</h1>
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
      <div className="shop">
        <ShopOutlined />
        <h4>Guldbergsgade 29N, København</h4>
      </div>
      <div className="disclaimer">
        <p>
          The information contained in this website is for general information
          purposes only. The information is provided by Feline Emporium and
          while we endeavor to keep the information up to date and correct, we
          make no representations or warranties of any kind, express or implied,
          about the completeness, accuracy, reliability, suitability or
          availability with respect to the website or the information, products,
          services, or related graphics contained on the website for any
          purpose. Any reliance you place on such information is therefore
          strictly at your own risk.
          <br />
          <br />
          In no event will we be liable for any loss or damage including without
          limitation, indirect or consequential loss or damage, or any loss or
          damage whatsoever arising from loss of data or profits arising out of,
          or in connection with, the use of this website.
          <br />
          <br />
          Through this website you are able to link to other websites which are
          not under the control of Feline Emporium. We have no control over the
          nature, content and availability of those sites. The inclusion of any
          links does not necessarily imply a recommendation or endorse the views
          expressed within them.
          <br />
          <br />
          Every effort is made to keep the website up and running smoothly.
          However, Feline Emporium takes no responsibility for, and will not be
          liable for, the website being temporarily unavailable due to technical
          issues beyond our control.
          <br />
          <br />
          All rights reserved. No part of this website may be reproduced,
          distributed, or transmitted in any form or by any means, including
          photocopying, recording, or other electronic or mechanical methods,
          without the prior written permission of the website owner, except in
          the case of brief quotations embodied in critical reviews and certain
          other noncommercial uses permitted by copyright law. For permission
          requests, please contact the website owner.
        </p>
      </div>
      <div className="footer">
        Created, Maintained and Managed by Feline Emporium Co.
      </div>
    </div>
  );
};

export default ContactPage;
