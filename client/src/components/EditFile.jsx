import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditFile(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [fileEditForm, setFileEditForm] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const edit = async (formData, id) => {
      try {
        const response = await fetch(`http://localhost:4000/file/${id}`, {
          method: "PUT",
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
    formData.append("file", fileEditForm);
    edit(formData, id);
  };

  const onChange = (e) => {
    setFileEditForm(e.target.files[0]);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={onSubmit}>
        <div>
          <label htmlFor="file">Choose a file</label>
          <input type="file" id="file" name="myFile" onChange={onChange} />
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

export default EditFile;
