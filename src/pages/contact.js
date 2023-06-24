import "../styles/contact.css";
import instaImg from "../assets/insta.svg";
import facebookImg from "../assets/facebook.svg";
import twitterImg from "../assets/twitter.svg";

const Contact = () => {
  return (
    <div className="contactMain">
      <div className="contactBox">
        <h2>Reach us at</h2>
        <div className="contactList">
          <div className="contactItem">
            <h3>support@kicksup.com</h3>
            <p>for any technical support</p>
          </div>
          <div className="contactItem">
            <h3>info@kicksup.com</h3>
            <p>for more information</p>
          </div>
          <div className="contactItem">
            <h3>feedback@kicksup.com</h3>
            <p>to send your feedback</p>
          </div>
          <div className="contactItem">
            <h3>jobs@kicksup.com</h3>
            <p>to work with us</p>
          </div>
        </div>
      </div>

      <div className="contactSocial">
        <p>stay in touch</p>
        <div>
          <img src={twitterImg} alt="Twitter" />
          <img src={instaImg} alt="Instagram" />
          <img src={facebookImg} alt="Facebook" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
