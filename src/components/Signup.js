import { useState } from 'react';
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const Signup = () => {
  const [signupState, setSignupState] = useState({});

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
  };

  const handleInputFocus = (e) => {
    e.target.classList.add('input-field');
  };

  const handleInputBlur = (e) => {
    e.target.classList.remove('input-field');
  };

  if (!signupFields || signupFields.length === 0) {
    // Handle the case when signupFields is undefined or empty
    return <div>No signup fields available</div>;
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {signupFields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
};

export default Signup;
