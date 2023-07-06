import './Contact.css';
const Contact = () => {
  return (
    <div className="main-contact">
      <div className="contact-main-page">
    <span id="contact-title">CONTACT US</span>
      <span id="contact-info">Need a front-end developer? Look no further! Our team of skilled front-end developers is ready to bring your website to life. From responsive designs to smooth user experiences, we've got you covered. Reach out to us today and let's collaborate to create something amazing</span>
    </div>
      
      <div className="main-contact-page">
        <div className="border-contact">
        <form className="contact-form">
          <input type="text" placeholder="Your Name..." id="fullname-contact" />
          <input type="email" placeholder="Your  Email Address" id="email-contact" />
          <textarea placeholder="Your Message" id="message-contact" />
          <input type="submit" value="SEND MESSAGE" id="submit-button" />
        </form>
      
      <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.084823400982!2d151.00053487745944!3d-33.81999539396151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a320a45c27b3%3A0xfea99789313f95d9!2sUnit%2014%2F29A%20Great%20Western%20Hwy%2C%20Parramatta%20NSW%202150!5e0!3m2!1sen!2sau!4v1688555560652!5m2!1sen!2sau" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      </div>
    </div>
    
  );
};

export default Contact;