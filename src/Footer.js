import { useState } from "react";

const Footer = ({ setScreen }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    setIsValid(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(value));
  };

  const onClick = () => {
    setIsTouched(true);
    if (isValid) {
      setScreen("success");
    }
  };

  return (
    <div className="email-form">
      <div className="label-data">
        <label htmlFor="email-input">Email address</label>
        {!isValid && isTouched && (
          <div className="error-message">Valid email requared</div>
        )}
      </div>
      <input
        type="email"
        value={value}
        onChange={onChange}
        className={
          !isValid && isTouched
            ? "email-input email-input-invalid"
            : "email-input"
        }
        placeholder="email@company.com"
      />

      <button onClick={onClick} type="submit" className="submit-button">
        Subscribe to monthly newsletter
      </button>
    </div>
  );
};

export default Footer;
