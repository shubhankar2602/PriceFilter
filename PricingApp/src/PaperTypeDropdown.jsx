import React, { useState } from 'react';
import './App.css'; // Import your CSS file

// PaperTypeDropdown component
function PaperTypeDropdown({ selected, setSelected }) {
  // State to manage dropdown visibility
  const [isActive, setIsActive] = useState(false);

  // Array of dropdown options
  const options = ["Research paper", "Research proposal", "Speech", "Thesis", "Thesis proposal", "Thesis Statement"];

  // Component JSX
  return (
    <div className='dropdown' >

      {/* Dropdown button */}
      <div className="dropdown-btn" onClick={() => { setIsActive(!isActive); }}>
        {selected ? selected : "Choose One"}
        <div>▼</div>
      </div>

      {/* Dropdown content */}
      {isActive && <div className="dropdown-content">
        {/* Mapping through options to display dropdown items */}
        {options.map(option => (
          <div key={option} className="dropdown-item" onClick={(e) => { setSelected(option); setIsActive(false); }}>
            {option}
          </div>
        ))}
      </div>}
    </div>
  );
}

export default PaperTypeDropdown;
