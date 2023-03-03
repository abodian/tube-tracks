import React, { useState } from 'react';

function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      props.onCheckboxChange(!isChecked);
    };
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {props.label}
        </label>
      </div>
    );
  }

export default Checkbox;