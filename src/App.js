import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal.jsx";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm";
import axios from "axios";

const App = () => {
  const [state, setState] = useState({
    posts: [
      { id: 1, title: "post 1 ", body: "eto post 1f" },
      { id: 2, title: "post 2 ", body: "eto post 1f" },
      { id: 3, title: "post 3 ", body: "eto post 1f" },
    ],
    loading: false,
    inputTitle: "",
    inputBody: "",
  });

  const openModal = () => {
    setState((prev) => ({
      ...prev,
      isShown: !prev.isShown,
    }));
  };

  // useEffect(async () => {
  //   await fetchApi();
  // }, []);

  // const fetchApi = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=10"
  //   );
  //   console.log(response.data);
  // };

  const createPost = () => {
    setState((prev) => ({
      ...prev,
      posts: [
        ...prev.posts,
        {
          id: Date.now(),
          title: prev.inputTitle,
          body: prev.inputBody,
        },
      ],
    }));
  };

  return (
    <div>
      <button onClick={openModal}>Создать пост</button>
      <Modal isShown={state.isShown} closeModal={openModal}>
        <PostForm
          inputBody={state.inputBody}
          inputTitle={state.inputTitle}
          setParentState={setState}
          createPost={createPost}
        />
      </Modal>
      <PostList posts={state.posts} />
    </div>
  );
};

export default App;
