// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import FileUpload from "./components/FileUpload";
import File from "./components/File";
import EditFile from "./components/EditFile";

import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <File /> },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forgot_password",
          element: <ForgotPassword />,
        },
        {
          path: "/reset_password",
          element: <ResetPassword />,
        },
        {
          path: "/file_upload",
          element: <FileUpload />,
        },
        {
          path: "/file_edit/:id",
          element: <EditFile />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
