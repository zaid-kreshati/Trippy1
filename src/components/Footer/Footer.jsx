import FooterCol from "../FooterCol/FooterCol";
import "./Footer.css";

const Footer = ({ title, subTitle, icons }) => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>

        <div className="icons">
          {icons.map((Icon, index) => (
            <div className="icon-wrapper" key={index}>
              <Icon className="social-icon" />
            </div>
          ))}
        </div>
      </div>

      <FooterCol />
    </div>
  );
};

export default Footer;
