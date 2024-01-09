import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import QuantityAndDeadline from './QuantityAndDeadline';
import PaperTypeDropdown from './PaperTypeDropdown';

// Pricing data configuration
const pricingData = {
  basePricePerPage: 10,
  basePricePerWord: 0.05,
  priceModifiers: {
    academicWriting: 1.2,
    editingProofreading: 0.8,
    calculations: 1.5,
    highSchool: 0.9,
    undergraduate: 1.1,
    bachelor: 1.3,
    professional: 1.6,
  },
};

// ButtonGroup component
function ButtonGroup() {
  // State variables
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [selectedAcademicLevel, setSelectedAcademicLevel] = useState(null);
  const [selected, setSelected] = useState("");
  const [price, setPrice] = useState(0);

  // Handle button click event
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);

    // Map button index to service type and academic level
    if (buttonIndex < 3) {
      setSelectedServiceType(buttonIndex);
      setSelectedAcademicLevel(null);
    } else {
      setSelectedServiceType(null);
      setSelectedAcademicLevel(buttonIndex - 3);
    }

    calculatePrice(); // Recalculate the price on button click
  };

  // Calculate the total price based on selected options
  const calculatePrice = () => {
    const { basePricePerPage, basePricePerWord, priceModifiers } = pricingData;
  
    // Determine the base price based on quantity type
    const basePrice = quantityType === 'pages' ? basePricePerPage : basePricePerWord;
  
    // Get the modifiers for service type and academic level
    const serviceModifier = selectedServiceType ? priceModifiers[selectedServiceType] : 1;
    const academicModifier = selectedAcademicLevel ? priceModifiers[selectedAcademicLevel + 3] : 1;
  
    // Ensure that quantity is a valid number
    const quantityValue = parseInt(quantityInputValue) || 1;
  
    // Calculate the total price
    const total = basePrice * serviceModifier * academicModifier * quantityValue;
    setPrice(total);
  };

  return (
    <div className='main'>
      {/* Button groups for different options */}
      <div className="button-group">
        <button
          className={`selectable-button ${selectedButton === 0 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(0)}
        >
          Academic Writing
        </button>
        <button
          className={`selectable-button ${selectedButton === 1 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          Editing and Proofreading
        </button>
        <button
          className={`selectable-button ${selectedButton === 2 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          Calculations
        </button>
      </div>
      <div className="button-group">
        <button
          className={`selectable-button ${selectedButton === 3 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(3)}
        >
          High School
        </button>
        <button
          className={`selectable-button ${selectedButton === 4 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(4)}
        >
          Undergraduate
        </button>
        <button
          className={`selectable-button ${selectedButton === 5 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(5)}
        >
          Bachelor
        </button>
        <button
          className={`selectable-button ${selectedButton === 6 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(6)}
        >
          Professional
        </button>
      </div>

      {/* Dropdown for selecting paper type */}
      <PaperTypeDropdown selected={selected} setSelected={setSelected} />

      {/* Quantity and Deadline component */}
      <div>
        <QuantityAndDeadline />
      </div>

      {/* Price and Order section */}
      <div className='priceAndOrder'>
        {/* Display the total price */}
        <div className="price-section">
          <label htmlFor="price">Total Price:</label>
          <span id="price">{price.toFixed(2)}</span>
        </div>

        {/* Proceed to Order button */}
        <div className="proceed-button-container">
          <button className="proceed-button">Proceed to Order</button>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
