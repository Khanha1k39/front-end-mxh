import Image from "react-bootstrap/Image";
import image from "./image.png"; // gives image path

function ImagePost() {
  return <Image src={image} alt="image" rounded fluid></Image>;
}

export default ImagePost;
