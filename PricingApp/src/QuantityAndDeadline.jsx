import React, { useState } from 'react';

// QuantityAndDeadline component
function QuantityAndDeadline() {
  // State for quantity type (pages/words), user-entered quantity, calculated quantity, and deadline
  const [quantityType, setQuantityType] = useState('pages');
  const [quantityInputValue, setQuantityInputValue] = useState(''); // User-entered value
  const [quantity, setQuantity] = useState(1); // Actual quantity calculated from type and input
  const [deadline, setDeadline] = useState(new Date()); // Default to today's date

  // Function to update quantity, ensuring it stays within a certain range
  const updateQuantity = (newQuantity) => {
    setQuantity(Math.max(1, Math.min(100, newQuantity)));
  };

  // Handler for changing quantity type
  const handleQuantityTypeChange = (newQuantityType) => {
    setQuantityType(newQuantityType);

    // Update quantity state based on current type and input before conversion
    if (quantityType === 'pages') {
      updateQuantity(parseInt(quantityInputValue));
    } else {
      const newQuantity = Math.round(parseInt(quantityInputValue) / 275);
      updateQuantity(newQuantity);
    }

    // Update input and calculated quantity based on the new type
    if (newQuantityType === 'pages') {
      setQuantityInputValue(''); // Reset input for words
    } else {
      const calculatedWords = Math.round(quantity * 275); // Convert pages to words
      setQuantityInputValue(calculatedWords.toString()); // Update input with word equivalent
    }
  };

  // Handler for changing quantity input
  const handleQuantityInputChange = (event) => {
    const newQuantityInputValue = event.target.value;
    setQuantityInputValue(newQuantityInputValue);
  };

  // Handler for changing deadline
  const handleDeadlineChange = (event) => {
    setDeadline(new Date(event.target.value));
  };

  // Component JSX
  return (
    <div className="container">
      <div className="quantity-section">
        <label htmlFor="quantity-type">Quantity Type:</label>
        <select
          id="quantity-type"
          value={quantityType}
          onChange={(e) => handleQuantityTypeChange(e.target.value)}
        >
          <option value="pages">Pages</option>
          <option value="words">Words</option>
        </select>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantityInputValue}
          onChange={handleQuantityInputChange}
          min={quantityType === 'pages' ? 1 : 275}
          max={quantityType === 'pages' ? 100 : 1000}
        />
      </div>
      <div className="deadline-section">
        <label htmlFor="deadline">Deadline:</label>
        <input type="date" id="deadline" value={deadline.toISOString().slice(0, 10)} onChange={handleDeadlineChange} />
      </div>
    </div>
  );
}

export default QuantityAndDeadline;
