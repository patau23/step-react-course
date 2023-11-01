function Post({ value, deletePost }) {
  return (
    <>
      <hr />
      <div>
        <p>{value.id}</p>
        <p>{value.title}</p>
        <p>{value.body}</p>
        <button onClick={() => deletePost(value.id)}>Удалить</button>
      </div>
      <hr />
    </>
  );
}

export default Post;

