function Post({ value }) {
  return (
    <>
      <hr />
      <div>
        <p>{value.id}</p>
        <p>{value.title}</p>
        <p>{value.body}</p>
      </div>
      <hr />
    </>
  );
}

export default Post;
