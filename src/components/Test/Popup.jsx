import "./Popup.css";
import React from "react";

class Popup extends React.Component {
  render() {
    const { isOpen, onClose, children } = this.props;

    if (!isOpen) return null;

    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>×</button>
          {children}
        </div>
      </div>
    );
  }
}

export default Popup;
