import React, { useState } from "react";

export default function EventHandlerComponent() {
  const [result, setResult] = useState(null);

  // Function reference handler (no parameters)
  const handleSum = () => {
    const sum = 10 + 5;
    setResult(sum);
  };

  // Function with parameters (used via callback)
  const handleSumWithArgs = (a, b) => {
    const sum = a + b;
    setResult(sum);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Event Handler Example</h1>

      {/* Button using function reference */}
      <button onClick={handleSum}>Sum using function reference (10 + 5)</button>

      <br /><br />

      {/* Button using arrow function callback */}
      <button onClick={() => handleSumWithArgs(12, 18)}>
        Sum using callback function (12 + 18)
      </button>

      <br /><br />

      <h2>Result: {result !== null ? result : "Click a button"}</h2>
    </div>
  );
}
