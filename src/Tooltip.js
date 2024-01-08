import React from 'react';

const Tooltip = (props) => {
  // Function to determine the class name based on the position prop
  const classn = () => {
    return `${props.position}`;
  };

  return (
    // Rendering the tooltip with the determined class name and position
    <div className={`${classn()}`}>
      thanks for hovering "{props.position}" position!
    </div>
  );
};

export default Tooltip;
