import React from "react";
import { ContactUsContainer, Text } from "./styledComponents";
import SocialIcons from "../SocialIcons";

const ContactUs = () => (
  <ContactUsContainer>
    <Text>CONTACT US</Text>
    <div>
      <SocialIcons />
    </div>
    <Text>Enjoy! Now to see your channels and recommendations!</Text>
  </ContactUsContainer>
);

export default ContactUs;
