import React from "react";
import { ContactUsContainer, Text } from "./styledComponents";
import SocialIcons from "../SocialIcons";
interface ContactUsProps {
  theme: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ theme }) => (
  <ContactUsContainer>
    <Text theme={theme}>CONTACT US</Text>
    <div>
      <SocialIcons />
    </div>
    <Text theme={theme}>
      Enjoy! Now to see your channels and recommendations!
    </Text>
  </ContactUsContainer>
);

export default ContactUs;
