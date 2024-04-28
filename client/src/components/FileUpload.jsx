import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FileUpload() {
  const [fileUploadForm, setFileUploadForm] = useState();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const upload = async (formData) => {
      try {
        const response = await fetch("http://localhost:4000/file", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        console.log("Success:", result);
        navigate("/");
      } catch (error) {
        console.log("Error:", error);
      }
    };
    const formData = new FormData();
    formData.append("file", fileUploadForm);
    upload(formData);
  };

  const onChange = (e) => {
    setFileUploadForm(e.target.files[0]);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={onSubmit}>
        <div>
          <label htmlFor="file">Choose a file</label>
          <input
            type="file"
            id="file"
            name="myFile"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              backgroundColor: "violet",
              color: "white",
              border: "2px solid grey",
              padding: "4px",
              margin: "4px",
            }}
          >
            Send the file
          </button>
        </div>
      </form>
    </div>
  );
}

export default FileUpload;
