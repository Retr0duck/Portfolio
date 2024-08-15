import React from 'react';
import emailIcon from '../assets/email-icon.svg';
import phoneIcon from '../assets/phone-icon.svg';
import whatsappIcon from '../assets/whatsapp-icon.svg';
import githubIcon from '../assets/github-142-svgrepo-com.svg';
import linkedinIcon from '../assets/link-icon.svg';
import './Contact.css';
import './config.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container-center p-5">
        <h2>Contact Information</h2>
        <hr />
        <h4>I am ready to take on any challenge and meet your requirements. If you wish to get in touch with me, I would be delighted to hear from you.</h4>
        <div className="contact-info">
          <ContactItem icon={emailIcon} text="Email" link="mailto:paatoo1909@outlook.com" />
          <ContactItem icon={phoneIcon} text="+1234567890" link="tel:+1234567890" />
          <ContactItem icon={whatsappIcon} text="WhatsApp" link="https://wa.me/1234567890" />
          <ContactItem icon={githubIcon} text="GitHub" link="https://github.com/Retr0duck" />
          <ContactItem icon={linkedinIcon} text="Linkedin" link="https://www.linkedin.com/in/patricio-villarreal-jimenez-276a412a1/" />
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, text, link }) => {
  return (
    <div className="contact-item">
      <a href={link} className="contact-link" target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="Icon" width="30" height="30" />
        <span>{text}</span>
      </a>
    </div>
  );
}

export default ContactSection;
