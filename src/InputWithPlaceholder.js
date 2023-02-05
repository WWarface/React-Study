import React, { useState } from 'react';

const InputWithPlaceholder = () => {
  const [value, setValue] = useState("Начните вводить");

  const handleFocus = () => {
    setValue("");
  };

  return (
    <input type="text" value={value} onFocus={handleFocus} />
  );
};

export default InputWithPlaceholder;