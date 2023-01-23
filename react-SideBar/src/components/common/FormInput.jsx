import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, onPaste, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-input-container">
      <label className="form-input-label">{label}</label>
      <input className="form-input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onPaste={onPaste}
      />
      <span className="span-form-input">{errorMessage}</span>
    </div>
  );
};

export default FormInput;