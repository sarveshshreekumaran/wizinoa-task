import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function File() {
  const [files, setFiles] = useState();
  const [loading, setLoading] = useState(true);
  const port =
    process.env.REACT_APP_PRODUCTION_PORT || process.env.REACT_APP_DEV_PORT;
  useEffect(() => {
    async function getFiles() {
      const response = await fetch(`${port}/file`);
      const files = await response.json();
      // console.log(files);
      return files;
    }
    getFiles().then((data) => {
      setFiles(data);
      setLoading(false);
    });
  }, []);

  const onClick = (id) => {
    async function deleteFile(id) {
      const response = await fetch(`${port}/file/${id}`, {
        method: "delete",
      });
      const deletedFile = await response.json();
      return deletedFile;
    }
    deleteFile(id).then((data) => {
      // console.log(data);
      alert(data.message);
      const filteredFiles = files.filter((file) => file._id !== id);
      setFiles(filteredFiles);
    });
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        files.map((file, index) => {
          return (
            <main key={index}>
              <section>
                <h1>{file.name}</h1>
                <img
                  src={file.fileURL}
                  alt={file.name}
                  width={"300px"}
                  height={"100px"}
                />
              </section>
              <section>
                <Link to={`/file_edit/${file._id}`}>
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "2px solid yellow",
                      padding: "4px",
                      margin: "0 4px",
                    }}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => onClick(file._id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "2px solid grey",
                    padding: "4px",
                    margin: "0 4px",
                  }}
                >
                  Delete
                </button>
              </section>
            </main>
          );
        })
      )}
    </div>
  );
}

export default File;
