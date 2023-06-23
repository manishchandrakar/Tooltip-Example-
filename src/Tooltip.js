import React, { useState } from 'react';
import './Tooltip.css'; // Assuming you have a separate CSS file for styling

const Tooltip = ({ position, text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const getTooltipPosition = () => {
    switch (position) {
      case 'top':
        return { top: '-40px' };
      case 'bottom':
        return { bottom: '-40px' };
      case 'right':
        return { right: '-100px' };
      case 'left':
        return { left: '-130px' };
      default:
        return {};
    }
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isTooltipVisible && <div className={`tooltip tooltip-${position}`} style={getTooltipPosition()}>{text}</div>}
      {children}
    </div>
  );
};

export default Tooltip;
