import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "띠모우",
    comment: "Hi, This is ddimo :)",
    id: "ddimohi",
  },
  {
    name: "페페",
    comment: "하이삐",
    id: "bboongbbi",
  },
  {
    name: "youngshin",
    comment: "Contact: blossom3@hyundai-ite.com",
    id: "Mr_pair",
  },
]

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} key={comment.id} />
        )
      })}
    </div>
  )
}

export default CommentList;