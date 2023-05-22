import "./styles.css";
import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

export default function App() {
  const [image, setImage] = useState(0);

  function nextSlide() {
    setImage(image === images.length - 1 ? 0 : image + 1);
  }

  function prevSlide() {
    setImage(image === 0 ? images.length - 1 : image - 1);
  }

  return (
    <div className="App">
      <h1 className="heads">PROJECT 1</h1>
      <h3 className="heads2">Image Slider </h3>
      <div>
        <div className="btn" onClick={prevSlide}>
          Previous
        </div>

        {images.map(
          (name, index) =>
            image === index && (
              <div key={name}>
                <img src={name} className="imgslide" alt="img" />
              </div>
            )
        )}

        <div className="btn" onClick={nextSlide}>
          {" "}
          Next{" "}
        </div>
      </div>
    </div>
  );
}
