import React, { useState } from "react";

export default function Twelfth() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      <input type="file" accept="image/*"  onChange={handleChange}/>
      {file && <img src={URL.createObjectURL(file)} alt="preview" width={460}/>}
    </div>
  );
}
