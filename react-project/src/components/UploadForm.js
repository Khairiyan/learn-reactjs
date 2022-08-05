// TODO: answer here
import { BASE_URL, API_URL } from "../api/config";
import { useState } from "react";
import axios from "axios";

export default function UploadForm({ onSubmit }) {
  // TODO: answer here
  const [image, setImage] = useState([]);
  const [caption, setCaption] = useState("");

  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append("content", caption);
    formData.append("image", image);

    try {
      const getData = await axios.post(`${API_URL}/post/create`, formData, {
        withCredentials: true,
      });
      onSubmit(getData.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div aria-label="Upload Form">
      <form onSubmit={handleFormSubmit} action="POST">
        <input aria-label="Caption Input" type="text" name="input-caption" onChange={(e) => setCaption(e.target.value)} placeholder="caption"></input>
        <br></br>
        <input
          aria-label="Image Input"
          type="file"
          name="image"
          accept="image/png, image/jpg, image/gif"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        ></input>
        <button aria-label="Submit Button" variant="primary">
          Submit
        </button>
      </form>
    </div>
  );
}
