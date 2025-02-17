import { useState, useTransition } from "react";

const Form = ({ addPost }) => {
  const [isPending, startTransition] = useTransition();
  const FormAction = async (formData) => {
    // 폼 제출 시 실행되는 함수
    const title = formData.get("title"); // formData에서 제목 가져오기
    const content = formData.get("content"); // formData에서 내용 가져오기
    const newPost = { title, content }; // 새로운 게시물 생성

    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000); // 2초 대기 (비동기 작업 시뮬레이션)
      });
      addPost(newPost); // 새 게시물 추가
    });
  };

  return (
    <>
      <form action={FormAction}>
        <input name="title" type="text" placeholder="title" />
        <input name="content" type="text" placeholder="content" />
        <button type="submit" disabled={isPending}>
          {isPending ? "submitting..." : "submit"}
        </button>
      </form>
    </>
  );
};

function TestTransition() {
  const [posts, setPosts] = useState([]); // 게시물 목록 상태
  const addPost = (newPost) => {
    // 새 게시물을 추가하는 함수
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <div>
      <Form addPost={addPost} />
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default TestTransition;
