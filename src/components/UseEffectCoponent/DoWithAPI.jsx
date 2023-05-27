import React, { useEffect, useState } from "react";
import axios from "axios";

const DoWithAPI = () => {
  const [photos, setPhotos] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_limit=${count * 5}`
      );
      setPhotos(res.data);
    })();
  }, [count]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingRight: "20px",
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.thumbnailUrl}
            style={{ width: "30%", marginBottom: "1rem" }}
            alt=""
          />
        ))}
      </div>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>See more</button>
    </div>
  );
};

export default DoWithAPI;
