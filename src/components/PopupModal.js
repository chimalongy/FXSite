import React, {useState} from 'react';
import "../styles/PopupModal.css"

// Set the app element for screen readers (optional)


const PopupModal = (props) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Popup Content</h2>
        <p>This is the content of the popup.</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupModal;
