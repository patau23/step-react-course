import Post from "./Post.jsx";

function PostList({ posts, deletePost }) {
  return (
    <>
      {posts.map((post, index) => {
        return <Post value={post} deletePost={deletePost} key={index}></Post>;
      })}
    </>
  );
}
export default PostList;
