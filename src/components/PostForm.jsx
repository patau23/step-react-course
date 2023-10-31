function PostForm({ inputTitle, inputBody, createPost, setParentState }) {
  return (
    <div className="post-form">
      <input
        type="text"
        placeholder={"Название"}
        value={inputTitle}
        onChange={(e) =>
          setParentState((prev) => ({ ...prev, inputTitle: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder={"Описание"}
        value={inputBody}
        onChange={(e) =>
          setParentState((prev) => ({ ...prev, inputBody: e.target.value }))
        }
      />
      <button onClick={createPost}>Создать</button>
    </div>
  );
}

export default PostForm;
