import React, { useState } from "react";

function BulkMail() {
  const [excelSheetUploadForm, setExcelSheetUploadForm] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const upload = async (formData) => {
      try {
        const response = await fetch("http://localhost:4000/bulkmail", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        alert(result.message);
        // console.log("Success", result);
      } catch (error) {
        console.log(error);
      }
    };
    const formData = new FormData();
    formData.append("excel", excelSheetUploadForm);
    upload(formData);
  };

  const onChange = (e) => {
    setExcelSheetUploadForm(e.target.files[0]);
  };

  return (
    <div>
      BulkMail
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <label htmlFor="excel">Choose a excel file</label>
        <input
          type="file"
          name="excel"
          id="excel"
          onChange={onChange}
          required
        />
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
          Send Mails
        </button>
      </form>
    </div>
  );
}

export default BulkMail;
