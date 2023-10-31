import Post from "./Post.jsx";

function PostList({ posts }) {
  return (
    <>
      {posts.map((post, index) => {
        return <Post value={post} key={index}></Post>;
      })}
    </>
  );
}
export default PostList;
