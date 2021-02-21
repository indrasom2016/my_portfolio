import React from "react";
import "./footer.styles.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="txt py-2 text-center footer-style">© Indrasom Majumdar {new Date().getFullYear()} || Kolkata - WB - India</div>
    </div>
  );
};

export default FooterPanel;