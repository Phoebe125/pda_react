import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchBoardItem } from "../../../../lib/apis/boards";

export default function BoardDetailPage() {
  // useParams: url path(:boardId) 변수 받기
  const params = useParams();
  // useSearchParams: url querystring (? 뒤에 있는) 변수 받기
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   // searchParams.get(변수명) 으로 가져 오면 됨
  //   console.log(searchParams.get("where"));
  //   console.log(searchParams.get("cgr"));

  const [detail, setDetail] = useState(null);

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
    </div>
  );
}
