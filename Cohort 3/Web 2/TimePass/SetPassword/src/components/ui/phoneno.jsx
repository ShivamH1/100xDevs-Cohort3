import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import { TextField, Button } from "@mui/material";

function PhoneNumberInputForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Phone Number:", phoneNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MuiTelInput
        value={phoneNumber}
        onChange={handleChange}
        label="Phone Number"
        fullWidth
        required
      />
    </form>
  );
}

export default PhoneNumberInputForm;
