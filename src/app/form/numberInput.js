// NumberInput.js
import React from 'react';
import './formStyles.css';


const NumberInput = ({ value, onChange }) => {
    const handleNumberClick = (num) => {
        onChange(num);
    };

    return (
        <div className="number-input">
            {[1, 2, 3, 4, 5].map((num) => (
                <div
                    key={num}
                    className={num <= value ? 'bubble active' : 'bubble'}
                    onClick={() => handleNumberClick(num)}
                ></div>
            ))}
        </div>
    );
};

export default NumberInput;
