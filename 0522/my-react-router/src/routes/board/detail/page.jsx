import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { fetchBoardItem } from "../../../../lib/apis/board_answer";

export default function BoardDetailPage() {
  // useParams: url path(:boardId) 변수 받기
  const params = useParams();

  const [detail, setDetail] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const boardId = params.boardId;
    fetchBoardItem(boardId).then((resp) => {
      setDetail(resp);
    });
  }, [params.boardId]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>BoardDetail</h1>
      <div>제목: {detail.title}</div>
      <div>내용: {detail.content}</div>
      <div>작성자: {detail.author}</div>
      <div>작성 일자: {detail.createdAt}</div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
}
