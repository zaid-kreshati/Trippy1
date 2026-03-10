import "./FooterCol.css";

const FooterCol = () => {
  const footerLinks = [
    {
      title: "Project",
      links: [
        { label: "Changelog", url: "/" },
        { label: "Status", url: "/" },
        { label: "License", url: "/" },
        { label: "All Versions", url: "/" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "GitHub", url: "/" },
        { label: "Issues", url: "/" },
        { label: "Project", url: "/" },
        { label: "Twitter", url: "/" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Support", url: "/" },
        { label: "Troublesshooting", url: "/" },
        { label: "Contact Us", url: "/" },
      ],
    },
    {
      title: "Others",
      links: [
        { label: "Terms Of Service", url: "/" },
        { label: "Privacy Policy", url: "/" },
        { label: "License", url: "/" },
      ],
    },
  ];

  return (
    <div className="bottom">
      {footerLinks.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>

          {item.links.map((link, index2) => (
            <div key={index2}>
                <p >{link.label}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterCol;
