import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{
            margin: "5px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
