import Post from "./PostDetail";
import Stack from "react-bootstrap/Stack";

const posts = [{}];
function Posts() {
  return (
    <>
      <Stack gap={3}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Stack>
    </>
  );
}

export default Posts;
