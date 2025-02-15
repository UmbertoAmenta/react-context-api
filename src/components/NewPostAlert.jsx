import React from "react";
import { useNewPostContext } from "./contexts/NewPostContext";

export default function NewPostAlert() {
  const { newPost } = useNewPostContext();

  if (!newPost) {
    return null;
  }
  return (
    <div className="newPostAlert">
      <h2>Nuovo Post</h2>
      <ul>
        <li>
          <em>ID (DB)</em>: {newPost.id}
        </li>
        <li>
          <em>Titolo</em>: {newPost.titolo}
        </li>
        <li>
          <em>Ricetta</em>:
          {newPost.dellaTradizione ? "Tradizionale" : "Rivisitata"}
        </li>
      </ul>
    </div>
  );
}
