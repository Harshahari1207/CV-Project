import React, { useState } from "react";
import img from "../img/my1.jpg";

const ProfileImg = () => {
  const [image, setImage] = useState(img);
  const [edit, setEdit] = useState(false);

  const changeImageUrl = () => {
    console.log("Image Clicked");
    setEdit(true);
  };
  const changeImage = () => {
    const newUrl = document.getElementById("url").value;
    setImage(newUrl);
    setEdit(false);
  };
  const closeForm = () => {
    setEdit(false);
  };

  return (
    <div>
      <img onClick={changeImageUrl} src={image} alt="profile" />
      {edit && (
        <div className="profileImageForm">
          <form>
            <label htmlFor="url">URL</label>
            <input type="text" id="url" />
            <div className="formButtons">
              <button
                id="profileImgFormButton"
                type="button"
                onClick={changeImage}
              >
                Upload
              </button>
              <button
                id="closeButtonProfileImgFormButton"
                type="button"
                onClick={closeForm}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileImg;
