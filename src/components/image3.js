import React, { useRef, useState, useEffect } from "react";
import logo from "../asset/circle-arrow-up-solid.svg";
import deleteIcon from "../asset/trash-solid.svg";
import "../App.css";

const Image3 = () => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  const uploaderRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const uploadImageHandler = () => {
    uploaderRef.current.click();
  };

  const uploadImageEvent = (event) => {
    const pickedFile = event.target.files[0];
    setFile(pickedFile);
  };

  const deletePickedFile = () => {
    setFile();
  };
  return (
    <div className="upload-container">
      {file ? (
        <div className="image-container">
          <img className="uploaded-image" src={previewUrl} alt="preview" />
          <div className="delete-icon-container">
            <img
              className="delete-icon"
              src={deleteIcon}
              alt="delete-btn"
              onClick={deletePickedFile}
            />
          </div>
        </div>
      ) : (
        <div className="uploader">
          <div className="upload-btn-container" onClick={uploadImageHandler}>
            <img className="upload-btn" src={logo} alt="upload-btn" />
            <p>選擇照片上傳</p>
          </div>
          <input
            ref={uploaderRef}
            style={{ display: "none" }}
            type="file"
            id="file-1"
            name="file-1"
            accept="image/png, image/jpeg, image/jpg"
            onChange={uploadImageEvent}
          />
        </div>
      )}
      <div className="description">
        <input
          className="text-input"
          type="text"
          id="title-1"
          name="title-1"
          placeholder="新增標題"
        />
        <hr />
        <input
          className="text-input"
          type="text"
          id="note-1"
          name="note-1"
          placeholder="新增說明"
        />
        <hr />
      </div>
    </div>
  );
};

export default Image3;
