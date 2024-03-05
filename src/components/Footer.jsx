import { pageLinks } from "../data";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((social) => (
          <SocialLink key={social.id} itemClass="footer-icon" {...social} />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
