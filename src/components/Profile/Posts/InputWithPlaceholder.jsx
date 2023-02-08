import React, { useState } from 'react';
import s from './Posts.module.css'

const InputWithPlaceholder = () => {
  const [value, setValue] = useState("Start typing");

  const handleFocus = () => {
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input className={s.input} type="text" value={value} onFocus={handleFocus} onChange={handleChange} />
  );
};

export default InputWithPlaceholder;